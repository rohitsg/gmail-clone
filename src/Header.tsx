import React from 'react';
import './Header.css';

interface IProps {
    name: string
}

const Header = (props: IProps) => {
    return (
        <div className='header'>
            Gmail Header
        </div>
    )
}


export default Header

