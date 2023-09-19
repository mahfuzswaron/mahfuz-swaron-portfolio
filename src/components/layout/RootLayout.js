import React from 'react';
import NavigationBar from './NavigationBar';

const RootLayout = (props) => {
    return (
        <div className=''>
            <NavigationBar />
            <main className={``} >{props.children}</main>
        </div>
    );
};

export default RootLayout;