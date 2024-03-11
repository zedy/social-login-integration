// components
import FlexWrapper from '../../components/elements/FlexWrapper';
import Typography, { Type } from '../../components/elements/Typography';
import LoginForm from '../../components/form/login.form';

// Component
export default function LoginPage() {
  const handleSingUpClick = () => {
    console.log('Sign up clicked');
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-login-blur bg-no-repeat bg-cover bg-center flex flex-col z-0" />
      <Typography component={Type.H1} isSr>
        Viaggiare
      </Typography>
      <FlexWrapper
        flexDirection="col"
        justifyContent="center"
        alignItems="center"
        classes="h-full"
      >
        <Typography
          component={Type.SPAN}
          classes="z-10 !text-5xl absolute top-[8%] underline underline-emerald-800 text-emerald-800"
        >
          Viaggiare
        </Typography>
        <FlexWrapper
          flexDirection="col"
          classes="w-auto p-5 relative z-10 bg-slate-200 rounded-md"
        >
          <Typography
            component={Type.SPAN}
            classes="text-black text-xl font-bold leading-normal tracking-tight mb-12 text-center"
          >
            Sign in to your account
          </Typography>
          <LoginForm />
          <Typography component={Type.SPAN} classes="mt-5">
            Don&apos;t have an account?{' '}
            <Typography
              component={Type.SPAN}
              classes="text-emerald-800 cursor-pointer"
            >
              <strong
                className="no-underline hover:underline transition-all duration-300"
                onChange={handleSingUpClick}
              >
                Sign up
              </strong>
            </Typography>
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
}
