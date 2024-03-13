/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserAddOutlined } from '@ant-design/icons';

// components
import FormInputElement, { InputType } from '../elements/FormInputElement';
import Button from '../elements/Button';
import FlexWrapper from '../elements/FlexWrapper';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const schemaValidation = yup
  .object({
    name: yup.string().required().min(3).max(32),
    email: yup.string().email().required().min(8).max(64),
    password: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .trim()
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
    passwordVerify: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordVerify: string;
};

export default function SignupForm() {
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
          label="Name"
          type={InputType.Text}
          error={errors}
          {...register('name', { required: true })}
        />
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
        <FormInputElement
          label="Password verify"
          type={InputType.Password}
          error={errors}
          {...register('passwordVerify', { required: true })}
        />
        <Button
          type="submit"
          icon={
            <UserAddOutlined style={{ color: '#fff', marginRight: '8px' }} />
          }
          className="w-full bg-teal-600 text-neutral-50 rounded py-2 scale-100 hover:scale-90 transition-all duration-30 hover:bg-teal-800"
        >
          Sign up
        </Button>
      </form>
    </FlexWrapper>
  );
}
