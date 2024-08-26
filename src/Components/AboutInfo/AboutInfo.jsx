import { Icon } from "@iconify/react";
import React from "react";
import "./AboutInfo.scss";
const AboutInfo = ({ heading, content, imageLink1,imageLink2, icon_name }) => {
  return (
    <div className="about_container ">
      <div className="content centerElements">
        <div className="About_box">
          <div className="about1">
            <h1 className="mainAboutHeading">
              <span>Welcome to <img width="30" src="/logoOnly.svg" alt="" /> </span> Nurture
              Mental Health
            </h1>

            <p>
              At Nurture Mental Health, we are passionate about
              promoting mental health, fostering a supportive community, etc.
              Founded on the principles of
              empathy, inclusivity, integrity, we are dedicated to making a
              positive impact on the mental well-being of individuals and the
              community.
            </p>
          </div>
          <div className="about1">
            <h2>Our Vision</h2>
            <p>To cultivate a society where mental health is prioritized, understood and nurtured, enabling individuals to thrive in their personal and communal pursuits.</p>
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
              community through
              workshops, outreach programs, collaborations with local
              organizations. By fostering connections and spreading awareness,
              we aim to create a culture of mental health understanding and
              support.
            </p>
          </div>
          <div className="about1">
            <h2>Transformative Stories</h2>
            <p>
              Discover the impact of our work through the stories of individuals
              who have found healing and support at Nurture Mental Health.
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
        <img src={imageLink1} alt="blog info descriptor" />
        <h4>Ms Limpee Kalita :  Counselling Psychologist and Founder</h4>
        <img src={imageLink2} alt="blog info descriptor" />
        {/* <img src={imageLink} alt="blog info descriptor" /> */}
      </div>
    </div>
  );
};

export default AboutInfo;
