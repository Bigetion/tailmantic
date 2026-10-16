import { Pagination } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('pagination');
const USAGE_CODE = `import { useState } from 'react';
import { Pagination } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/pagination/styles';

const [page, setPage] = useState(1);

<Pagination
  count={12}
  page={page}
  onChange={(_event, nextPage) => setPage(nextPage)}
  showFirstButton
  showLastButton
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/PaginationPage.jsx',
    'Dedicated page and live navigation, outlined, and table pagination examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/pagination/',
    'Controlled pagination with page ranges, boundary controls, and accessible labels.',
  ],
  [
    'Styles',
    'packages/ui-components/src/pagination/pagination.styles.js',
    'Package-owned pagination states and example layout styles.',
  ],
];

const PROJECTS = Array.from({ length: 24 }, (_, index) => ({
  id: `PRJ-${String(1240 + index)}`,
  name: ['Website refresh', 'Mobile onboarding', 'Design system', 'Billing portal'][index % 4],
  owner: ['Avery Chen', 'Jordan Lee', 'Sam Rivera'][index % 3],
  status: ['In progress', 'In review', 'Complete'][index % 3],
}));

function BasicPaginationExample() {
  const [page, setPage] = useState(4);
  const pageCount = 12;

  return (
    <div className="tm-pagination-example">
      <div className="tm-pagination-example-heading">
        <strong>Project activity</strong>
        <span>
          Page {page} of {pageCount}
        </span>
      </div>
      <Pagination
        count={pageCount}
        page={page}
        showFirstButton
        showLastButton
        onChange={(_event, nextPage) => setPage(nextPage)}
      />
      <span className="tm-pagination-example-status" role="status" aria-live="polite">
        Showing projects {(page - 1) * 8 + 1}–{Math.min(page * 8, 96)} of 96
      </span>
    </div>
  );
}

function OutlinedPaginationExample() {
  const [page, setPage] = useState(9);
  const pageCount = 24;

  return (
    <div className="tm-pagination-example tm-pagination-example-outlined">
      <div className="tm-pagination-example-heading">
        <strong>Outlined controls</strong>
        <span>Jump between {pageCount} pages</span>
      </div>
      <Pagination
        count={pageCount}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        showFirstButton
        showLastButton
        aria-label="Outlined pagination"
        onChange={(_event, nextPage) => setPage(nextPage)}
      />
      <span className="tm-pagination-example-status" role="status" aria-live="polite">
        Page {page} selected
      </span>
    </div>
  );
}

function PaginatedProjectsExample() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const pageCount = Math.ceil(PROJECTS.length / pageSize);
  const firstProject = (page - 1) * pageSize;
  const visibleProjects = PROJECTS.slice(firstProject, firstProject + pageSize);
  const firstRow = firstProject + 1;
  const lastRow = Math.min(firstProject + pageSize, PROJECTS.length);

  return (
    <div className="tm-pagination-example tm-pagination-example-table-card">
      <div className="tm-pagination-example-table-header">
        <div className="tm-pagination-example-heading">
          <strong>Recent projects</strong>
          <span>
            Showing {firstRow}–{lastRow} of {PROJECTS.length}
          </span>
        </div>
        <label className="tm-pagination-example-size-control">
          Rows per page
          <select
            value={pageSize}
            onChange={(event) => {
              setPageSize(Number(event.target.value));
              setPage(1);
            }}
          >
            {[4, 6, 12].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="tm-pagination-example-table-wrap">
        <table className="tm-pagination-example-table">
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Owner</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleProjects.map((project) => (
              <tr key={project.id}>
                <td>
                  <strong>{project.name}</strong>
                  <small>{project.id}</small>
                </td>
                <td>{project.owner}</td>
                <td>
                  <span
                    className={`tm-pagination-example-status-pill tm-pagination-example-status-pill-${project.status.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tm-pagination-example-table-footer">
        <span className="tm-pagination-example-status" role="status" aria-live="polite">
          Page {page} of {pageCount}
        </span>
        <Pagination
          count={pageCount}
          page={page}
          showFirstButton
          showLastButton
          aria-label="Project table pagination"
          onChange={(_event, nextPage) => setPage(nextPage)}
        />
      </div>
    </div>
  );
}

export default function PaginationPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use Pagination with a controlled page value and update it from the onChange callback."
      usageDescription="Pagination supports sibling and boundary page counts, optional first and last controls, disabled states, and accessible page labels."
    >
      <div className="component-showcase component-showcase-pagination">
        <DemoPanel
          title="Page navigation"
          caption="Move through a page range and keep the current page and result range in sync."
          code={getExampleCode(component.slug, 'Page navigation')}
        >
          <BasicPaginationExample />
        </DemoPanel>
        <DemoPanel
          title="Outlined pagination"
          caption="Use bordered page controls with first and last shortcuts for a longer range."
          code={getExampleCode(component.slug, 'Outlined pagination')}
        >
          <OutlinedPaginationExample />
        </DemoPanel>
        <DemoPanel
          title="Rows per page"
          caption="Change the number of visible results and reset pagination to the first page."
          code={getExampleCode(component.slug, 'Rows per page')}
        >
          <PaginatedProjectsExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
