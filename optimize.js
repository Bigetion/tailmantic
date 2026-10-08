let _postcss = null;

async function getPostcss() {
  if (_postcss) return _postcss;
  try {
    const mod = await import('postcss');
    _postcss = mod.default ?? mod;
    return _postcss;
  } catch (error) {
    if (error.code === 'ERR_MODULE_NOT_FOUND' || error.code === 'MODULE_NOT_FOUND') {
      throw new Error(
        'CSS optimization requires postcss. Install postcss as a development dependency.',
        { cause: error },
      );
    }
    throw error;
  }
}

async function parseCss(css) {
  const postcss = await getPostcss();
  return postcss.parse(css);
}

/**
 * Minify CSS formatting without rewriting declaration values or nested rules.
 */
export async function minifyCSS(css) {
  const root = await parseCss(css);
  root.walkComments((comment) => {
    if (!comment.text.trimStart().startsWith('!')) comment.remove();
  });

  function compact(container) {
    container.raws.before = '';
    container.raws.after = '';
    for (const node of container.nodes || []) {
      node.raws.before = '';
      if (node.type === 'decl') {
        node.raws.between = ':';
      } else if (node.type === 'rule') {
        node.raws.between = '';
        compact(node);
      } else if (node.type === 'atrule' && node.nodes) {
        node.raws.between = '';
        if (!/keyframes$/i.test(node.name)) compact(node);
      }
    }
  }

  compact(root);
  return root.toString().trim();
}

/**
 * Merge adjacent rules with the same selector inside the same CSS container.
 * At-rules, including keyframes, retain their original structure.
 */
export async function deduplicateCSS(css) {
  const root = await parseCss(css);

  function mergeAdjacentRules(container) {
    if (!container.nodes) return;
    for (const node of container.nodes) {
      if (node.type === 'rule') mergeAdjacentRules(node);
      else if (node.type === 'atrule' && node.nodes && !/keyframes$/i.test(node.name)) {
        mergeAdjacentRules(node);
      }
    }

    for (let index = 1; index < container.nodes.length; index++) {
      const previous = container.nodes[index - 1];
      const current = container.nodes[index];
      if (
        previous.type !== 'rule' ||
        current.type !== 'rule' ||
        previous.selector !== current.selector
      )
        continue;
      for (const child of current.nodes) previous.append(child.clone());
      current.remove();
      index--;
    }
  }

  mergeAdjacentRules(root);
  return root.toString().trim();
}

/**
 * Optimize CSS: minify and deduplicate
 */
export async function optimizeCSS(css, options = {}) {
  const { minify = true, deduplicate = true } = options;

  let result = css;

  if (deduplicate) {
    result = await deduplicateCSS(result);
  }

  if (minify) {
    result = await minifyCSS(result);
  }

  return result;
}

/**
 * Calculate size savings from optimization
 */
export function getOptimizationStats(original, optimized) {
  const originalSize = Buffer.byteLength(original, 'utf8');
  const optimizedSize = Buffer.byteLength(optimized, 'utf8');
  const savings = originalSize - optimizedSize;
  const percent = originalSize > 0 ? ((savings / originalSize) * 100).toFixed(2) : 0;

  return {
    originalSize,
    optimizedSize,
    savings,
    percent: `${percent}%`,
  };
}

export default optimizeCSS;
