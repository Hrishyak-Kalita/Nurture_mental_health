import "./Footer.scss";
import NewsPreview from "../footerComponents/NewsPreview";
import ContactUsFooter from "../footerComponents/ContactUsFooter/ContactUsFooter";
import { Icon } from "@iconify/react";
import data from "../../assets/data.json";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="logo" src="./logoNew.png" alt="medica logo" />
      </div>
      <div className="first">
        <p className="footer_des">
          Whether you're seeking support, interested in our workshops, or
          looking to contribute to our mission, we invite you to contact us,
          attend an event, donate, etc. Together, let's build a healthier and
          more resilient community.
        </p>
        <div className="footer_icons">
          <a href="https://www.youtube.com/@nurturementalhealthwithlim7868">
            <Icon width="30" icon="mdi:youtube" color="white" />
          </a>
          <a href="https://www.instagram.com/nurture_mental_health_?igsh=MXR4dGpqZ3R1cjJpMg==">
            <Icon width="30" icon="mdi:instagram" color="white" />
          </a>
          <a href="https://www.facebook.com/share/yoiWf9pii6mr7Leo/?mibextid=qi2Omg">
            <Icon width="30" icon="ic:baseline-facebook" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
