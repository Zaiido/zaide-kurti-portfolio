import { useEffect } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const AboutMe = (props) => {
    useEffect(() => {
        if (props.showSection) {
            document.querySelector("body").style.overflow = "hidden"
        }
    })
    return (
        <>
            <div className={props.showSection ? "about-me-section showSection" : "about-me-section hideSection"}>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D5C63" fillOpacity="1" d="M0,160L6.2,176C12.3,192,25,224,37,229.3C49.2,235,62,213,74,192C86.2,171,98,149,111,133.3C123.1,117,135,107,148,122.7C160,139,172,181,185,208C196.9,235,209,245,222,229.3C233.8,213,246,171,258,128C270.8,85,283,43,295,48C307.7,53,320,107,332,138.7C344.6,171,357,181,369,192C381.5,203,394,213,406,218.7C418.5,224,431,224,443,192C455.4,160,468,96,480,101.3C492.3,107,505,181,517,186.7C529.2,192,542,128,554,90.7C566.2,53,578,43,591,37.3C603.1,32,615,32,628,80C640,128,652,224,665,224C676.9,224,689,128,702,90.7C713.8,53,726,75,738,106.7C750.8,139,763,181,775,208C787.7,235,800,245,812,229.3C824.6,213,837,171,849,160C861.5,149,874,171,886,160C898.5,149,911,107,923,85.3C935.4,64,948,64,960,101.3C972.3,139,985,213,997,240C1009.2,267,1022,245,1034,208C1046.2,171,1058,117,1071,96C1083.1,75,1095,85,1108,80C1120,75,1132,53,1145,48C1156.9,43,1169,53,1182,80C1193.8,107,1206,149,1218,170.7C1230.8,192,1243,192,1255,186.7C1267.7,181,1280,171,1292,186.7C1304.6,203,1317,245,1329,224C1341.5,203,1354,117,1366,74.7C1378.5,32,1391,32,1403,37.3C1415.4,43,1428,53,1434,58.7L1440,64L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>
                <Container className="py-3">
                    <svg className="mt-3 bi bi-x-lg close" onClick={() => props.setShowSection(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                    <Row>
                        <Col className="col-12 col-lg-6 d-flex flex-column">
                            <div>
                                <h4 className="mb-5">About me.</h4>
                                I'm Zaide Kurti, a <span className="gold">Junior Full Stack Developer</span>  based in Berlin, Germany.
                                I love the challenge of <span className="gold">problem-solving</span> and enjoy <span className="gold">creating</span> dynamic and
                                interactive <span className="gold">websites</span> and <span className="gold">applications</span>.
                                When I'm not coding, I'm constantly learning new technologies and techniques to improve my skills.
                                <p>Currently available for <span className="gold">hire</span>.</p>
                            </div>
                            <div className="contact-btn-container mt-4">
                                <Button href="mailto:zaidekurti@gmail.com" onMouseOver={() => {
                                    document.querySelector('.contact-arrow').style.transform = "translateX(-3px)"
                                }} onMouseLeave={() => {
                                    document.querySelector('.contact-arrow').style.transform = "translateX(-10px)"
                                }} className="contact-btn">Contact me</Button>
                                <svg className="arrow contact-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path></svg>
                            </div>
                        </Col>
                        <Col className="col-lg-6">
                            <div className="form-container">
                                <h4 className="form-text mb-5 align-self-start">Let's talk.</h4>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" required />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} required />
                                    </Form.Group>
                                </Form>
                                <div className="mt-5 form-btn">
                                    <Button onMouseOver={() => {
                                        document.querySelector('.contact-form-arrow').style.transform = "translateX(-3px)"
                                    }} onMouseLeave={() => {
                                        document.querySelector('.contact-form-arrow').style.transform = "translateX(-10px)"
                                    }} className="contact-btn">Send message</Button>
                                    <svg className="arrow contact-form-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path></svg>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutMe