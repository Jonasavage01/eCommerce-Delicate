import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Contact.css'; 

const ContactPage = () => {
    return (
      <div className="container5 my-5 d-flex justify-content-center contact-page">
        <div className="row w-100 contact-page-row">
          <div className="col-md-4">
            <div className="p-3 shadow-sm bg-white h-100 rounded contact-box">
              <div className="mb-4 text-center">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <p className="mt-2 mb-0">2715 Ash Dr. San Jose, South Dakota 83475</p>
               
              </div>
              <div className="mb-4 text-center">
                <i className="fas fa-envelope contact-icon"></i>
                <p className="mt-2 mb-0">Proxy@gmail.com<br />Help.proxy@gmail.com</p>
                
              </div>
              <div className="mb-4 text-center">
                <i className="fas fa-phone contact-icon"></i>
                <p className="mt-2 mb-0">(219) 555-0114<br />(164) 333-0487</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-4 shadow-sm bg-white h-100 rounded contact-box-right">
              <h2 className="contact-title">Just Say Hello!</h2>
              <p className="contact-subtitle">
                Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
              </p>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control contact-input" placeholder="Template Cookie" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control contact-input" placeholder="zakirsoft@gmail.com" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control contact-input" rows="3" placeholder="Hello"></textarea>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control contact-input" placeholder="Subjects" />
                </div>
                <button type="submit" className="btn btn-success contact-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;