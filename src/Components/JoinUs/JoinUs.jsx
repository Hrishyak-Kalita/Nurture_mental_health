import React from 'react';
import './JoinUs.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const JoinUs = () => {


  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center black-text">Contact</h2>
            <p className="text-secondary mb-5 text-center">Join us as volunteer for awareness program and work-shops. You will get recommendation letter on
completion.</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="bg-white border rounded shadow-sm p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="fullname" name="fullname" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" name="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                  <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
