import Ablog from "../components/Ablog";
import Aboutus from "../components/Aboutus";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Joinus from "../components/Joinus";
import Navbar from "../components/Navbar";
import Ourproducts from "../components/Ourproducts";
import Plant from "../components/plant";

function Home() {
    return ( 
        <div>
            <Navbar/>
            <Plant/>
            <Aboutus/>
            <Ourproducts/>
            <Clients/>
            <Ablog/>
            <Joinus/>
            <Footer/>
        </div>
     );
}

export default Home;
<div>
    <Navbar/>
</div>