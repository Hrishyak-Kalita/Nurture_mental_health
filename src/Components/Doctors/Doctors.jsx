import React, { PureComponent } from 'react'
import './Doctors.scss'
const Docs = ({ title }) => {
    return (

        <div className="Doct">
            <h4>Our Mision</h4>
            <p className="DocPara">
            Our mission is to provide accessible mental health support, reduce stigma, etc. We believe that everyone deserves to lead a fulfilling and mentally healthy life, and we are committed to raising awareness, providing resources, etc. to achieve this vision.
            </p>
            {/* <button className='readMorebtn' id="ReadDoc">Read More</button> */}
        </div>

    )
}

export default Docs