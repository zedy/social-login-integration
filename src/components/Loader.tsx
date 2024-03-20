// libs
import { LoadingOutlined } from '@ant-design/icons';

// components
import FlexWrapper from '@/components/elements/FlexWrapper';

// A presentational component that shows a loading spinner
export default function Loader() {
  return (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      classes="h-full bg-slate-800"
    >
      <LoadingOutlined style={{ fontSize: '50px', color: '#fff' }} />
    </FlexWrapper>
  );
}
