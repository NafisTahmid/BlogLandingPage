import Blog from "./Components/Blog/Blog";
import GraphicDesign from "./Components/GraphicDesign/GraphicDesign";
import Hero from "./Components/Hero/Hero";
import MiddleSection from "./Components/MiddleSection/MiddleSection";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Typography from "./Components/Typography/Typography";
import Illustrations from "./Components/Illustrations/Illustrations";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import ButtonLarge from "./Components/ButtonLarge/ButtonLarge";
import BluePrint from "./Components/BluePrint/BluePrint";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <main>

          <Navbar/ >
          <Hero/ >
          <Blog/ >
          <MiddleSection />
          <GraphicDesign/>
          <Typography/>
          <Illustrations/>
          <NewsFeed />
          <ButtonLarge/>
          <BluePrint />
          <Footer/>
      </main>
  );
}

export default App;
