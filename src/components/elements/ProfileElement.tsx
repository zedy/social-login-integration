import { memo } from 'react';

type Props = {
  label: string;
  value: string;
};

function ProfileElement({ label, value }: Props) {
  const id = label.replace(/\s/g, '_').toLowerCase();

  return (
    <div className="w-full bg-transparent mb-4">
      <div className="relative z-1 h-16">
        <input
          id={id}
          name={id}
          value={value}
          readOnly
          className="z-20 w-full py-3 px-0 h-12 !bg-transparent text-gray-900 placeholder-transparent
          text-base font-normal leading-7 border-0 appearance-none
          peer focus:outline-none focus:ring-0 focus:border-gray-900"
        />
        <label
          htmlFor={id}
          className="absolute z-10 left-0 -top-3.5 text-neutral-500 text-base font-normal transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default memo(ProfileElement);
