// components
import FlexWrapper from '../FlexWrapper';

type Props = {
  children: React.ReactNode;
  classes: string;
};

export default function SocialButton({ children, classes }: Props) {
  return (
    <FlexWrapper
      classes={`!w-16 h-1/3 transition-all duration-150 ease-in hover:translate-x-2 bg-white shadow-md rounded-lg cursor-pointer pr-3 mb-1 last:mb-0 ${classes} justify-end`}
      alignItems="center"
    >
      {children}
    </FlexWrapper>
  );
}
