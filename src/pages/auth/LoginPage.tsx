// components
import LoginForm from '../../components/form/login.form';

// Component
export default function LoginPage() {
  return (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-login-blur bg-no-repeat bg-cover bg-center flex flex-col z-0" />
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex relative z-10 bg-slate-100 rounded-md">
          <div className="">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
