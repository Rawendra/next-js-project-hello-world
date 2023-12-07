import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface CustomImageProps {
  altText: string;
  title:string,
  image: StaticImageData;
}

function CustomImage(props: CustomImageProps) {
  const { image, altText } = props;
  return (
    <>
       <div className="absolute -z-10 inset-0">
      <Image src={image} fill alt={altText} style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
    </div>
    <div className="pt-48 flex justify-center items-center">
      <h1 className="text-white text-6xl">{props.title}</h1>
    </div>
    </>
 
  );
}

export default CustomImage;
