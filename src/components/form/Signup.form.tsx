/* eslint-disable jsx-a11y/label-has-associated-control */
// libs
import toast from 'react-hot-toast';
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
    firstName: yup.string().required().min(3).max(32),
    lastName: yup.string().required().min(3).max(32),
    signupEmail: yup.string().email().required().min(8).max(64),
    signupPassword: yup
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
      .oneOf([yup.ref('signupPassword')], 'Passwords must match'),
  })
  .required();

type FormData = {
  firstName: string;
  lastName: string;
  signupEmail: string;
  signupPassword: string;
  passwordVerify: string;
};

type Props = {
  mutationCallback: (data: Record<string, string>) => void;
};

export default function SignupForm({ mutationCallback }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (formData: FormData) => {
    try {
      mutationCallback({
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.signupEmail,
        password: formData.signupPassword,
      });
    } catch (err: unknown) {
      toast.error('User creation encountered an error');
    }
  };

  return (
    <FlexWrapper flexDirection="col">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <FlexWrapper flexDirection="col" classes="sm:flex-row">
          <FormInputElement
            label="First name"
            type={InputType.Text}
            error={errors}
            {...register('firstName', { required: true })}
          />
          <FormInputElement
            label="Last name"
            type={InputType.Text}
            error={errors}
            {...register('lastName', { required: true })}
          />
        </FlexWrapper>
        <FormInputElement
          label="Email"
          type={InputType.Email}
          error={errors}
          {...register('signupEmail', { required: true })}
        />
        <FlexWrapper flexDirection="col" classes="sm:flex-row">
          <FormInputElement
            label="Password"
            type={InputType.Password}
            error={errors}
            {...register('signupPassword', { required: true })}
          />
          <FormInputElement
            label="Password verify"
            type={InputType.Password}
            error={errors}
            {...register('passwordVerify', { required: true })}
          />
        </FlexWrapper>
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
