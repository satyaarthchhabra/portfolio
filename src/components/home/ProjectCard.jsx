/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import YouTube from 'react-youtube'
import "./ProjectCard.css"
const ProjectCard = ({liveSiteURL,videoId, heading, overview, techStacks,features,sourceCodeURL }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            //   autoplay: 1,
        },
    };
    
    return (
        <>
            <Col xs={12} className="py-4">
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
                                <Button variant="outline-secondary" onClick={()=>{
                                    window.open(sourceCodeURL)
                                }}  block>🔀 Source Code</Button>
                            </Col>
                            <Col xs={12} sm={6} className="my-2">
                                <Button variant="outline-success" onClick={()=>{
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
            </Col>

        </>
    )
}

export default ProjectCard
