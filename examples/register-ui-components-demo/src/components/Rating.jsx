import { Star } from 'lucide-react';
import { useId, useState } from 'react';

export default function Rating() {
  const [rating, setRating] = useState(4);
  const [readOnly, setReadOnly] = useState(false);
  const gradientId = useId();
  const fillFor = (value) =>
    value <= rating ? 'currentColor' : value - rating === 0.5 ? `url(#${gradientId})` : 'none';

  return (
    <section className="demo-section">
      <span className="demo-section-title">Interactive rating with fractional precision</span>
      <svg className="demo-rating-gradient" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="50%" stopColor="#f4bd50" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <fieldset className="demo-rating">
        <legend className="sr-only">Rate this experience</legend>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            aria-label={`${value} ${value === 1 ? 'star' : 'stars'}`}
            aria-pressed={rating === value}
            disabled={readOnly}
            className={
              value <= rating ? 'demo-rating-star demo-rating-star-active' : 'demo-rating-star'
            }
            onClick={() => setRating(value)}
          >
            <Star size={22} fill={fillFor(value)} />
          </button>
        ))}
        <span className="demo-rating-value">{rating.toFixed(1)}</span>
      </fieldset>
      <label className="demo-rating-precision">
        Adjust in half-star steps
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={rating}
          disabled={readOnly}
          onChange={(event) => setRating(Number(event.target.value))}
        />
      </label>
      <label className="demo-rating-readonly">
        <input
          type="checkbox"
          checked={readOnly}
          onChange={(event) => setReadOnly(event.target.checked)}
        />
        Read-only interactive rating
      </label>
      <div className="demo-rating-static" role="img" aria-label="Read-only rating: 3.5 out of 5">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            size={18}
            aria-hidden="true"
            fill={value <= 3 ? 'currentColor' : value === 4 ? `url(#${gradientId})` : 'none'}
          />
        ))}
        <span>3.5</span>
      </div>
      <span className="demo-note">Your rating: {rating.toFixed(1)} out of 5.</span>
    </section>
  );
}
