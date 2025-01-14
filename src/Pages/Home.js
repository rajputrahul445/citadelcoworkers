import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import API_HOST from "../config/APIHost";
import API_ENDPOINTS from "../config/APIEndPoints";
import { useQuery } from "react-query";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import servicesContent from '../Content/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faCircleCheck, faPlay, faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import ContactForm from "../Component/ContactForm";
import Testimonial from "../Component/Testimonial";
import Profile from "../Component/Profile";

const getBlogList = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.blogListing}`)
    const data = await response;
    return data;
}
const getServiceList = async () => {
    const response = await axios.get(`${API_HOST}${API_ENDPOINTS.serviceListing}`)
    const data = await response;
    return data;
}
const Home = () => {
    const { data, status } = useQuery("blog", getBlogList);
    const { data:services } = useQuery("service", getServiceList);
    let bannerSettings = {
        dots: false,
        arrows:false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    

    useEffect(() => {
        // getBlogList()
        window.scrollTo(0, 0)
      }, [])
      if (status === 'loading') {
        return <div className="loaderWrp"><span className="loader"></span></div>
      }
    return(
        <React.Fragment>
            <HelmetProvider>
            <Helmet>
                <title>Homepage Title renderd from Local</title>
                <meta name="description" content="Homepag Nested component" />
            </Helmet>
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-12 pb-5">
                            <h1>Hire the <span className="greenText">Top 3%</span> Virtual Employees in India.</h1>
                            <h4>We connect you with India’s most skilled virtual professionals in fields ranging from Finance to Software Development. Whether you need tech innovators, creative designers, or strategic thinkers, our experts deliver solutions that drive success.</h4>
                            <Link to="/contact-us" className="colorBtn wideBtn">Hire Top Talent</Link>
                        </div>
                        <div className="col-md-7 col-12">
                            <div className="sliderWrp">
                                <Slider {...bannerSettings}>
                                    <div className="bannerProfile">
                                        <img src="images/profile.png" srcSet="images/profile.png 350w, images/profile.png 400w, images/profile.png 400w" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                            <p>Expertise</p>
                                            <ul className="listInline tags mt-3">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="images/profile2.png" srcSet="images/profile2.png 350w, images/profile2.png 400w, images/profile2.png 400w" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe 2</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Expertise</p>
                                                <ul className="listInline tags mt-3">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bannerProfile">
                                        <img src="images/profile3.png" srcSet="images/profile3.png 350w, images/profile3.png 400w, images/profile3.png 400w" alt="" />
                                        <div className="bannerProfileDetails">
                                            <h3>Jhon Doe 3</h3>
                                            <h6><FontAwesomeIcon icon={faCode} /> Product Manager</h6>
                                            <div className="verified"><FontAwesomeIcon icon={faCircleCheck} /> Verified Expert</div>
                                                <p>Expertise</p>
                                                <ul className="listInline tags mt-3">
                                                <li>DevOps</li>
                                                <li>Git</li>
                                                <li>Node.js</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="videoBg">
                    <video loop muted autoPlay playsInline>
                        <source src="images/banner-video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="videoOverlay"></div>
            </section>
            <section className="service" id="servicesSec">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Unlock Global Expertise</h2>
                                <p>Partner with Citadel Coworkers to access the best in business, design, and technology talent.<br/>Simplify your operations and achieve exceptional results with our top-tier professionals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 borderBox">
                        {
                            services?.data?.listing.map((data, index)=>{
                                return(
                                    <React.Fragment key={index}>
                                    {index < 6 && <div className="col-lg-4 col-md-6 col-12 sideBorder" key={index}>
                                        <ScrollAnimation animateIn="fadeIn">
                                            <div className="colorBx">
                                                <React.Fragment>
                                                    <img src={data.banner} alt="" className="serviceIco" />
                                                    <h3>{data.post_title}</h3>
                                                    <p dangerouslySetInnerHTML={{ __html: data.post_content }}></p>
                                                    <div className="text-start">
                                                        <Link to={`/services/${data.post_name}`} className="blueBtn">View More <FontAwesomeIcon icon={faArrowRight} /></Link>
                                                    </div>
                                                </React.Fragment>
                                            </div>
                                        </ScrollAnimation>
                                    </div>}
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/services" className="colorBtn wideBtn">View All</Link>
                    </div>
                </div>
            </section>
            <section className="profile">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Meet Talent in Our Network</h2>
                                <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <Profile />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="process">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading">
                                <h2>Build Amazing Teams,<br />On Demand</h2>
                                <p>Quickly assemble the teams you need, exactly when you need them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <img src='images/aggregate-color.png' alt="" />
                                    <h3>Hire Quickly</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="service-section-two bg_light_1">
                <div className="container pd_zero">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center  dark_color">
                                <div className="sectionHeading">
                                    <h2>4 Simple Steps to Streamline Success</h2>
                                    <p>Quickly assemble the teams you need, exactly when you need them.</p>
                                </div>
                            </div>
                        </div>                                            
                    </div>
                    <div className="row gutter_15px">
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className="icon-dollar">
                                            <FontAwesomeIcon icon={faPeopleRoof} />
                                            <i></i>
                                        </span>
                                        <small className="nom">01</small>
                                        <h2 className="semiHeading">Employee Compensation</h2>
                                        <p>Holds in these matters principles selection right rejects.</p>
                                        <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                            </div>                        
                            <div className="mr_bottom_30"></div>                        
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className="icon-pharmacy"><FontAwesomeIcon icon={faPeopleRoof} /><i></i></span>
                                        <small className="nom">02</small>
                                        <h2 className="semiHeading">Health Care Benefit</h2>
                                        <p>The great explorer of the truth the master builders human happiness.</p>
                                        <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                            </div>                        
                            <div className="mr_bottom_30"></div>                        
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className="icon-service"><FontAwesomeIcon icon={faPeopleRoof} /><i></i></span>
                                        <small className="nom">03</small>
                                        <h2 className="semiHeading">Talent Managemen</h2>
                                        <p>Laborious physo except obtains some advantage from it right.</p>
                                        <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                            </div>                        
                            <div className="mr_bottom_30"></div>                        
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 my-4">
                            <div className="service_box style_three dark_color">
                                <div className="service_content">
                                    <div className="content_inner">
                                        <span className=" icon-dollar"><FontAwesomeIcon icon={faPeopleRoof} /><i></i></span>
                                        <small className="nom">04</small>
                                        <h2 className="semiHeading">Risk Managemen</h2>
                                        <p>Right to find fault with a mans who chooses enjoy has no annoying.</p>
                                        <a href="/" className="read_more">Read more <FontAwesomeIcon icon={faArrowRight} /></a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        
                    </div>
                </div>
                
                <div className="pd_bottom_50"></div>
                
                </section>
            <section className="hiringProcess">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Hiring Made Easy</h2>
                                <p>We are the largest, globally-distributed network of top business, design, and technology talent,<br/> ready to tackle your most important initiatives.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <div className="numWrp">
                                        <div className="hiringNum">1</div>
                                    </div>
                                    <h3>Talk to One of Our Industry Experts</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx">
                                    <div className="numWrp">
                                        <div className="hiringNum">2</div>
                                    </div>
                                    <h3>Talk to One of Our Industry Experts</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 col-12">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="contentBx noArrow">
                                    <div className="numWrp">
                                        <div className="hiringNum">3</div>
                                    </div>
                                    <h3>Talk to One of Our Industry Experts</h3>
                                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video">
                <div className="videoBgImage">
                    <img src="images/areaof-ecp-1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="video_box text-center">
                            <a href="/" className="lightbox-image"><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-6">
                        <div className="title_all_box style_one text-end pb-5 mb-4">
                            <div className="sectionHeading">
                                <h2 className="mainHeading whiteTxt">Create Meaningful Experiences for employees</h2>
                                <p className="my-4">Focus  people by understanding employees’ emotions and<br/>  perspectives at  all touch points, so you can take action and focus<br/> experiences on what matters to the people.</p>
                            </div>
                            <div className="theme_btn">
                                <a href="/" className="colorBtn">Read more</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 expertise_box">
                    <div className="step_number">
                        <h3>01.</h3>
                    </div>
                    <h2 className="title">
                        <a href="/">Payroll Management</a>
                    </h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 expertise_box">
                    <div className="step_number">
                        <h3>02.</h3>
                    </div>
                    <h2 className="title">
                        <a href="/">Employee Compensation</a>
                    </h2>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 expertise_box">
                    <div className="step_number">
                        <h3>03.</h3>
                    </div>
                    <h2 className="title">
                        <a href="/">Benefits Management</a>
                    </h2>
                </div>
                    </div>
                </div>
            </section>
            <Testimonial />
            <section className="blog">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-12 col-12">
                            <div className="sectionHeading text-center">
                                <h2>Explore Trending Toptal Publications</h2>
                                <p>We have a reputation for helping clients around the world find success on their most important projects</p>
                            </div>
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row mt-5">
                            <div className="col-md-5 col-12">
                                <Link to={`/blog/${data?.data?.listing[0]?.post_name}`} className="d-block">
                                    <div className="blogBx blogBig">
                                        <div className="blogImg">
                                            <img src={data?.data?.listing[0]?.banner} alt=""/>
                                            <div className="blogAuthImg">
                                                {
                                                    data?.data?.listing[0]?.display_name === "Pinka Sharma"
                                                    ?
                                                    <img src="/images/pinka.png" alt=""/>
                                                    :
                                                    <img src="images/suresh.png" alt=""/>
                                                }
                                            </div>
                                        </div>
                                        <div className="blogContent">
                                            <h3>{data?.data?.listing[0]?.post_title}</h3>
                                            <h5>By <b>{data?.data?.listing[0]?.display_name}</b></h5>
                                            <p>{data?.data?.listing[0]?.post_content}</p>
                                            <div className="d-flex justify-content-between">
                                                <h6>7 min read</h6>
                                                <button className="simpleBtn">Continue Read <FontAwesomeIcon icon={faArrowRight}/></button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-7 col-12">
                                <div className="row">
                                    {
                                        data?.data.listing?.map((blog, index)=>{
                                            return(
                                                index !== 0 && index < 5 ? 
                                                    <div className="col-md-6 col-12" key={index}>
                                                        <Link to={`/blog/${blog?.post_name}`}  className="d-block">
                                                            <div className="blogBx blogSmall">
                                                                <div className="blogImg">
                                                                    <img src={blog.banner} alt={blog.post_title}/>
                                                                    <div className="blogAuthImg">
                                                                    {
                                                                        blog?.display_name === "Pinka Sharma"
                                                                        ?
                                                                        <img src="/images/pinka.png" alt=""/>
                                                                        :
                                                                        <img src="images/suresh.png" alt=""/>
                                                                    }
                                                                    </div>
                                                                </div>
                                                                <div className="blogContent">
                                                                    <h3>{blog.post_title}</h3>
                                                                    <h5>By <b>{blog.display_name}</b></h5>
                                                                    <p dangerouslySetInnerHTML={{ __html: blog.post_content }}></p>
                                                                    
                                                                    <div className="d-flex justify-content-between">
                                                                        <h6>7 min read</h6>
                                                                        <button href={`/blog/${blog?.post_name}`} className="simpleBtn">Continue Read <FontAwesomeIcon icon={faArrowRight}/></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                 : null
                                            )
                                        })
                                    }
                                   
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="text-center">
                                    <Link to="/blog" className="lineBtn">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
            <ContactForm/>
            </HelmetProvider>
        </React.Fragment>
    )
}
export default Home;