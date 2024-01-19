import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientTable from "./ClientTable";
import NavbarTop from "./Navbar";
import Product from "./Product";
import Store from "./Store";
import Sale from "./sale";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <ClientTable /> },
      { path: "product", element: <Product /> },
      { path: "sale", element: <Sale /> },
      { path: "store", element: <Store /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider
        router={router}
        className="flex justify-center items-center"
      >
        <NavbarTop />
      </RouterProvider>
    </>
  );
}

export default App;
