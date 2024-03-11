/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schemaValidation = yup
  .object({
    email: yup.string().email().required().min(8).max(64),
    password: yup.string().required().max(64),
  })
  .required();

type FormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="login w-full rounded-xl">
      <div className="flex flex-col">
        <div className="text-black text-xl font-bold leading-normal tracking-tight mb-12">
          Sign in to your account
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full bg-transparent mb-4">
            <div className="relative z-1 h-16">
              <input
                id="email"
                type="text"
                placeholder=" "
                className="z-20 w-full py-3 px-0 h-12 bg-transparent text-gray-900 placeholder-transparent
                  text-base font-normal leading-7 border-0 border-b-[1px] border-neutral-500 appearance-none
                  peer focus:outline-none focus:ring-0 focus:border-gray-900"
                {...register('email', { required: true })}
              />
              <label
                htmlFor="email"
                className="absolute z-10 left-0 -top-3.5 text-neutral-500 text-base font-normal transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs"
              >
                Email
              </label>
            </div>
          </div>
          <div className="w-full bg-transparent mb-4">
            <div className="relative z-1 h-16">
              <input
                id="password"
                type="password"
                placeholder=" "
                className="z-20 w-full py-3 px-0 h-12 bg-transparent text-gray-900 placeholder-transparent
                  text-base font-normal leading-7 border-0 border-b-[1px] border-neutral-500 appearance-none
                  peer focus:outline-none focus:ring-0 focus:border-gray-900"
                {...register('password', { required: true })}
              />
              <label
                htmlFor="password"
                className="absolute z-10 left-0 -top-3.5 text-neutral-500 text-base font-normal transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                  peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs"
              >
                Password
              </label>
            </div>
          </div>
          <div className="w-full mt-12">
            <button
              className="w-full bg-emerald-900 text-neutral-50 rounded py-2 scale-100 hover:scale-90 transition-all duration-30 hover:bg-emerald-800"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
