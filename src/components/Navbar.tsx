"use client";
import React, { useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col space-y-4 text-sm text-white ">

                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="courses">
                    <div className="flex flex-col space-y-4 text-sm text-white">
                        <HoveredLink href="/web-dev">All Courses</HoveredLink>
                        <HoveredLink href="/interface-design">
                            Basic Music Theory
                        </HoveredLink>
                        <HoveredLink href="/seo">
                            Advanced Composition
                        </HoveredLink>
                        <HoveredLink href="/branding">songwriting</HoveredLink>
                        <HoveredLink href="/branding">
                            Music Production
                        </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="contact us">
                    <div className="flex flex-col space-y-4 text-sm text-white">
                        <Link href={"/contact"}>Contact Us</Link>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Navbar;
