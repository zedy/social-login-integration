// libs
import { EditOutlined } from '@ant-design/icons';

// components
import Button from '@/components/elements/Button';
import FlexWrapper from '@/components/elements/FlexWrapper';
import Typography, { Type } from '@/components/elements/Typography';

type Props = {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
};

/**
 * Simple component that handles the logic for editing the user profile.
 *
 * Basically, it's a button that toggles the user profile form to be editable.
 *
 * @returns JSX.Element
 */
export default function ProfileEditor({ callback, state }: Props) {
  return (
    <FlexWrapper classes="!w-auto absolute top-10 right-0">
      <Button onClick={() => callback(!state)}>
        <EditOutlined style={{ marginRight: '8px' }} />
        <Typography component={Type.SPAN}>
          {`${!state ? 'Edit' : 'Lock'}`} Profile
        </Typography>
      </Button>
    </FlexWrapper>
  );
}
