import React from 'react';

const Button = ({ type, children }) => {
    const primary = "bg-primary text-white";
    const secondary = "bg-transparent border border border-primary text-primary";
    const btnTypes = { primary, secondary }
    // console.log(btnTypes["primary"])
    return (
        <button className={`${btnTypes[type]} rounded-lg px-5 py-4 h-min w-36 lg:w-48`}>
            {children}
        </button>
    );
};

export default Button;