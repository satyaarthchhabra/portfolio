
import React, { useState } from 'react'
import { Modal, Button, Card, Col, Row, Container } from 'react-bootstrap'
import YouTube from 'react-youtube'
import "./ProjectCard.css"
const ProjectCard = ({ liveSiteURL, videoId, heading, overview, techStacks, features, sourceCodeURL }) => {

    const [modalShow, setModalShow] = useState(false)
    const opts = {
        height: '250',
        width: '340',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            //   autoplay: 1,
        },
    };
    return (
        <>
            <Col md={4} xs={10} className="my-4 mx-auto " >
                <Card className="border-0 py-2">
                    <YouTube containerClassName={"youtubeContainer"} videoId={videoId}
                        opts={opts} />
                    <Card.Body className="text-center"  >
                        <Card.Title  >{heading} </Card.Title>
                        <Card.Text>
                            {overview}
                        </Card.Text>
                        <Button variant="" onClick={() => {
                            window.open(sourceCodeURL)
                        }} className="rounded-circle"><i className="fab fa-github"></i></Button>
                        <Button variant="light" onClick={() => setModalShow(true)} className="mx-2 project-center-btn">Check Details</Button>
                        <Button variant="" onClick={() => {
                            window.open(liveSiteURL)
                        }} className="rounded-circle" ><i className="far fa-share-square"></i></Button>
                    </Card.Body>
                </Card>
            </Col>
            <Modal
                show={modalShow}
                size="lg"
                onHide={() => setModalShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="show-grid" closeButton>

                    <Container >
                        <Row className="justify-content-between">
                            <Col xs={6} className="mx-auto" >
                                <Modal.Title id="contained-modal-title-vcenter" >
                                    {heading}
                                </Modal.Title>
                            </Col>
                            <Col xs={6} className="ml-auto d-flex justify-content-end">


                                <Button variant="" onClick={() => {
                                    window.open(sourceCodeURL)
                                }} className="rounded-circle"><i className="fab fa-github"></i></Button>

                                <Button variant="" onClick={() => {
                                    window.open(liveSiteURL)
                                }} className="rounded-circle" ><i className="far fa-share-square"></i></Button>
                            </Col>
                        </Row>


                    </Container>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container >
                        <Row className="justify-content-between">
                            <Col xs={10} className="mx-auto" md={4}>
                                <h5 className="text-left">Features</h5>
                                <ul>
                                    {
                                        features?.map((stack, index) => (
                                            <li key={`${stack}-${index}`}>{stack}</li>
                                        ))
                                    }

                                </ul>
                                <p className="">
                                    Tech:{techStacks.map(tech => (
                                        <span>{tech}, </span>
                                    ))}</p>
                            </Col>
                            <Col xs={10} md={6} className="mx-auto">

                                <YouTube videoId={videoId} containerClassName={"youtubeContainer"}
                                    opts={opts} />
                            </Col>
                        </Row>


                    </Container>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="dark" onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProjectCard
