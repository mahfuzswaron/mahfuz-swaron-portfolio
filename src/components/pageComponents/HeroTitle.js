import React, { useEffect, useState } from 'react';

const HeroTitle = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Content Writer"];
    const period = 500;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <div className=''>
            <p className='text-[4.5rem] md:text-[4rem] leading-none font-light'>Hello,</p>
            <h1 className='text-[5rem] md:text-[4rem] leading-none'>
                <span className="font-light">I'm</span>
                <span className='text-primary'> Mahfuz </span>
                <span>Swaron</span>
            </h1>
            <h3 className='text-[4.4rem] md:text-[4rem] lg:text-[4.5rem] font-medium leading-none  text-primary '>{text} <span className='text-textBase font-thin'>|</span></h3>
        </div>
    );
};

export default HeroTitle;