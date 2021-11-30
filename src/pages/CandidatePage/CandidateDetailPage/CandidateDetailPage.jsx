import React, { useState, useEffect } from "react";
import { getCandidateByName } from "../../../api/candidateApi"
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar/NavbarPage";
import { Card } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { Avatar } from "@mui/material";
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';
import { BiMap } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { Button } from 'react-bootstrap'
import './CandidateDetailPage.scss'






const DetailsCandidate = () => {


    const { name } = useParams();
    const [details, setDetails] = useState();

    const getCandidateName = async () => {
        try {
            const data = await getCandidateByName(name);
            const item = data.data;
            setDetails(item);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCandidateName();
    }, []);


    return (
        <>

            <div className="c-pageContainerTitleDetail">
                <h1 className="c-pageTitleDetail">Details</h1>
            </div>


            <Helmet>
                <style>{'body { background-color: rgb( 13, 32, 42) }'}</style>
            </Helmet>

            <Avatar
                className="c-imgDetailCandidate"
                alt="Remy Sharp"
                src={details && details.image}
                sx={{ width: 194, height: 191 }}
            />
            <div className="c-cardDetailContainer">

                <h2 className="c-detailCandidateName">{details && details.name.first} {details && details.name.last}</h2>
                <h2 className="c-detailCandidateProfession">{details && details.profession}</h2>
                <div className="c-containerIcons">
                    <p><BsTwitter className="c-containerIcons--icon" /></p>
                    <p><BsInstagram className="c-containerIcons--icon" /></p>
                    <p><FaFacebookF className="c-containerIcons--icon" /></p>
                </div>

                <div className="c-containerPersonalData">
                    <h3 className="c-containerPersonalData--title">Datos personales</h3>
                    <p className="c-containerPersonalData--text"><MdOutlineDateRange className="c-containerPersonalData--icon" />{details && details.information.age} años</p>
                    <p className="c-containerPersonalData--text"><BiMap className="c-containerPersonalData--icon" />{details && details.information.address.community}, {details && details.information.address.locality}, {details && details.information.address.pc}</p>
                    <p className="c-containerPersonalData--text"><BsTelephone className="c-containerPersonalData--icon" />{details && details.information.phone}</p>
                </div>

                <div className="c-containerKey">
                    <h3 className="c-containerKey--title">Palabras claves del perfil</h3>
                    <div className="c-containerKey--containerText">
                        <p className="c-containerKey--text">UX/UI</p>
                        <p className="c-containerKey--text2">Creatividad</p>
                        <p className="c-containerKey--text">HTML</p>
                        <p className="c-containerKey--text2">Empatía</p>
                        <p className="c-containerKey--text">Proyectos</p>
                        <p className="c-containerKey--text2">Sketch</p>
                        {/* <p className="c-containerKey--text">{details && details.keywords}</p> */}
                    </div>
                </div>

                <div className="c-containerFormation">
                    <h3 className="c-containerFormation--title">Formación académica</h3>
                    <div>
                        <div className="c-containerFormation--containerText">
                            <p className="c-containerFormation--text">Título</p>
                            <p className="c-containerFormation--text2">{details && details.training.type}</p>
                        </div>

                        <div className="c-containerFormation--containerText">
                            <p className="c-containerFormation--text">Grado</p>
                            <p className="c-containerFormation--text2">{details && details.training.name}</p>

                        </div>

                        <div className="c-containerFormation--containerText">
                            <p className="c-containerFormation--text">Centro</p>
                            <p className="c-containerFormation--text2">{details && details.training.center}</p>
                        </div>

                    </div>

                </div>

            </div>



            <Navbar></Navbar>

        </>
    )
}
export default DetailsCandidate