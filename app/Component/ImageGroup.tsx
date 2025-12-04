//@ts-nocheck
import Image from "next/image";
import ImageLoad from "./ImageLoad";
import Final from "./Final";

export default function ImageGroup({ name, location, images }) {
    
 images.forEach(img => {
    if (img.error) {
        img.url = "https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png";
    }
});

const haserror = images.some((img)=>img.error);



  return (
     <div className="bg-black flex items-center m-4 p-7 gap-4">

      <div className="relative w-[120px] h-[120px]">

        
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            width: "70px",
            height: "70px",
            top: "0px",
            left: "0px",
            zIndex: 4,
            position: "absolute",
          }}
        >
          <ImageLoad src={images[0].url} error={images[0].error} />
        </div>

        
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            width: "70px",
            height: "70px",
            top: "0px",
            left: "50px",
            zIndex: 3,
            position: "absolute",
          }}
        >
          <ImageLoad src={images[1].url} error={images[1].error} />
        </div>

        
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            width: "70px",
            height: "70px",
            top: "50px",
            left: "0px",
            zIndex: 2,
            position: "absolute",
          }}
        >
          <ImageLoad src={images[2].url} error={images[2].error} />
        </div>

    
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            width: "70px",
            height: "70px",
            top: "50px",
            left: "50px",
            zIndex: 1,
            position: "absolute",
          }}
        >
         <ImageLoad src={images[3].url} error={images[3].error} />
        </div>
      </div>
          <div className="flex justify-center flex-1">
            <div>
            <h1 className="text-white text-3xl font-bold ml-4">SUPER 30</h1>
            <p className="text-white ml-4">Moradabad,Uttarpradesh</p>
            </div>
          </div>
      
   {haserror ? (
    <Final src={"https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png"} error={true}/>
   ) : ( 
    <Final src={images[1].url} error={false}/>
   )}
    </div>
  );
}