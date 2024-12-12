import "./FooterBig4.css";

export const FooterBig4 = ({ className, ...props }) => {
  return (
      <div className="footer-big-4 py-5">
          <div className="container d-flex flex-wrap ">
            <div className="col-md-6 mb-3 d-flex flex-column justify-content-center align-items-center">
              <div>
                <h1>Smart Parking</h1>
                <div className="mt-2">
                  <div>All rights reserved</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3 d-flex flex-column justify-content-center align-items-center">
              <div>
                <h5>Company</h5>
                <ul className="list-unstyled mt-3">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <a href="https://smartparking.com.pl/contact-us">Contact us</a>
                </ul>
              </div>
            </div>
        </div>
      </div>
  );
};