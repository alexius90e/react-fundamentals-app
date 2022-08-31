import { ChangeEvent } from 'react';
import './Input.scss';
interface InputProps {
  label?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown;
  type?: 'text' | 'number' | 'search' | 'password' | 'color';
}

function Input(props: InputProps): JSX.Element {
  return (
    <div className="Input">
      <label className="Input__label">
        {props.label}
        <input
          className="Input__input"
          type={props.type ?? 'text'}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}

export default Input;
