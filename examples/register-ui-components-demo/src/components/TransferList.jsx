import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const INITIAL = ['Analytics', 'Billing', 'Integrations', 'Members'];

function toggleSelection(current, item) {
  return current.includes(item) ? current.filter((value) => value !== item) : [...current, item];
}

export default function TransferList() {
  const [available, setAvailable] = useState(INITIAL);
  const [chosen, setChosen] = useState(['Overview']);
  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [selectedChosen, setSelectedChosen] = useState([]);

  function moveSelected(
    items,
    selection,
    setSource,
    setDestination,
    clearSelection,
    clearDestinationSelection,
  ) {
    const moving = items.filter((item) => selection.includes(item));
    if (moving.length === 0) return;
    setDestination((current) => [...current, ...moving]);
    setSource((current) => current.filter((item) => !selection.includes(item)));
    clearSelection([]);
    clearDestinationSelection((current) => current.filter((item) => !moving.includes(item)));
  }

  function toggleAll(items, selection, setSelection) {
    setSelection(selection.length === items.length ? [] : [...items]);
  }

  return (
    <section className="demo-section">
      <span className="demo-section-title">Choose workspace sections</span>
      <div className="demo-transfer-list">
        {[
          {
            title: 'Available',
            items: available,
            selected: selectedAvailable,
            setSelected: setSelectedAvailable,
            setItems: setAvailable,
            setOther: setChosen,
            clearOtherSelected: setSelectedChosen,
            direction: 'right',
          },
          {
            title: 'Selected',
            items: chosen,
            selected: selectedChosen,
            setSelected: setSelectedChosen,
            setItems: setChosen,
            setOther: setAvailable,
            clearOtherSelected: setSelectedAvailable,
            direction: 'left',
          },
        ].map((column) => (
          <div className="demo-transfer-column" key={column.title}>
            <strong>
              {column.title} <span>{column.items.length}</span>
            </strong>
            <button
              type="button"
              className="demo-transfer-select-all"
              onClick={() => toggleAll(column.items, column.selected, column.setSelected)}
              disabled={column.items.length === 0}
            >
              {column.selected.length === column.items.length && column.items.length > 0
                ? 'Clear selection'
                : 'Select all'}
            </button>
            <ul aria-label={column.title}>
              {column.items.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className={
                      column.selected.includes(item)
                        ? 'demo-transfer-item demo-transfer-item-selected'
                        : 'demo-transfer-item'
                    }
                    aria-pressed={column.selected.includes(item)}
                    onClick={() => column.setSelected((current) => toggleSelection(current, item))}
                  >
                    {item}
                  </button>
                </li>
              ))}
              {column.items.length === 0 && <li className="demo-transfer-empty">No items</li>}
            </ul>
            <button
              type="button"
              className="demo-transfer-action"
              disabled={column.selected.length === 0}
              onClick={() =>
                moveSelected(
                  column.items,
                  column.selected,
                  column.setItems,
                  column.setOther,
                  column.setSelected,
                  column.clearOtherSelected,
                )
              }
            >
              {column.direction === 'right' ? (
                <>
                  Move selected <ArrowRight size={14} />
                </>
              ) : (
                <>
                  <ArrowLeft size={14} /> Remove selected
                </>
              )}
            </button>
          </div>
        ))}
      </div>
      <span className="demo-note">
        {selectedAvailable.length + selectedChosen.length} items selected for bulk actions.
      </span>
    </section>
  );
}
