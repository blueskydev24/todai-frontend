import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
export default function DrawerComponent({isOpen}) {
    const toggleDrawer = () => {
        // setIsOpen((prevState) => !prevState)
        console.log('child');
        
    }
    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </>
    )
}