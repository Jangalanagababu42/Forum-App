import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ForumPage from "./pages/ForumPage";
import SingleForumPage from "./pages/SingleForumPage";

function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:postId" element={<SingleForumPage />} />
      </Routes>
    </div>
  );
}

export default App;
