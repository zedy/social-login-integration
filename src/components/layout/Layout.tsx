// components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import FlexWrapper from '../elements/FlexWrapper';

export default function Layout() {
  return (
    <FlexWrapper
      flexDirection="col"
      justifyContent="between"
      alignItems="center"
      classes="w-full h-full"
    >
      <Header />
      <Main />
      <Footer />
    </FlexWrapper>
  );
}
