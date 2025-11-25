import React from 'react'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname(); 
  const isActive = pathname === href;
  const className = isActive ? "text-primary font-bold" : "";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
