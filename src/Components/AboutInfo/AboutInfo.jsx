import { Icon } from "@iconify/react";
import React from "react";
import "./AboutInfo.scss";
const AboutInfo = ({ heading, content, imageLink, icon_name }) => {
  return (
    <div className="about_container ">
      <div className="content centerElements">
        <div className="About_box">
          <Icon icon={icon_name} width="100" color="#48b0e0" />

          <div className="about1">
            <h1>
              Welcome to <img width="40" src="/logoOnly.svg" alt="" /> Nurture
              Mental Health
            </h1>

            <p>
              At [Your Organization Name], we are passionate about [briefly
              describe the main focus or mission of your organization, e.g.,
              promoting mental health, fostering a supportive community, etc.].
              Founded on the principles of [list a few core values, e.g.,
              empathy, inclusivity, integrity], we are dedicated to making a
              positive impact on the mental well-being of individuals and the
              community.
            </p>
          </div>
          <div className="about1">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide accessible mental health support, reduce
              stigma, etc. We believe that everyone deserves to lead a
              fulfilling and mentally healthy life, and we are committed to
              raising awareness, providing resources, etc. to achieve this
              vision.
            </p>
          </div>
          <div className="about1">
            <h2>Community Engagement</h2>
            <p>
              Beyond individual counseling, we actively engage with the
              community through [describe community initiatives, e.g.,
              workshops, outreach programs, collaborations with local
              organizations]. By fostering connections and spreading awareness,
              we aim to create a culture of mental health understanding and
              support.
            </p>
          </div>
          <div className="about1">
            <h2>Transformative Stories</h2>
            <p>
              Discover the impact of our work through the stories of individuals
              who have found healing and support at [Your Organization Name].
              [Include brief testimonials or success stories to showcase
              positive outcomes.]
            </p>
          </div>
          <div className="about1">
            <h2>Get Involved</h2>
            <p>
              Whether you're seeking support, interested in our workshops, or
              looking to contribute to our mission, we invite you to contact us,
              attend an event, donate, etc. Together, let's build a healthier
              and more resilient community.
            </p>
          </div>
          <p>
            Thank you for visiting Nurture Mental Health. We look forward to
            walking alongside you on your journey to mental well-being.
          </p>
        </div>
      </div>
      <div className="aboutImage">
        <img src={imageLink} alt="blog info descriptor" />
        <img src={imageLink} alt="blog info descriptor" />
        {/* <img src={imageLink} alt="blog info descriptor" /> */}
      </div>
    </div>
  );
};

export default AboutInfo;
