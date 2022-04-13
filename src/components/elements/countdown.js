import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [dataObj, setDataObj] = useState({})
    const DataNumber = ({ children }) => (<div className="bg-softpink py-2 text-sm md:text-2xl text-center font-bold rounded-lg shadow-2xl bg-[url('./background')]"><div className="flex flex-col">{children}</div></div>);

    const startTime = () => {
        const timerData = new Date("April 17, 2022").getTime();

        const intTimer = setInterval(() => {
            const nowData = new Date().getTime();
            const diffData = timerData - nowData;

            const countData = {
                Days: Math.floor(diffData / (24 * 60 * 60 * 1000)),
                Hours: Math.floor((diffData % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)),
                Minutes: Math.floor((diffData % (60 * 60 * 1000)) / (1000 * 60)),
                Seconds: Math.floor((diffData % (60 * 1000)) / 1000)
            }
            if (diffData < 0) clearInterval(intTimer)
            else setDataObj(countData);
        }, 1000);
    }

    useEffect(() => { startTime() }, []);


    return <div className="grid grid-cols-4 gap-x-1 md:gap-x-6 w-hexye md:w-hexyf lg:w-full text-center items-center justify-center mb-6">
        <DataNumber><span className="text-xs font-semibold md:text-base">Days</span><span>{dataObj.Days}</span></DataNumber>
        <DataNumber><span className="text-xs font-semibold md:text-base">Hours</span><span>{dataObj.Hours}</span></DataNumber>
        <DataNumber><span className="text-xs font-semibold md:text-base">Minutes</span><span>{dataObj.Minutes}</span></DataNumber>
        <DataNumber><span className="text-xs font-semibold md:text-base">Seconds</span><span>{dataObj.Seconds}</span></DataNumber>
    </div>
}

export default Countdown;