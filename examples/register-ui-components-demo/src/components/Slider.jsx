import { useState } from 'react';

function Slider({ label, marks, value, ...props }) {
  return (
    <div className="demo-slider">
      <label className="demo-slider-control">
        <span className="demo-slider-label">{label}</span>
        <input {...props} className="demo-slider-input" type="range" value={value} />
      </label>
      {marks && (
        <div className="demo-slider-marks" aria-hidden="true">
          {marks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SliderDemo() {
  const [volume, setVolume] = useState(45);
  const [range, setRange] = useState([20, 72]);
  return (
    <div className="demo-col">
      <Slider
        label={`Volume · ${volume}`}
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
        marks={[0, 25, 50, 75, 100]}
      />
      <Slider label="Disabled volume" defaultValue={75} disabled />
      <div className="demo-slider-range">
        <span className="demo-slider-label">
          Price range · ${range[0]}–${range[1]}
        </span>
        <Slider
          label="Minimum price"
          min="0"
          max={range[1]}
          step="1"
          value={range[0]}
          onChange={(event) =>
            setRange(([_, max]) => [Math.min(Number(event.target.value), max), max])
          }
          marks={[0, 25, 50, 75, 100]}
        />
        <Slider
          label="Maximum price"
          min={range[0]}
          max="100"
          step="1"
          value={range[1]}
          onChange={(event) =>
            setRange(([min]) => [min, Math.max(Number(event.target.value), min)])
          }
        />
      </div>
    </div>
  );
}
