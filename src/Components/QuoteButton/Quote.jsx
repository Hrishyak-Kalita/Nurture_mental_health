import { useEffect, useState } from 'react'
import './Quote.scss'
const Quote = ({ heading, subHeading, bgImage, buttonTitle }) => {

    useEffect(() => {
        BGSetter();
    })

    const [bg_Image, setBg] = useState("https://res.cloudinary.com/dttau3ddh/image/upload/v1708332818/a-female-therapist-sitting-in-her-chamber-alone-in-upscaled_1_v9pffu.jpg")

    const BGSetter = () => {
        if (bgImage != null) {
            setBg(bgImage)
        }
    }

    return (
        <div style={{ backgroundImage: `url("${bg_Image}")` }} className="quoteContainer">
            <div 
                className="quote_div centerUsingFlex">
                <div className="quote">
                    <h1>{heading}</h1>
                    <p>{subHeading}</p>
                </div>
                {/* <div className="aptBtn centerUsingFlex">
                    <button>{buttonTitle}</button>
                </div> */}
            </div>
        </div>
    )
}

export default Quote
