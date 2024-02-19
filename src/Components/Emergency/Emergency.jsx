import React, { PureComponent } from 'react'
import "./Emergency.scss"
import { Avatar } from 'antd'
const Emergency = ({ title }) => {
    return (

        <div className='Emer'>
            {/* <h3>+0080 954 4557 884</h3> */}
            <div className="EmerPara">
            <Avatar size={150} src="https://res.cloudinary.com/dttau3ddh/image/upload/v1708332818/a-female-therapist-sitting-in-her-chamber-alone-in-upscaled_1_v9pffu.jpg" />
            </div>
            <h4 className='emHead'>Limpee Kalita</h4>
            <p className='emSubHead'>Psychologist</p>
            {/* <button className='readMorebtn' id="ReadEmer">Read More</button> */}

        </div>

    )
}

export default Emergency