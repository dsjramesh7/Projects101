import { Route, Routes } from "react-router-dom";
import Header from "./components/header/index";
import HomePage from "./pages/home/index";
import AddBlogPage from "./pages/add-blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/add-blog" element={<AddBlogPage />} />
      </Routes>
    </>
  );
}

export default App;
