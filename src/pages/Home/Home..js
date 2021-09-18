import './Home.css'

//Componentes
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.js";
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <Banner />
            <div className="container mt-5 mb-5">
                <div className="Title">
                    <h3>Todos los productos</h3>
                </div>
                <div className="mt-5">
                    <ItemListContainer/>
                </div>
            </div>
        </div>
    )
}
