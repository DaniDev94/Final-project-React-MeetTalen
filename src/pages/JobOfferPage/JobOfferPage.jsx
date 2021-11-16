import React ,{ useState, useEffect} from 'react'
import { getJobOffers } from '../../api/jobOfferApi'

const JobOffers = () => {


    const [ jobOffers, setJobOffers] = useState([])
    
    const getJobOffersApi = async () => {
        try {
            const data = await getJobOffers()
            setJobOffers(data)
            

        } catch (error) {
            console.log(error)
            
        } 
    }
        console.log(jobOffers)
    useEffect (()=>{
        getJobOffersApi()
    },[])
     



    return(
    <>
    <h1>joboffer</h1>
    <button>Crear oferta</button> y que nos navegue a formJobofferPage
    <div>
                {jobOffers.map(item => {
                    console.log(item)
                    return (
                        <div key={JSON.stringify(item)}>
                            <h3>Nombre: {item.jobTitle}</h3>
                            <button>Crear oferta</button>
                        </div>
                 )
                })}
                    </div>
    </>
    )
}
    

export default JobOffers