import React from 'react'

const LowerHeading = (props) => {
    return (
        <>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                    {props.title}
                </h2>
                <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">{props.tagline}</p>
            </div>
        </>
    );
};

export default LowerHeading;