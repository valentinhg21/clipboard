import './Home.css'

//Componentes
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.js";
import Hero from '../../components/Hero/Hero';

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <ItemListContainer/>
        </div>
    )
}
