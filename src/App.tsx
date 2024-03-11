// libs
import { RouterProvider } from 'react-router-dom';

// router
import Router from './routes/MainRoutes';

// Component
export default function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden font-nunito">
      <RouterProvider router={Router} />
    </div>
  );
}
