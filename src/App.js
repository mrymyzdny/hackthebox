import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Teams from "./components/teams/Teams";
import About from "./components/about/About";
import Comments from "./components/comments/Comments";
import Blogs from "./components/blogs/Blogs";
import Otherpages from "./components/otherpages/Otherpages";
import Footer from "./components/footer/Footer";
import { commentsData } from "./components/comments/commentData";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Header />
        <Teams />
        <About />
        <Comments slides={commentsData} />
        <Blogs />
      </div>
      <Otherpages />
      <Footer />
    </div>
  );
}

export default App;
