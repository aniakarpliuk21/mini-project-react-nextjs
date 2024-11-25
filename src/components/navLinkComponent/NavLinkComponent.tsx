'use client';
import {usePathname} from "next/navigation";
import React, {FC, ReactNode} from 'react';
import Link from "next/link";
type NavLinkComponentProps = {
    children: ReactNode;
    path: string;
}
const NavLinkComponent: FC<NavLinkComponentProps> = ({path, children}) => {
    const pathname = usePathname();
    return (
        <div>
            <Link href={path} className={pathname === path ? 'active' : ''}>{children}</Link>
        </div>
    );
};

export default NavLinkComponent;