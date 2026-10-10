export default function Paper() {
  const levels = [0, 1, 2, 3, 4, 8];
  return (
    <section className="demo-section">
      <span className="demo-section-title">Surface variants and elevation levels</span>
      <div className="demo-paper-grid">
        <article className="demo-paper demo-paper-flat">
          <strong>Flat</strong>
          <span>Subtle surface for grouped content.</span>
        </article>
        <article className="demo-paper demo-paper-raised">
          <strong>Raised</strong>
          <span>Elevation separates this from the page.</span>
        </article>
        <article className="demo-paper demo-paper-outlined">
          <strong>Outlined</strong>
          <span>A border defines the content boundary.</span>
        </article>
      </div>
      <div className="demo-paper-grid demo-paper-elevations">
        {levels.map((level) => (
          <article className={`demo-paper demo-paper-elevation-${level}`} key={level}>
            <strong>Elevation {level}</strong>
            <span>Layered surface at elevation level {level}.</span>
          </article>
        ))}
      </div>
      <article className="demo-paper demo-paper-nested">
        <strong>Nested surfaces</strong>
        <span>Elevated paper can contain a more subtle outlined surface.</span>
        <div className="demo-paper demo-paper-outlined">
          <strong>Inner surface</strong>
          <span>Content remains grouped.</span>
        </div>
      </article>
    </section>
  );
}
