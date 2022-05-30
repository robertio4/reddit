import * as React from 'react';
import styles from './index.module.css';

interface Props<T> {
  values: { label: string; value: T }[];
  checked: T;
  setChecked: (value: T) => void;
}

function RadioGroup<T extends string>({
  values,
  checked,
  setChecked,
}: Props<T>) {
  return (
    <div data-testid="radioGroup" className={styles.container}>
      <fieldset>
        {values.map(({ label, value }) => (
          <span key={value}>
            <input
              id={value}
              data-testid={`radioGroupButton${value}`}
              type="radio"
              name={label}
              value={value}
              checked={value === checked}
              onChange={() => setChecked(value)}
            />
            <label htmlFor={value}>{label}</label>
          </span>
        ))}
      </fieldset>
    </div>
  );
}

export default RadioGroup;
