import React from 'react';

const ContactUs = () => {
    return (
        <div className="container py-5">
            <div className="row h-100">
                <div className="offset-1 col-10 offset-sm-0 col-sm-5 contact-us-form-container">
                    <h6>
                        Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
                    </h6>

                    <br />

                    <form>
                        <div className="form-group row">
                            <div className="col-6">
                                <label>Your name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-6">
                                <label>Email address</label>
                                <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                <label>Subject</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col">
                                <label>Your message</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="row mb-5 mb-lg-0">
                            <div className="col">
                                <button className="btn btn-primary col-12" onClick={(e) => e.preventDefault()}>SEND</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="offset-1 col-10 col-sm-6 offset-sm-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0177908527057!2d25.98557881552321!3d44.432797279102374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200e37fa54653%3A0x9dc6ea1eef9ccdaa!2sAccenture%20Rom%C3%A2nia!5e0!3m2!1sro!2sro!4v1629215072767!5m2!1sro!2sro" width="100%" height="100%"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
