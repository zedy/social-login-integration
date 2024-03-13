// components
import Typography, { Type } from '../../components/elements/Typography';
import LoginComponent from './Login';
import SignUpComponent from './Signup';
import FullPageSlide, {
  AnimationType,
  BgType,
} from '../../components/elements/slides/FullPageSlide';
import { SlideContextProvider } from '../../context/SlideContext';

/**
 * A function component that renders the LoginPage.
 *
 * @returns A JSX.Element
 */
export default function LoginPage() {
  return (
    <div className="w-full h-full">
      <Typography component={Type.H1} isSr>
        Viaggiare
      </Typography>
      <SlideContextProvider>
        <FullPageSlide
          bg={BgType.Forest}
          id="login"
          type={AnimationType.Left}
          title="Viaggiare"
          titleColor="emerald-800"
        >
          <LoginComponent />
        </FullPageSlide>
        <FullPageSlide
          bg={BgType.Beach}
          id="signup"
          type={AnimationType.Right}
          title="Benvenuta"
          titleColor="teal-600"
        >
          <SignUpComponent />
        </FullPageSlide>
      </SlideContextProvider>
    </div>
  );
}
