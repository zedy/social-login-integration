import FlexWrapper from '../components/elements/FlexWrapper';
import ProfileForm from '../components/form/Profile.form';
import ProfilePicture from '../components/home/ProfilePicture';

// Component
export default function HomePage() {
  return (
    <FlexWrapper
      alignItems="center"
      flexDirection="col"
      classes="h-full relative"
    >
      <ProfilePicture />
      <ProfileForm />
    </FlexWrapper>
  );
}
