// components

import { useStore } from '../store/store';
import FlexWrapper from './elements/FlexWrapper';
import GridWrapper from './elements/GridWrapper';
import ProfileElement from './elements/ProfileElement';

function ProfileData() {
  const {
    currentUser: { email, profile },
  } = useStore();
  const { firstname, lastname, bio, address, company, phone, id } = profile;

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

  return (
    <section className="w-full">
      <FlexWrapper flexDirection="col" alignItems="center">
        <GridWrapper>
          <ProfileElement label="First name" value={defaultValues.firstname} />
          <ProfileElement label="Last name" value={defaultValues.lastname} />
        </GridWrapper>
        <GridWrapper>
          <ProfileElement label="Email" value={defaultValues.email} />
          <ProfileElement
            label="Phone"
            value={defaultValues.phone.toString()}
          />
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
