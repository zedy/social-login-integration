/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginOutlined } from '@ant-design/icons';
import FormInputElement, { InputType } from '../elements/FormInputElement';
import Button from '../elements/Button';
import FlexWrapper from '../elements/FlexWrapper';

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
    <FlexWrapper flexDirection="col">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <FormInputElement
          label="Email"
          type={InputType.Email}
          error={errors}
          {...register('email', { required: true })}
        />
        <FormInputElement
          label="Password"
          type={InputType.Password}
          error={errors}
          {...register('password', { required: true })}
        />
        <Button
          type="submit"
          icon={<LoginOutlined style={{ color: '#fff', marginRight: '8px' }} />}
          className="w-full bg-emerald-900 text-neutral-50 rounded py-2 scale-100 hover:scale-90 transition-all duration-30 hover:bg-emerald-800"
        >
          Sign in
        </Button>
      </form>
    </FlexWrapper>
  );
}

export default LoginForm;
