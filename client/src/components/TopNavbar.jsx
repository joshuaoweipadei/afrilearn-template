import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

function TopNavbar(){
    const [collapseClasses, setCollapseClasses] = useState("");
    const [isScroll, setScroll] = useState(false);

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    }, []);
    
    const handleScroll = () => {
        document.body.scrollTop > 10 || document.documentElement.scrollTop > 10
        ? setScroll(true)
        : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    const onExiting = () => setCollapseClasses("collapsing-out")
    const onExited = () => setCollapseClasses("")

    let listClass = ['navbar-main'];
    if (isScroll) {
        listClass = [...listClass, 'scroll'];
    }

    return (
        <Fragment>
            <Navbar className={listClass.join(' ')} expand="lg" id="navbar-main" >
                <Container>
                    <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                        <img alt="..." src={require("../assets/img/brand/afrilearn_logo.png")} />
                    </NavbarBrand>
                    <button className="navbar-toggler" id="navbar_global">
                        <span className="navbar-toggler-icon">
                            <i className='fa fa-bars'></i>
                        </span>
                    </button>
                    <UncontrolledCollapse toggler="#navbar_global" navbar className={collapseClasses} onExiting={onExiting} onExited={onExited} >
                        <Nav navbar className="align-items-lg-center ml-lg-auto">
                            <div className="nav-item">
                                <a className="nav-link nav-link-icon" href="" >
                                    <i className="fa fa-github d-lg-none" />
                                    <span className="nav-link-inner--text ml-2">
                                        Home
                                    </span>
                                </a>
                            </div>
                            <UncontrolledDropdown nav>
                                <DropdownToggle nav>
                                    <i className="fa fa-users d-lg-none mr-1" />
                                    <span className="nav-link-inner--text">Forum</span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-xl">
                                    <div className="dropdown-menu-inner">
                                        <Media
                                            className="d-flex align-items-center"
                                            href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                                            target="_blank"
                                        >
                                            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                <i className="ni ni-spaceship" />
                                            </div>
                                            <Media body className="ml-3">
                                                <h6 className="heading text-primary mb-md-1"> Getting started</h6>
                                                <p className="description d-none d-md-inline-block mb-0">
                                                    Learn how to use Argon compiling Scss, change
                                                    brand colors and more.
                                                </p>
                                            </Media>
                                        </Media>
                                        <Media
                                            className="d-flex align-items-center"
                                            href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                                            target="_blank"
                                        >
                                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                <i className="ni ni-palette" />
                                            </div>
                                            <Media body className="ml-3">
                                                <h6 className="heading text-primary mb-md-1">
                                                Foundation
                                                </h6>
                                                <p className="description d-none d-md-inline-block mb-0">
                                                Learn more about colors, typography, icons and the
                                                grid system we used for Argon.
                                                </p>
                                            </Media>
                                        </Media>
                                    </div>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <div className="nav-item">
                                <a className="nav-link nav-link-icon" href="" >
                                    <i className="fa fa-facebook-square d-lg-none" />
                                    <span className="nav-link-inner--text ml-2">
                                        About Us
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link nav-link-icon" href="" >
                                    <i className="fa fa-github d-lg-none" />
                                    <span className="nav-link-inner--text ml-2">
                                        Blog
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link" href="/login" >
                                    <span className="login">Login <i className="fa fa-sign-in ml-1"/></span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link" href="/register" >
                                    <span className="signup">Sign Up <i className="fa fa-hand-spock-o mr-1"/></span>
                                </a>
                            </div>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>

            <header className="header-top">
                <Container >
                    <div className="banner-content">
                        <div className="banner-text">
                            <ScrollAnimation 
                                animateOnce={true} 
                                animateIn='flipInY'
                                animateOut='flipOutY'
                            >
                                <h1>Easily the Netflix of education for African students</h1>
                            </ScrollAnimation>

                            <p>Afrilearn integrates genius teachers, animators and developers</p>
                            <p>to deliver engaging video lessons and gamified exam practice</p>
                            <p>via Web and App subscription services</p>
                            <button className="start-learning"> <i className="fa fa-book" /> Start Learning</button>
                        </div>
                    </div>
                </Container>
            </header>
        </Fragment>
    );
}

export default TopNavbar;
