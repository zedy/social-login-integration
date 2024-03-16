// libs
import { Outlet } from 'react-router-dom';
import Container from './Container';

// Component
export default function Main() {
  return (
    <main className="w-full h-full">
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
