import React, { useState, useEffect } from 'react';
import { deleteCandidate, getCandidates } from '../../api/candidateApi';
import Navbar from '../../components/Navbar/NavbarPage';

const CandidatePage = () => {

    const [candidate, setCandidate] = useState([])

    const getCandidateApi = async () => {
        console.log(candidate)
        try {
            const data = await getCandidates();
            console.log(data.data)
            setCandidate(data.data)
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
                            <img src={item.image} />
                            <div>
                                <p>{item.name.first}</p>
                                <p>{item.profession}</p>
                            </div>
                            <div>
                                <p>{item.information.age}</p>
                                <p>{item.information.address.locality}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Navbar></Navbar>
        </>
    )
}

export default CandidatePage;



