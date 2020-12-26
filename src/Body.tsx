import React from 'react'
import EmailList from './EmailList'
import SideBar from './SideBar'
import './Body.css'

function Body() {
    return (
        <div className='container-body'>
            <SideBar />
            <EmailList />
        </div>
    )
}

export default Body
