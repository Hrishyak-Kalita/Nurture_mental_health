import  { useState } from 'react';
import { Button, Popover } from 'antd';
import ContactCard from './ContactCard/ContactCard';
import { Icon } from '@iconify/react';

import "./FixedContact.scss"
const FixedContact = () => {
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };



    return (
        <div className="fixedContainer">

            <Popover
                //content={<a onClick={hide}>X</a>}
                placement="leftTop"
                title={<ContactCard/>}
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
            >
                <Button className='popbtn'>
                <Icon icon="jam:whatsapp" width="30" style={{color: "#5ca206"}} />

                </Button>
            </Popover>

        </div>

    );
};

export default FixedContact;