// libs
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// router
import Router from '@/routes/MainRoutes';
import { ModalContextProvider } from '@/context/ModalContext';

// Component
export default function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden font-comfortaa bg-stone-100">
      <ModalContextProvider>
        <RouterProvider router={Router} />
      </ModalContextProvider>
      <Toaster />
      <div id="modal-root" />
    </div>
  );
}
