import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import ResultPage from "./pages/ResultPage";
import classes from "./App.module.css";
// import { Helmet } from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "questions",
    element: <QuestionsPage />,
  },
  {
    path: "result",
    element: <ResultPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className={classes.background}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
