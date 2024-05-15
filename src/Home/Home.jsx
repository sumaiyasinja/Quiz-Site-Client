
import Footer from '../components/Footer';
import Navbar from './../components/Navbar';
// import Modal from './../components/Modal';
import ResultState from '../components/ResultState';
const Home = () => {
    return (
        <div className="container mx-auto">
          <Navbar></Navbar>
          {/* <Modal></Modal> */}
          <ResultState></ResultState>
            <Footer></Footer>
        </div>
    );
};

export default Home;