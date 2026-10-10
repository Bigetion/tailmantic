function Progress({ value, label, buffer }) {
  const indeterminate = value === null;
  return (
    <div className="demo-progress">
      <div className="demo-progress-label">
        <span>{label}</span>
        {!indeterminate && <span>{value}%</span>}
      </div>
      <div
        className={`demo-progress-track${indeterminate ? ' demo-progress-indeterminate' : ''}`}
        role="progressbar"
        aria-label={label}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={indeterminate ? undefined : value}
      >
        {buffer !== undefined && (
          <span className="demo-progress-buffer" style={{ width: `${buffer}%` }} />
        )}
        <span
          className="demo-progress-bar"
          style={indeterminate ? undefined : { width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function ProgressDemo() {
  return (
    <div className="demo-col">
      <Progress value={38} label="Uploading files" />
      <Progress value={72} label="Build progress" />
      <Progress value={null} label="Indeterminate" />
      <Progress value={56} buffer={82} label="Buffered download" />
      <div className="demo-progress-circular-row">
        {[28, 68, 92].map((value) => (
          <div
            className="demo-progress-circular"
            role="progressbar"
            aria-label={`Circular progress ${value}%`}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              background: `conic-gradient(var(--rgi-blue-dark) ${value}%, #293447 ${value}%)`,
            }}
            key={value}
          >
            <span>{value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
