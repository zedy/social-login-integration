import FlexWrapper from '@/components/elements/FlexWrapper';

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FlexWrapper
      flexDirection="col"
      alignItems="center"
      classes="w-full px-5 md:max-w-5xl md:px-5"
    >
      {children}
    </FlexWrapper>
  );
}
