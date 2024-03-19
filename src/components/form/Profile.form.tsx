// libs
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { useCallback } from 'react';

// components
import FormInputElement, { InputType } from '../elements/FormInputElement';
import Button from '../elements/Button';
import FlexWrapper from '../elements/FlexWrapper';
import { useStore } from '../../store/store';
import FormTextareaElement from '../elements/FormTextareaElement';
import GridWrapper from '../elements/GridWrapper';
import { profileUpdateApi } from '../../api/mutations';
import { genericToastError } from '../../utils/helpers';

const schemaValidation = yup.object({
  email: yup.string().email().required().min(8).max(64),
  bio: yup.string().max(1000),
  address: yup.string().max(256),
  company: yup.string().max(32),
  firstname: yup.string().required().min(3).max(32),
  lastname: yup.string().max(32),
  phone: yup.number(),
  id: yup.number().required(),
});

type FormData = {
  [key: string]: string | number;
};

function ProfileForm() {
  const { data, mutate, isError, isLoading, isSuccess } =
    useMutation(profileUpdateApi);
  const {
    updateProfile,
    currentUser: { email, profile },
  } = useStore();
  const { firstname, lastname, bio, address, company, phone, id } = profile;
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const defaultValues = {
    id,
    email,
    firstname,
    lastname: lastname || '',
    bio: bio || '',
    address: address || '',
    company: company || '',
    phone: Number(phone),
  };

  const onSubmit = useCallback(async () => {
    const formData = getValues();

    await mutate(formData);
    updateProfile({ ...profile, ...getValues() });
  }, []);

  if (isSuccess) {
    const { message } = data;

    toast.success(message, {
      id: 'profile-update',
    });
  } else if (isError) {
    genericToastError();
  }

  return (
    <form className="w-full">
      <FormInputElement
        label=""
        type={InputType.Hidden}
        error={errors}
        {...register('id', { required: true, value: defaultValues.id })}
      />
      <FlexWrapper flexDirection="col" alignItems="center">
        <GridWrapper>
          <FormInputElement
            label="First name *"
            type={InputType.Text}
            error={errors}
            {...register('firstname', {
              required: true,
              value: defaultValues.firstname,
            })}
          />
          <FormInputElement
            label="Last name *"
            type={InputType.Text}
            error={errors}
            {...register('lastname', {
              required: true,
              value: defaultValues.lastname,
            })}
          />
        </GridWrapper>
        <GridWrapper>
          <FormInputElement
            label="Email *"
            type={InputType.Email}
            error={errors}
            {...register('email', {
              required: true,
              value: defaultValues.email,
            })}
          />
          <FormInputElement
            label="Phone"
            type={InputType.Number}
            error={errors}
            {...register('phone', {
              required: false,
              value: defaultValues.phone,
            })}
          />
        </GridWrapper>
        <GridWrapper>
          <FormInputElement
            label="Address"
            type={InputType.Text}
            error={errors}
            {...register('address', {
              required: false,
              value: defaultValues.address,
            })}
          />
          <FormInputElement
            label="Company name"
            type={InputType.Text}
            error={errors}
            {...register('company', {
              required: false,
              value: defaultValues.company,
            })}
          />
        </GridWrapper>
        <FlexWrapper>
          <FormTextareaElement
            label="Bio"
            error={errors}
            {...register('bio', { required: false, value: defaultValues.bio })}
          />
        </FlexWrapper>
        <FlexWrapper justifyContent="center" classes="mt-12">
          <Button
            type="button"
            onClick={onSubmit}
            disabled={isLoading}
            className="w-64 bg-emerald-900 text-neutral-50 rounded py-2 scale-100 hover:scale-90 transition-all duration-30 hover:bg-emerald-800"
          >
            {isLoading ? <LoadingOutlined /> : 'Submit'}
          </Button>
        </FlexWrapper>
      </FlexWrapper>
    </form>
  );
}

export default ProfileForm;
