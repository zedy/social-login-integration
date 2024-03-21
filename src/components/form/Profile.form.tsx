// libs
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import * as yup from 'yup';

// components
import FormInputElement, {
  InputType,
} from '@/components/elements/FormInputElement';
import Button from '@/components/elements/Button';
import FlexWrapper from '@/components/elements/FlexWrapper';
import { useStore } from '@/store/store';
import FormTextareaElement from '@/components/elements/FormTextareaElement';
import GridWrapper from '@/components/elements/GridWrapper';
import { profileUpdateApi } from '@/api/authMutations';
import { genericToastError } from '@/utils/helpers';

const schemaValidation = yup.object({
  email: yup.string().email().required().min(8).max(64),
  bio: yup.string().max(1000),
  address: yup.string().max(256),
  company: yup.string().max(32),
  firstname: yup.string().required().min(3).max(32),
  lastname: yup.string().max(32),
  phoneNumber: yup.number(),
  id: yup.number().required(),
});

type FormData = {
  [key: string]: string | number;
};

function ProfileForm() {
  const { data, mutate, isError, isLoading, isSuccess } =
    useMutation(profileUpdateApi);
  const { updateProfile, currentUser } = useStore();
  const { email, profile } = currentUser;

  // if (!email) {
  //   return null;
  // }

  const { firstname, lastname, bio, address, company, phoneNumber, id } =
    profile;
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaValidation),
  });

  const defaultValues = {
    id,
    email: email || '',
    firstname,
    lastname: lastname || '',
    bio: bio || '',
    address: address || '',
    company: company || '',
    phoneNumber: phoneNumber || '',
  };

  const onSubmit = async () => {
    const formData = getValues();

    await mutate(formData);
    updateProfile({ ...profile, ...formData });
  };

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
      <input
        type="hidden"
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
            {...register('phoneNumber', {
              required: false,
              value: defaultValues.phoneNumber,
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
