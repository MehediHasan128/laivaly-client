"use client";

import { useEffect, useState } from "react";

const Countdown = () => {

   const [seconds, setSeconds] = useState(300); 

   useEffect(() => {

    if(seconds <= 0) return;

    const timer = setInterval(() => {
        setSeconds((pre) => pre - 1);
    }, 1000);

    return () => clearInterval(timer)

   }, [seconds]);

   const minitues = Math.floor(seconds / 60);
   const sec = seconds % 60;

  return <span className="text-black font-bold">{minitues}:{sec < 10 ? `0${sec}` : sec}</span>;
};

export default Countdown;
