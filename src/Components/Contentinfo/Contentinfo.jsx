import React from 'react'
import './Contentinfo.scss'


export default function Contentinfo() {
    return (

        <div className='ContentContainer'>
            <div className='Medicacontent'>
                <h1>Welcome to <img width='40'  src="/logoOnly.svg" alt="" /> Nurture Health Center</h1>

                <p className='ContentPara'>
                    Lorem uis facilis sed quo cumque numquam suscipit ipsum ipsam sunt sit optio asperiores libero vitae vero amet natus. Nostrum, inventore? Sapiente maiores, a commodi ipsum exercitationem architecto ad magnam eligendi corrupti molestias! Sapiente quae eaque dicta doloribus ratione nostrum recusandae debitis sint veritatis ducimus suscipit nam, perspiciatis pariatur sit, perferendis impedit quaerat magni fugiat maxime labore aliquid?
                </p>

                <ul>
                    <li> <span>Service 1</span></li>
                    <li> <span>Service 2</span></li>
                    <li> <span>Service 3</span></li>
                    <li> <span>Service 4</span></li>
                    <li> <span>Service 5</span></li>
                


                </ul>
                <button className='Readbtn'>Read More</button>
            </div>
            <div className='DocImg'>
            </div>

        </div>

    )
}
