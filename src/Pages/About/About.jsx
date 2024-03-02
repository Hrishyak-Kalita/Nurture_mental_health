import { AboutInfo, Quote, TileDesc } from '../../Components'
import data from "../../assets/About.json"
import './About.scss'

const About = () => {
  return (
    <div>
      {/* <TileDesc name="ABOUT US" description='ABOUT US'/> */}
      <Quote
        heading={data?.quote?.heading}
        subHeading={data?.quote?.subHeading}
        buttonTitle={data?.quote?.buttonTitile}
        backgroundImage={data?.quote?.backgroundImage}
      />

      <AboutInfo
        heading={data?.aboutInfo?.heading}
        content={data?.aboutInfo?.content}
        imageLink1={data?.aboutInfo?.imageLink1}
        imageLink2={data?.aboutInfo?.imageLink2}
        icon_name={data?.aboutInfo?.iconName}
      />


     
      
    </div>
  )
}

export default About