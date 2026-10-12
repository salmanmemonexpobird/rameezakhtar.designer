'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollSmoother } from '@/plugins';
import menu_data from './MenuData';


const NavMenu = () => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section_id?: string) => {
    if (!section_id) return;
    if (pathname === '/') {
      e.preventDefault();
      const smoother = ScrollSmoother.get && ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(`#${section_id}`, true, 'top top');
      } else {
        document.getElementById(section_id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <ul>
        {menu_data.map((item, index) => (
          <li key={index}>
            <Link href={item.link} onClick={(e) => handleClick(e, item.section_id)}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
