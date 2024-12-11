"use client"

import Link from "next/link";
import '@/assets/style.css'
import {usePathname} from "next/navigation";
import clsx from "clsx";

const Navigation= ()=>{
    const pathname= usePathname()
    const isActive= (path)=>{
        return path === pathname
    }
    return (
        <ul className="menu">
            <li className={clsx(isActive("/") && "active")}>
                <Link href={"/"}>Trang chủ</Link>
            </li>
            <li className={clsx(isActive("/about") && "active")}>
                <Link href={"/about"}>Giới thiệu</Link>
            </li>
            <li className={clsx(isActive("/posts") && "active")}>
                <Link href={"/posts"}>Tin tức</Link>
            </li>
            <li className={clsx(isActive("/products") && "active")}>
                <Link href={"/products"}>Sản phẩm</Link>
            </li>
        </ul>
    )
}

export default Navigation