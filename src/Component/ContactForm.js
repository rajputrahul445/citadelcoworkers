import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ContactForm = () => {
    // let settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <section className="getInTouch">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-12">
                            <div className="contactForm">
                                <h2>Get In Touch</h2>
                                <p>Fill out the form below, and a Citadel representative will<br/>contact you as soon as possible.</p>
                                <div className="sticyImgForm">
                                    <img src="/images/cnbnr-02.svg" alt="" />
                                    <img src="/images/nda.svg" alt="" />
                                </div>
                                <ul className="listInline">
                                    <li>
                                        <a href="tel:+1 (646) -583-0053"><FontAwesomeIcon icon={faPhone} /> Book a Call</a>
                                    </li>
                                    <li>
                                        <a href="mailto:sales@citadelcoworkers.com"><FontAwesomeIcon icon={faEnvelope} /> Email Us</a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/9891548011" style={{'color':'#5dcd84', 'borderColor': '#5dcd84'}}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</a>
                                    </li>
                                </ul>
                                <div className="formInr">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" id="" placeholder="Name" /> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" id="" placeholder="Email"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="number" name="number" className="form-control" id="" placeholder="Phone Number"/> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="text" name="Country" className="form-control" id="" placeholder="Website"/> 
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <select name="duration" className="form-control" id="">
                                                    <option value="Project Duration">Project Duration</option>
                                                    <option value="Less then one month">Less then one month</option>
                                                    <option value="1 to 3 months">1 to 3 months</option>
                                                    <option value="3 to 6 months">3 to 6 months</option>
                                                    <option value="6 to 12 months">6 to 12 months</option>
                                                    <option value="more then 1 year">more then 1 year</option>
                                                    <option value="Not sure">Not sure</option>
                                                </select> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <input type="text" name="Country" className="form-control" id="" placeholder="Company Name"/> 
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <div className="form-group">
                                                <textarea name="" className="form-control" rows={5} placeholder="Share your requirement"></textarea>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-3 justify-content-center">
                                            <button className="colorBtn wideBtn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 ps-5">
                            <div className="contentContent">
                                <div className="sectionHeading text-center mb-4">
                                    <h2>Trusted by Clients Worldwide</h2>
                                </div>
                                <Carousel infiniteLoop preventMovementUntilSwipeScrollTolerance={true} showIndicators={false} showStatus={false} showThumbs={false}>
                                    <div className="videoTestimonial">
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/S8la1u6U1gc?si=vByJ9duuaLOLWP5k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                    <div className="videoTestimonial">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/o3GHmGSKA9I?si=i27sgTjBRKM_63wG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ContactForm;