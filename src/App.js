import './input.css';
import Footer from './Footer';
import MiddleSection from './MiddleSection';
import Navbar from './Navbar';

function App() {
  return (
    <div className="mx-10 sm:mx-18 md:mx-20 lg:mx-32 xl:mx-36">
      <Navbar></Navbar>
      <MiddleSection></MiddleSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
