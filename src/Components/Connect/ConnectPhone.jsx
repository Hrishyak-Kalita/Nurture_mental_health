
import './ConnectUs.scss';
import { Icon } from "@iconify/react";
const ConnectPhone = () => {

   const handleButtonClick = ({phoneNumber,size}) => {
        window.location.href = `tel:${phoneNumber}`; // Replace '1234567890' with the desired phone number
    };
        return (
            <button className='connectBtn' onClick={handleButtonClick}>
                <Icon icon="material-symbols:add-call" width="30"  style={{color: "#0657a2"}} />
            </button>
        );
    
}

export default ConnectPhone;
