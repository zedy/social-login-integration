// libs
import { RouterProvider } from 'react-router-dom';

// router
import Router from './routes/MainRoutes';
import { AuthProvider } from './context/AuthContext';

// Component
export default function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden font-nunito">
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </div>
  );
}
