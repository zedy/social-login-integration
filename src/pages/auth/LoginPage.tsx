// components
import LoginForm from '../../components/form/login.form';

// Component
export default function LoginPage() {
  const handleSingUpClick = () => {
    console.log('Sign up clicked');
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-login-blur bg-no-repeat bg-cover bg-center flex flex-col z-0" />
      <h1 className="invisible">Travel</h1>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div
          className="text-neutral-200 z-10 text-5xl absolute top-[15%]"
          style={{ textShadow: '0px 0px 2px rgba(0,0,0,0.55)' }}
        >
          <span className="text-emerald-900">T</span>
          <span>ravel</span>
        </div>
        <div className="flex flex-col p-5 relative z-10 bg-slate-200 rounded-md">
          <LoginForm />
          <span className="mt-5">
            Don&apos;t have an account?{' '}
            <span
              className="text-emerald-800 cursor-pointer"
              onChange={handleSingUpClick}
            >
              <strong className="no-underline hover:underline transition-all duration-300">
                Sign up
              </strong>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
