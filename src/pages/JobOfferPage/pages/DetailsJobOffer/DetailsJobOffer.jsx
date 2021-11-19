import { useParams } from "react-router-dom"
import Navbar from "../../../../components/Navbar/NavbarPage";



export default function DetailsJobOffer(){


    const { id } = useParams();
    console.log(id);
    // Crea nuevo metodo http en el back buscando la oferta por id, llamar a la api(oferta) por ese mismo id y settear la oferta que obtenemos pintando los datoas sin.
    return (
        <>
        <div>Detalles de la oferta</div>
        <Navbar></Navbar>
        </>
    )
}