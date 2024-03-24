// components
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';
import FlexWrapper from '@/components/elements/FlexWrapper';

export default function Layout() {
  return (
    <FlexWrapper
      flexDirection="col"
      justifyContent="between"
      alignItems="center"
      classes="layout w-full h-full"
    >
      <Header />
      <Main />
      <Footer />
    </FlexWrapper>
  );
}
