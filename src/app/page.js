import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
      <>
        <Navbar />
        <Homepage />
        {/* <Reservation /> */}
      </>
    );
}