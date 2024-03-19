// libs
import { Outlet } from 'react-router-dom';

// Component
export default function Main() {
  return (
    <main className="w-full h-full flex justify-center items-center flex-col px-5 md:max-w-5xl md:px-5">
      <Outlet />
    </main>
  );
}
