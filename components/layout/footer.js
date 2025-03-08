import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
      <div className="container mx-auto right-0 left-0 rounded-lg bg-gray-500  flex justify-center gap-1 absolute bottom-0">
        <Link
          href="https://github.com/hosseinmahdiian"
          className="text-blue-500 cursor-pointer "
        >
          Hossein M.Z 
        </Link>
        <p>Next.JS | CRM project</p>

      </div>
    );
}

export default Footer;
