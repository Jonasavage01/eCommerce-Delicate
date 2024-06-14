import React from 'react';
import '../assets/css/NewsSection.css';
import img1 from '../assets/images/news/img1.jpg';
import img2 from '../assets/images/news/img2.jpg';
import img3 from '../assets/images/news/img3.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NewsSection = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="text-uppercase display-4">
          <span className="text-orange">Our</span> News
        </h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card news-card shadow-sm">
            <img src={img1} className="card-img-top" alt="News 1" />
            <div className="card-body">
              <h5 className="card-title">You will vainly look for fruit on it in autumn.</h5>
              <div className="card-meta mb-2 text-muted">
                <span><i className="fas fa-user"></i> Admin</span>
                <span><i className="fas fa-calendar-alt"></i> 27 December, 2019</span>
              </div>
              <p className="card-text">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
              <a href="#" className="btn btn-link read-more">Read more <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card news-card shadow-sm">
            <img src={img2} className="card-img-top" alt="News 2" />
            <div className="card-body">
              <h5 className="card-title">A man's worth has its season, like tomato.</h5>
              <div className="card-meta mb-2 text-muted">
                <span><i className="fas fa-user"></i> Admin</span>
                <span><i className="fas fa-calendar-alt"></i> 27 December, 2019</span>
              </div>
              <p className="card-text">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
              <a href="#" className="btn btn-link read-more">Read more <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card news-card shadow-sm">
            <img src={img3} className="card-img-top" alt="News 3" />
            <div className="card-body">
              <h5 className="card-title">Good thoughts bear good fresh juicy fruit.</h5>
              <div className="card-meta mb-2 text-muted">
                <span><i className="fas fa-user"></i> Admin</span>
                <span><i className="fas fa-calendar-alt"></i> 27 December, 2019</span>
              </div>
              <p className="card-text">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
              <a href="#" className="btn btn-link read-more">Read more <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-orange">More News</button>
      </div>
    </div>
  );
};

export default NewsSection;