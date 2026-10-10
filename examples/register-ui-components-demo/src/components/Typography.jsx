import { useState } from 'react';

export default function Typography() {
  const [weight, setWeight] = useState('600');
  const [color, setColor] = useState('theme');
  const [alignment, setAlignment] = useState('left');
  const textStyle = {
    fontWeight: Number(weight),
    color: color === 'theme' ? undefined : color,
    textAlign: alignment,
  };
  return (
    <section className="demo-section">
      <span className="demo-section-title">Type scale</span>
      <div className="demo-typography-controls">
        <label>
          Weight
          <select value={weight} onChange={(event) => setWeight(event.target.value)}>
            <option value="400">Regular</option>
            <option value="500">Medium</option>
            <option value="600">Semibold</option>
            <option value="700">Bold</option>
          </select>
        </label>
        <label>
          Color
          <select value={color} onChange={(event) => setColor(event.target.value)}>
            <option value="theme">Theme</option>
            <option value="#8caaff">Blue</option>
            <option value="#5ed6a5">Green</option>
            <option value="#f4bd50">Amber</option>
          </select>
        </label>
        <label>
          Alignment
          <select value={alignment} onChange={(event) => setAlignment(event.target.value)}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </label>
      </div>
      <div className="demo-typography">
        <div>
          <span>Display / 32</span>
          <h1 style={textStyle}>Design with clarity</h1>
        </div>
        <div>
          <span>Heading / 24</span>
          <h2 style={textStyle}>Building thoughtful interfaces</h2>
        </div>
        <div>
          <span>Subheading / 16</span>
          <h3 style={textStyle}>Components and patterns</h3>
        </div>
        <div>
          <span>Body / 14</span>
          <p style={textStyle}>
            Readable body text keeps product content clear and comfortable to scan.
          </p>
        </div>
        <div>
          <span>Caption / 12</span>
          <small style={textStyle}>Supporting labels and secondary information</small>
        </div>
      </div>
    </section>
  );
}
