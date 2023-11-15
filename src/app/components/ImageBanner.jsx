// components/ImageBanner.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const ImageBanner = ({ imageUrl, link, altText }) => {
  return (
    <Link href={link}>
        <Image src={imageUrl} alt={altText} className="img-fluid image-banner" />
    </Link>
  );
};

export default ImageBanner;
