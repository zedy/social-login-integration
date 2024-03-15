import { LoadingOutlined } from '@ant-design/icons';
import FlexWrapper from './elements/FlexWrapper';
import Typography, { Type } from './elements/Typography';

// A presentational component that shows a loading spinner
export default function Loading() {
  return (
    <FlexWrapper
      justifyContent="center"
      alignItems="center"
      flexDirection="col"
      classes="absolute h-full bg-slate-100 opacity-50 z-50 top-0 left-0"
    >
      <Typography component={Type.SPAN} classes="mb-1">
        Please wait...
      </Typography>
      <LoadingOutlined style={{ fontSize: '50px', color: '#000' }} />
    </FlexWrapper>
  );
}
