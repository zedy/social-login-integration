// components
import FlexWrapper from '../FlexWrapper';

type Props = {
  children: React.ReactNode;
  classes: string;
};

export default function SocialButton({ children, classes }: Props) {
  return (
    <FlexWrapper
      classes={`h-10 bg-white shadow-md rounded-lg cursor-pointer px-1 mb-2 last:mb-0 ${classes} justify-center items-center`}
      alignItems="center"
    >
      {children}
    </FlexWrapper>
  );
}
