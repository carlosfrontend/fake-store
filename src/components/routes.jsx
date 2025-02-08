import App from "../App";
import {Home} from "./Home/Home";
import {Cart} from "./Cart/Cart";
import {Shop} from "./Shop/Shop";
import {ErrorPage} from "./ErrorPage/ErrorPage";
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
];

export default routes;
