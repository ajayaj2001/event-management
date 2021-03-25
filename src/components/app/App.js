import Header from '../header/Header'
import Realtos from '../realtos/Realtos'
import Features from '../features/Features'
import Footer from '../footer/Footer'
import Homes from '../homes/Homes'
import StoryContent from '../story/StoryContent'
import StoryPicturs from '../story/StoryPicture'
import Gallery from '../gallery/Gallery'

import './App.scss'



function App() {
  return (
     <div className="container"> 
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
