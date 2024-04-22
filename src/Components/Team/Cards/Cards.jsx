import "./Cards.scss";

const Cards = ({ name, designation, photoSrc, bio, fees }) => {
  const socialLink = "https://www.youtube.com/watch?v=vGsi0OeNiKw";
  console.log(fees);
  return (
    <div className="cardContainer">
      <div className="profileOutline centerElements">
        <div className="profile">
          <img src={photoSrc} alt="profile" />
        </div>
      </div>
      {/* Info Box */}
      <div className="infoBox centerElements">
        <h3 className="heading">{name}</h3>
        <p className="designation">{designation}</p>
        {/* <p className="bio">{bio}</p> */}
        <ul className="fees">
          <li>
            Fees:<span><s>Rs.{fees?.f}</s></span>{" "}
          </li>
          <li>
            Offer Fees: <span>Rs.{fees?.of}</span>
          </li>
          <li>
            Student Offer Fees: <span>Rs.{fees?.sf}</span>
          </li>
        </ul>
        {/* <div className="social centerElements">
          <a href={socialLink} target="_blank" rel="noreferrer"><Icon icon="ri:facebook-fill" color="white" /></a>
          <a href={socialLink} target="_blank" rel="noreferrer"><Icon icon="mdi:instagram" color="white" /></a>
          <a href={socialLink} target="_blank" rel="noreferrer"><Icon icon="ic:outline-email" color="white" /></a>
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
