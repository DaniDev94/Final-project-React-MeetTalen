import React, { useState, useEffect } from 'react';
import { deleteCandidate, getCandidates } from '../../api/candidateApi';
import Navbar from '../../components/Navbar/NavbarPage';
import { Link } from "react-router-dom";
import { Card, Image } from 'react-bootstrap';
import { BiMap } from 'react-icons/bi';
import { Helmet } from "react-helmet";
import { Avatar } from "@mui/material";
import './CandidatePage.scss'



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
                <h1 className="c-pageTitle" >Candidatos</h1>
            </div>

            <div className="c-mainContainer">
                {candidate.map(item => {
                    return (
                        <div>
                            <div key={JSON.stringify(item)}>
                                <div>
                                    <Helmet>
                                        <style>{'body { background-color: rgb( 13, 32, 42) }'}</style>
                                    </Helmet>
                                    <div className="c-cardContainer">
                                    <Link className="c-linkcandidate" to={{ pathname: "/candidates/" + item.name.first }}>
                                        <Card>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={item.image}
                                                sx={{ width: 150, height: 150 }}
                                            />
                                            <div className="c-containerText">
                                                <Card.Body>
                                                    <Card.Title className="c-nameText">{item.name.first}</Card.Title>
                                                    <Card.Text className="c-professionText">
                                                        {item.profession}
                                                    </Card.Text>
                                                </Card.Body>
                                                <div className="c-containerFooterCard">
                                                    <Card.Text className="c-textCard">{item.information.age}</Card.Text>
                                                    <Card.Text className="c-textCard"><BiMap /> {item.information.address.locality}  </Card.Text>
                                                </div>
                                            </div>
                                        </Card>
                                        </Link>
                                    </div>
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


export default CandidatePage;
