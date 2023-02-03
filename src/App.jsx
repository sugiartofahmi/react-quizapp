import Router from "./router";
import { RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <RouterProvider router={Router} />
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
