// libs
import { useState } from 'react';

// components
import ProfileData from '../components/ProfileData';
import ProfileEditor from '../components/ProfileEditor';
import FlexWrapper from '../components/elements/FlexWrapper';
import ProfileForm from '../components/form/Profile.form';
import ProfilePicture from '../components/home/ProfilePicture';

// Component
export default function HomePage() {
  // this could have been implemented via a context provider
  // but for the sake of simplicity, I'm using a local state
  const [isEditable, setIsEditable] = useState<boolean>(false);

  return (
    <FlexWrapper
      alignItems="center"
      flexDirection="col"
      classes="h-full relative"
    >
      <ProfilePicture />
      <ProfileEditor callback={setIsEditable} state={isEditable} />
      {isEditable ? <ProfileForm /> : <ProfileData />}
    </FlexWrapper>
  );
}
