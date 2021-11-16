import React, { useState, useEffect } from 'react';
import { getCandidate, deleteCandidate } from '../../api/candidateApi';

const Candidate = () => {

    const [candidate, setCandidate] = useState([])

    const getCandidateApi = async () => {
        console.log(candidate)
        try {
            const data = await getCandidate();
            console.log(data)
            setCandidate(data) 
            
            
            
        } catch (error) {
            console.error(error)
        }
    }

    const delCandidate = async (id) => {
        try {
            await deleteCandidate(id)
            const newElements = candidate.filter(item => item.id !== id)
            setCandidate(newElements)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCandidateApi();
    }, [])

    return (
        <>
            <h1>Candidatos</h1>
            <div>
                {candidate.map(item => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <img> {item.image}</img>
                            <div>
                                <p>{item.candidates.name}</p>
                                <p>{item.profession}</p>
                            </div>
                            <div>
                                <p>{item.informatiom.age}</p>
                                <p>{item.informatiom.address.locality}</p>
                            </div>



                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Candidate;



