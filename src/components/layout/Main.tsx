// libs
import { Outlet } from 'react-router-dom';

// Component
export default function Main() {
  return (
    <main className="w-full h-full">
      <Outlet />
    </main>
  );
}
