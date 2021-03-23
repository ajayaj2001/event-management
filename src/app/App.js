import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import Realtos from '../components/realtos/Realtos'
import Features from '../components/features/Features'
import Footer from '../components/footer/Footer'
import Homes from '../components/homes/Homes'
import StoryContent from '../components/story/StoryContent'
import StoryPicturs from '../components/story/StoryPicture'
import Gallery from '../components/gallery/Gallery'
import './App.scss'

function App() {
  return (
    <div className="container">

      {/* <Sidebar /> */}

      <Header />

      <Realtos />

      <Features />

      <StoryPicturs />

      <StoryContent />

      <Homes />

      <Gallery />

      <Footer />
    </div>
  );
}

export default App;
