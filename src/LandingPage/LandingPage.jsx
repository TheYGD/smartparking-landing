import "./LandingPage.css";
import { FooterBig4 } from "../FooterBig4/FooterBig4.jsx";

export const LandingPage = ({ className, ...props }) => {
  return (
        <div className="container-fluid landing-page">
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img className="img-fluid" src="image-230.png" alt="Logo" />
                <span className="text-primary">Smart</span>
                <span className="text-secondary">Parking</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-primary" href="#">Sign up</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            <div className="hero-section mt-5 py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text justify-content-center d-flex flex-column">
                    <h1 className="display-4">
                      Unlock Parking Potential <br />
                      <small className="text-muted smart-solution">with Smart Solution</small>
                    </h1>
                    <p className="lead">Do you own a parking? Attract more customers with ease!</p>
                  </div>
                  <div className="col-md-6 illustration">
                    <img
                        className="img-fluid"
                        src="image-ai-brush-removebg-6-ucjfkam-10.png"
                        alt="Illustration"
                    />
                  </div>
                </div>
            </div>
          </div>
          <div className="clients my-5 pt-5">
            <div className="container">
                <h2 className="text-center">Our app integrates seamlessly with any parking occupancy tracking system.</h2>
                <div className="row text-center py-5">
                  <div className="col">
                    <img
                        className="img-fluid"
                        src="parking-barrier-2-10.png"
                        alt="Client Logo"
                    />
                  </div>
                  <div className="col">
                    <img
                        className="img-fluid"
                        src="image-220.png"
                        alt="Client Logo"
                    />
                  </div>
                  <div className="col">
                    <img
                        className="img-fluid"
                        src="image-210.png"
                        alt="Client Logo"
                    />
                  </div>
                  <div className="col">
                    <img
                        className="img-fluid"
                        src="parking-barrier-2-11.png"
                        alt="Client Logo"
                    />
                  </div>
                  <div className="col">
                    <img
                        className="img-fluid"
                        src="image-221.png"
                        alt="Client Logo"
                    />
                  </div>
                </div>
            </div>
          </div>
          <div className="community my-5">
            <div className="container">
              <h2 className="text-center">Manage all of your car parks in one place.</h2>
              <p className="text-center mt-2">Who can benefit from Smart Parking?</p>
              <div className="row text-center py-5">
                <div className="col-md-4">
                  <img className="img-fluid" src="icon1.svg" alt="Private Owners" />
                  <p>Private owners</p>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="group-10.svg" alt="Cities" />
                  <p>Cities</p>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src="group-20.svg" alt="Institutions" />
                  <p>Institutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="achievements my-5 pt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6 justify-content-center d-flex flex-column">
                  <h2 className="text-center">
                    Helping parking owners <br />
                    <small className="text-muted">attract more customers!</small>
                  </h2>
                </div>

                <div className="col-md-6">
                  <div className="row text-center">
                    <div className="col-md-6">
                      <img className="img-fluid" src="icon6.svg" alt="Members" />
                      <p>Members</p>
                    </div>
                    <div className="col-md-6">
                      <img className="img-fluid" src="live-tv0.svg" alt="Real-Time Spot Updates" />
                      <p>Real-Time Spot Updates</p>
                    </div>
                    <div className="col-md-6">
                      <img className="img-fluid" src="icon8.svg" alt="Event Bookings" />
                      <p>Event Bookings</p>
                    </div>
                    <div className="col-md-6">
                      <img className="img-fluid" src="smart-toy0.svg" alt="Innovative AI Solution" />
                      <p>Innovative AI Solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="calender my-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6 illustration">
                  <img
                      className="img-fluid"
                      src="image-ai-brush-removebg-6-ucjfkam-10.png"
                      alt="Illustration"
                  />
                </div>
                <div className="col-md-6 text justify-content-center d-flex flex-column">
                  <h2 className="text-center">How our system works?</h2>
                  <p className="text-center mt-3">
                    Our parking management system offers seamless integration with existing gate systems or sensor setups through API connectivity. This means you can connect your current parking infrastructure directly to our app, allowing for efficient, centralized control and monitoring.
                    <br />
                    In addition, our solution includes advanced AI-driven camera technology for counting available spaces. Using computer vision, our model analyzes live video feeds to accurately detect and report occupancy in real time. This enables a more flexible and scalable approach to parking management, providing your customers with reliable, up-to-date information on space availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer py-5">
            <div className="py-4">
              <div className="container">
                <h2 className="text-center">Leave It to the Pros: Simplify Parking Management in One Platform!</h2>
              </div>
            </div>
          </div>
          <FooterBig4 className="footer-big-4-instance"></FooterBig4>
        </div>
  );
};
