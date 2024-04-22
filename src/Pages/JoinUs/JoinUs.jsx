import React from "react";
import { Quote } from "../../Components";

import "./JoinUs.scss";
const JoinUs = () => {
  return (
    <>
      <Quote
        heading="JOIN US"
        subHeading="Learn, grow and contribute together. "
        bgImage="https://res.cloudinary.com/dttau3ddh/image/upload/v1713724438/2150951243_brz2dx.jpg"
      />
      <div className="joinBox">
        <div className="leftjoinbox">
          <span className="JoinHeading">
            {" "}
            <h2>Join Us Today!</h2>
          </span>

          <div id="JoinVolunteer" className="applybox">
            <p className="joinpara">
              Are you passionate about raising awareness and educating others?
              Join our team as a volunteer for our awareness programs and
              workshops! As a volunteer, you'll play a crucial role in helping
              us reach out to the community and make a positive impact. Whether
              you prefer organizing workshops or engaging with participants,
              your contributions will be valued. Additionally, upon successful
              completion, you'll receive a recommendation letter to acknowledge
              your hard work and dedication. Interested in making a difference
              and gaining valuable experience? Click the button below to apply
              and become part of our
              <span className="joinas">Volunteer</span> team! for awareness
              program and work-shops.
            </p>
            <button className="Applybtn vbtn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScV6dQW5FWGuojNuETWvpIO6J7l46l7R6-hVn5UF4I0uSemrA/viewform">
                Apply Now
              </a>
            </button>
          </div>
          <div id="joinIntern" className="applybox">
            <p className="joinpara">
              <p>
                Are you interested in gaining valuable experience while making a
                difference in the community? We're looking for enthusiastic
                interns to join our awareness programs and workshops. As an
                intern, you'll play a key role in organizing, coordinating, and
                participating in our events to raise awareness and educate
                others.
              </p>
              <p>
                You'll work closely with our team to help plan workshops, engage
                with participants, and ensure successful program execution.
                However, on successful completion, you'll receive a
                recommendation letter as recognition of your hard work and
                dedication.
              </p>
              <p>
                Ready to start your journey with us? Click the button below to
                apply for our <span className="joinas">Internship</span>{" "}
                internship program and make an impact in the community!
              </p>
            </p>
            <button className="Applybtn vbtn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfi6yVtFqQ3a1fVd-qkeK8Kdi65KDG8fJ6zZXt_Zu1ncRR2Hg/viewform?usp=sf_link">
                Apply Now
              </a>
            </button>
          </div>
          <div id="Collaboration" className="applybox">
            <span className="JoinHeading" id="collabhead">
              <h2>Collaborate With us</h2>
            </span>
            <p className="joinpara">
              <p>
                We are extending an invitation to individuals and organizations
                to <span className="joinas">Collaborate</span> with us in offering psychological services and
                programs. We are flexible and eager to explore various ideas
                within this field to benefit our community. Let's work together
                to develop and execute initiatives that promote mental health
                and well-being
              </p>
              <p>
                Whether you're interested in contributing to existing programs
                or creating new initiatives, we welcome your expertise and
                creativity. This is an opportunity to make a meaningful impact
                on the mental health of our community and work alongside a
                passionate team.
              </p>
              <p>Interested in collaborating? Click the button below to connect with us, and let's start exploring how we can work together.</p>
             
            </p>
            <button className="Applybtn vbtn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScRwt2UJEHIXv6PaHElvlCof_9VOQEe_lz-8RVSVvgyXOlC6w/viewform">
                Collaborate
              </a>
            </button>
          </div>
        </div>
        <div className="rightjoinbox">
          <img src="https://res.cloudinary.com/dttau3ddh/image/upload/v1709373874/IMG_20240220_120139_mp1d2v.jpg" alt="" />
        <img src="https://res.cloudinary.com/dttau3ddh/image/upload/v1709373862/IMG_20230720_134904_qjat3g.jpg" alt="" />
       <img src="https://res.cloudinary.com/dttau3ddh/image/upload/v1709373832/IMG_20240111_141914_ehrf3p.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
export default JoinUs;
