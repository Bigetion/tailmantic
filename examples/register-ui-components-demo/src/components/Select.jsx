import { useState } from 'react';

function Select({ label, children, ...props }) {
  return (
    <label className="demo-select">
      <span className="demo-select-label">{label}</span>
      <select {...props} className="demo-select-input">
        {children}
      </select>
    </label>
  );
}

export default function SelectDemo() {
  const [selectedTeams, setSelectedTeams] = useState(['design', 'platform']);
  return (
    <div className="demo-col">
      <Select label="Workspace" defaultValue="design">
        <option value="design">Design system</option>
        <option value="platform">Platform</option>
        <option value="mobile">Mobile</option>
      </Select>
      <Select
        label="Teams (multiple selection)"
        multiple
        size={4}
        value={selectedTeams}
        onChange={(event) => {
          setSelectedTeams(Array.from(event.target.selectedOptions, (option) => option.value));
        }}
      >
        <option value="design">Design</option>
        <option value="platform">Platform</option>
        <option value="mobile">Mobile</option>
        <option value="research">Research</option>
      </Select>
      <span className="demo-note">Selected teams: {selectedTeams.join(', ') || 'none'}</span>
    </div>
  );
}
