import React, { useEffect, Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap';

import TopNavbar from '../../components/TopNavbar'
import Footer from '../../components/Footer'
import { history } from '../../_helpers'

import { accountService } from '../../_services'

import researching from "../../assets/svg/researching.svg"
import developer from "../../assets/svg/developer.svg"
import book_lover from "../../assets/svg/book_lover.svg"

function HomePage(){
    useEffect(() => {
        if (accountService.userValue) {
            history.push('/account');
        }
    }, []);

    const ican = "https://2.bp.blogspot.com/-IlxCf3Uds8Q/W3XQvj3cqlI/AAAAAAAAD2M/6cx3qNZ0lPcXj0akSD-16e7uqe5Nu_t-ACLcBGAs/s1600/ICAN-LOGO-2%255B1%255D.png"
    const ican_book = "https://pastquestionsandanswers.com/wp-content/uploads/2020/07/ican-professional-exam-past-questions-answers.jpg"
    const jamb = "https://www.wearetrp.com/wp-content/uploads/2018/03/jamb-news.png"
    const waec = "https://examclass.net/wp-content/uploads/2019/10/A-STEP-BY-STEP-GUIDE-TO-OBTAINING-WAEC-GCE-OR-WASSCE-NOV-DEC-EXAM-OR-WAEC-1st-and-2ND-SERIES.png"
    const neco = "https://frontlinenews.com.ng/wp-content/uploads/2018/05/necologo-small.png"
    const gce = 'https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8e76cd9b719027320190516162318.png'
    const uniife = "https://everyevery.ng/wp-content/uploads/2020/09/OAU.jpg"

    return (
        <Fragment>
            <TopNavbar/>
            <div className="section our-services">
                <Container>
                    <div className="content-title">
                        <h1>Our Services</h1>
                        <h5>
                            Easily the Netflix of education for African students, 
                            Afrilearn integrates genius teachers, animators and developers to deliver 
                            engaging video lessons and gamified exam practice via Web and App subscription services.
                        </h5>
                    </div>
                    <Row>
                        <Col lg="4" md="6">
                            <div className="card">
                                <div className="img-container">
                                    <img src={book_lover} alt="researching_img"/>
                                </div>
                                <div className="text-container">
                                    <h4>Past Questions</h4>
                                    <p>
                                        Chat with educators, ask questions, answer live polls, and 
                                        get your doubts cleared - all while the class is going on
                                        Chat with educators, ask questions, answer live polls, and 
                                        get your doubts cleared - all while the class is going on
                                    </p>
                                    <div className="brand-img">
                                        <img alt="..." src={require("../../assets/img/brand/afrilearn_logo.png")} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="6">
                            <div className="card">
                                <div className="img-container">
                                    <img src={developer} alt="researching_img"/>
                                </div>
                                <div className="text-container">
                                    <h4>Online Classes</h4>
                                    <p>
                                        Chat with educators, ask questions, answer live polls, and 
                                        get your doubts cleared - all while the class is going on
                                        Chat with educators, ask questions, answer live polls, and 
                                        get your doubts cleared - all while the class is going on
                                    </p>
                                    <div className="brand-img">
                                        <img alt="..." src={require("../../assets/img/brand/afrilearn_logo.png")} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="12">
                            <div className="card">
                                <div className="img-container">
                                    <img src={researching} alt="researching_img"/>
                                </div>
                                <div className="text-container">
                                    <h4>Researching</h4>
                                    <p>
                                        Chat with educators, ask questions, answer live polls, and 
                                        get your doubts cleared - all while the class is going on
                                        Chat with educators, ask questions, answer live polls, and 
                                        get your doubts cleared - all while the class is going on
                                    </p>
                                    <div className="brand-img">
                                        <img alt="..." src={require("../../assets/img/brand/afrilearn_logo.png")} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="section past-questions">
                <Container>
                    <div className="content-title">
                        <h1>Free Past Questions</h1>
                        <p>
                            We give free past questions to our user. Cras ut nisi malesuada, 
                            mollis mauris interdum, Nam gravida efficitur vestibulum. 
                        </p>
                    </div>
                        <Row>
                            <Col md="12">
                                <div className="past-questions-section">
                                    <div className="subset">
                                        <div className="img-container">
                                            <img className="bg-shape" src={jamb} alt=""/>
                                        </div>
                                        <h3>JAMB</h3>
                                    </div>
                                    <div className="subset">
                                        <div className="img-container">
                                            <img className="bg-shape" src={waec} alt=""/>
                                        </div>
                                        <h3>WAEC</h3>
                                    </div>
                                    <div className="subset">
                                        <div className="img-container">
                                            <img className="bg-shape" src={neco} alt=""/>
                                        </div>
                                        <h3>NECO</h3>
                                    </div>
                                    <div className="subset">
                                        <div className="img-container">
                                            <img className="bg-shape" src={gce} alt=""/>
                                        </div>
                                        <h3>GCE</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </div>

            <div className="section professional-exams">
                <Container>
                        <Row className="professional-exams-card">
                            <Col md="6">
                                <div className="professional-exams-left">
                                    <h1>Professional Exams</h1>
                                    <h6>Start learning ICAN and other professional courses with Afrilearn</h6>
                                    <a href="#" className="btn btn-get-ican"><i className="fa fa-address-book mr-1" /> Get Past Questions</a>
                                    <div className="img-container" style={{width:"100px", height:"100px"}}>
                                        <img className="bg-shape" src={ican} alt="" width="100%" height="100%" />
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="professional-exams-right">
                                    <div className="img-container">
                                        <img className="bg-shape" src={ican_book} alt=""/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </div>

            <div className="section professional-exams university">
                <Container>
                    <Row className="professional-exams-card">
                        <Col md="7" className="order-sm-1 order-2">
                            <div className="professional-exams-right">
                                <div className="img-container">
                                    <img className="bg-shape" src={uniife} alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col md="5" className="order-sm-2 order-1">
                            <div className="">
                                <div className="professional-exams-left">
                                    <h1>OBAFEMI AWOLOWO UNIVERSITY IFE</h1>
                                    <h6>You can study at your own pace at anytime, anywhere.</h6>
                                    <select name="course" className="form-control select-course">
                                        <option value="Vocational Course">Vocational Course</option>
                                        <option value="Online Class">Online Class</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default HomePage;