import React from 'react';
import NavigationBar from './NavigationBar';

const RootLayout = (props) => {
    return (
        <div className='bg-slate-900'>
            <NavigationBar />
            <main className={``} >{props.children}</main>
        </div>
    );
};

export default RootLayout;