import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '../src/routes/routes';
import { Toaster } from '@pheralb/toast';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position='top-right' theme='system' maxToasts={8} toastOptions={{
     animationOnClose:"swipe",
    }}/>
    <RouterProvider router={router} />
  </StrictMode>
);
