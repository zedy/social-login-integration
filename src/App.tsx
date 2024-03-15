// libs
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// router
import Router from './routes/MainRoutes';

// Component
export default function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden font-nunito">
      <RouterProvider router={Router} />
      <Toaster />
    </div>
  );
}
