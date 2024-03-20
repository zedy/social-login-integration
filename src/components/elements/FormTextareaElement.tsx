// libs
import { ChangeHandler, FieldErrors } from 'react-hook-form';
import { get } from 'lodash';
import { forwardRef } from 'react';

// components
import FormError from '@/components/elements/FormError';

type Props = {
  label: string;
  name: string;
  error: FieldErrors;
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
};

/**
 * FormTextareaElement is component that returns
 * a form textarea element with a label and error message. It has
 * no state, it's just a simple textarea element.
 *
 * @param {Props} { onChange, onBlur, name, label, type, error }
 */
function FormTextareaElement(
  { onChange, onBlur, name, label, error }: Props,
  ref: React.Ref<HTMLTextAreaElement>
) {
  return (
    <div className="w-full bg-transparent mb-4">
      <div className="relative z-1 h-24">
        <textarea
          id={name}
          name={name}
          ref={ref}
          rows={4}
          onChange={onChange}
          onBlur={onBlur}
          placeholder=""
          className="z-20 w-full py-3 px-0 h-24 !bg-transparent text-gray-900 placeholder-transparent
          text-base font-normal leading-7 border-0 border-b-[1px] border-neutral-500 appearance-none
          peer focus:outline-none focus:ring-0 focus:border-gray-900 resize-none"
        />
        <label
          htmlFor={name}
          className="absolute z-10 left-0 -top-3.5 text-neutral-500 text-base font-normal transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs"
        >
          {label}
        </label>
        {get(error, name) ? (
          <FormError message={get(error[name], 'message') as string} />
        ) : null}
      </div>
    </div>
  );
}

export default forwardRef(FormTextareaElement);
