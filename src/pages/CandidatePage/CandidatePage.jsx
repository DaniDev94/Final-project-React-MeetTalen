import React, { useState, useEffect } from 'react';
import { deleteCandidate, getCandidates } from '../../api/candidateApi';
import Navbar from '../../components/Navbar/NavbarPage';
import { Card, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import "./candidatepage.css"

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
            <div >
                <h1 className="c-candidateTitle" >Candidatos</h1>
            </div>

            <div>
                {candidate.map(item => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <div className="test">
                            <div className="c-container">
                                <Card className="c-cardContainer" style={{ width: '18rem' }}>
                                    <Card.Img className="c-imgCandidate" variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title className="c-nameText">{item.name.first}</Card.Title>
                                        <Card.Text className="c-professionText">
                                            {item.profession}
                                        </Card.Text>
                                    </Card.Body>
                                    <div className="c-containerFooterCard">
                                        <Card.Text className="c-textCard">{item.information.age}</Card.Text>
                                        <Card.Text className="c-textCard">{item.information.address.locality}</Card.Text>
                                    </div>
                                </Card>
                            </div>
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



