// components
import { useStore } from '@/store/store';
import FlexWrapper from '@/components/elements/FlexWrapper';
import GridWrapper from '@/components/elements/GridWrapper';
import ProfileElement from '@/components/elements/ProfileElement';

function ProfileData() {
  const { currentUser } = useStore();

  if (!currentUser) return null;

  const { profile, email } = currentUser;
  console.log(currentUser);
  const { firstname, lastname, bio, address, company, phoneNumber, id } =
    profile;

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

  return (
    <section className="w-full">
      <FlexWrapper flexDirection="col" alignItems="center">
        <GridWrapper>
          <ProfileElement label="First name" value={defaultValues.firstname} />
          <ProfileElement label="Last name" value={defaultValues.lastname} />
        </GridWrapper>
        <GridWrapper>
          <ProfileElement label="Email" value={defaultValues.email} />
          <ProfileElement label="Phone" value={defaultValues.phoneNumber} />
        </GridWrapper>
        <GridWrapper>
          <ProfileElement label="Address" value={defaultValues.address} />
          <ProfileElement label="Company name" value={defaultValues.company} />
        </GridWrapper>
        <FlexWrapper>
          <ProfileElement label="Bio" value={defaultValues.bio} />
        </FlexWrapper>
      </FlexWrapper>
    </section>
  );
}

export default ProfileData;
