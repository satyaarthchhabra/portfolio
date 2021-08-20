
import React, { useState } from 'react'
import { Modal, Button, Card, Col, Row } from 'react-bootstrap'
import YouTube from 'react-youtube'
import useWindowDimensions from '../../hooks/useWindowDimension'
import "./ProjectCard.css"
const ProjectCard = ({ liveSiteURL, videoId, heading, overview, techStacks, features, sourceCodeURL }) => {
    const { height, width } = useWindowDimensions();
    console.log(height, width);
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
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="" onClick={() => {
                            window.open(sourceCodeURL)
                        }} className="rounded-circle"><i class="fab fa-github"></i></Button>
                        <Button variant="light" onClick={() => setModalShow(true)} className="mx-2 project-center-btn">Check Details</Button>
                        <Button variant="" onClick={() => {
                            window.open(liveSiteURL)
                        }} className="rounded-circle" ><i class="far fa-share-square"></i></Button>
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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            {/* <Col xs={12} className="py-4">
                <Row>

                    <Col xs={12} sm={6}>
                        <h1 className="text-center">{heading}</h1>
                        <p className="text-center text-fluid">{overview}</p>
                        <Row>
                            <Col xs={12} className="px-0" sm={7}>
                                <h5 className="text-left">Tech Stack</h5>
                                <ul>
                                    <Row>
                                        {
                                            techStacks?.map((stack, index) => (

                                                <Col xs={6} key={`${stack}-${index}`} >
                                                    <li>{stack}</li>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </ul>
                                <ul>

                                </ul>
                            </Col>
                            <Col xs={12} sm={5}>
                                <h5 className="text-center">Notable Features</h5>
                                <ul>
                                    {
                                        features?.map((stack, index) => (
                                            <li key={`${stack}-${index}`}>{stack}</li>
                                        ))
                                    }

                                </ul>
                            </Col>
                        </Row>

                        <Row className="justify-content-center" >
                            <Col xs={12} sm={6} className="my-2">
                                <Button variant="outline-secondary" onClick={() => {
                                    window.open(sourceCodeURL)
                                }} block>🔀 Source Code</Button>
                            </Col>
                            <Col xs={12} sm={6} className="my-2">
                                <Button variant="outline-success" onClick={() => {
                                    window.open(liveSiteURL)
                                }} block>Live Site 👋🏻 </Button>

                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6}>
                        <YouTube videoId={videoId} className="yt-video"
                            opts={opts} />
                    </Col>
                </Row>
                <h6 className="text-muted text-center"> the live site for above project may take few time to load as it is hosted on free hosting  🥱</h6>
            </Col> */}

        </>
    )
}

export default ProjectCard
