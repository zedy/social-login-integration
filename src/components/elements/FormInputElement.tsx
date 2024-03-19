// libs
import { ChangeHandler, FieldErrors } from 'react-hook-form';
import { get } from 'lodash';
import { forwardRef } from 'react';

// components
import FormError from './FormError';

export enum InputType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Number = 'number',
  Hidden = 'hidden',
}

type Props = {
  label: string;
  name: string;
  type: string;
  error: FieldErrors;
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
};

/**
 * FormInputElement is component that returns
 * a form input element with a label and error message. It has
 * no state, it's just a simple input element.
 *
 * @param {Props} { onChange, onBlur, name, label, type, error }
 */
function FormInputElement(
  { onChange, onBlur, name, label, type, error }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className="w-full bg-transparent mb-4">
      <div className="relative z-1 h-16">
        <input
          id={name}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder=" "
          className="z-20 w-full py-3 px-0 h-12 !bg-transparent text-gray-900 placeholder-transparent
          text-base font-normal leading-7 border-0 border-b-[1px] border-neutral-500 appearance-none
          peer focus:outline-none focus:ring-0 focus:border-gray-900"
        />
        <label
          htmlFor={name}
          className="absolute z-10 left-0 -top-3.5 text-neutral-500 text-base font-normal transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs"
        >
          {label}
        </label>
        {get(error, name) && type !== 'hidden' ? (
          <FormError message={get(error[name], 'message') as string} />
        ) : null}
      </div>
    </div>
  );
}

export default forwardRef(FormInputElement);
