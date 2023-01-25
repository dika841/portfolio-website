import NavBar from "./component/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import SocialLinks from "./component/SocialLinks";
import ProjectList from "./component/ProjectList";
import Experience from "./component/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <ProjectList />
      <Experience />
      <Contact />

      <SocialLinks />
    </>
  );
}

export default App;
