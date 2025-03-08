import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
      <div className="container mx-auto  border-b border-gray-300 py-4 flex justify-between px-4">
        <Link href="/" className="text-white font-bold ">Boto CRM</Link>
        <Link
          href="/addCustomer"
          className="text-white bg-green-400 px-2 rounded-xl"
        >
          Add Cunstomer
        </Link>
      </div>
    );
}

export default Header;
