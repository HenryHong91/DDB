import "./App.css";
import Main from "./layout/Main/Main";
import Count from "./layout/Count/Count";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/count",
    element: <Count />,
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      className="flex justify-center items-center"
    >
      <div className="App">
        <Main />
        <Count />
      </div>
    </RouterProvider>
  );
}

export default App;
