import App from "../App";
import {Home} from "../../src/components/Home/Home";
import {Cart} from "../../src/components/Cart/Cart";
import {Shop} from "../../src/components/Shop/Shop";
import {ErrorPage} from "../../src/components/ErrorPage/ErrorPage";
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
