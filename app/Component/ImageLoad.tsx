//@ts-nocheck
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageTooltip } from "./ImageTooltip";

export default function ImageLoad({ src, error }) {
  const [count, setcount] = useState(0);
  const [isloading, setisloading] = useState(false);
  const ERROR_ICON =
    "https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png";

  useEffect(() => {
    if (error && count < 3) {
      setisloading(true);



      const timer = setTimeout(() => {
        setcount((prev) => prev + 1);
      }, 2000);

      return () => clearTimeout(timer);
    }
    setisloading(false);
}, [count, error]);

const status = isloading ? "loading" : error && count >= 3 ? "error" : "ready";

  return (
    <ImageTooltip status={status} count={count}>
    <div
      className="relative rounded-full overflow-hidden flex justify-center items-center"
      style={{ width: "70px", height: "70px" }}
    >
      {isloading ? (
       
        <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full"></div>
      ) : error ? (
       
        <Image src={ERROR_ICON} alt="error" fill style={{ objectFit: "cover" }} />
      ) : (
        
        <Image src={src} alt="img" fill style={{ objectFit: "cover" }} />
      )}
    </div>
    </ImageTooltip>
  );
}
