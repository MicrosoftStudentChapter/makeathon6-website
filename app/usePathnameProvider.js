"use client"

import { usePathname } from 'next/navigation'

export function UsePathnameProvider({ children })
{
  const pathName= usePathname();
  return children({ pathName });
}