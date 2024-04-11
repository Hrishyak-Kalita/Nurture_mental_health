import React from "react";
import "./JoinUs.scss";
const JoinUs = () => {
  return (
    <>
      <div className="joinBox">
        <div className="leftjoinbox">
          <div id="JoinVolunteer" className="applybox">
            <p className="joinpara">
              Join us as <span className="joinas">Volunteer</span> for awareness
              program and work-shops. You will get recommendation letter on
              completion.
            </p>
            <button className="Applybtn vbtn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScV6dQW5FWGuojNuETWvpIO6J7l46l7R6-hVn5UF4I0uSemrA/viewform">
                Apply Now
              </a>
            </button>
          </div>
          <div id="joinIntern" className="applybox">
            <p className="joinpara">
              Join us as <span className="joinas">Intern</span> for awareness
              program and work-shops. You will get recommendation letter on
              completion.
            </p>
            <button className="Applybtn vbtn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfi6yVtFqQ3a1fVd-qkeK8Kdi65KDG8fJ6zZXt_Zu1ncRR2Hg/viewform?usp=sf_link">Apply Now</a>
            </button>
          </div>
          <div id="Collaboration" className="applybox">
            <h4>Collaborate With us</h4>
            <p className="joinpara">
              We invite individual/organization to{" "}
              <span className="joinas">Collaborate</span> with us in offering
              psychological services and programs. We are flexible and eager to
              explore various ideas within this field to benefit our community.
              Let's work together to develop and execute initiatives that
              promote mental health and well-being.
            </p>
            <button className="Applybtn vbtn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScRwt2UJEHIXv6PaHElvlCof_9VOQEe_lz-8RVSVvgyXOlC6w/viewform">
                Collaborate
              </a>
            </button>
          </div>
        </div>
        <div className="rightjoinbox">
          <h1>This is for add</h1>
        </div>
      </div>
    </>
  );
};
export default JoinUs;
