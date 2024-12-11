import Image from "next/image";
import styles from "./page.module.css";
import { Child } from "@/components";

export default function Home() {
    return (
        <div>
            <Child />
            <span>page</span>
        </div>
    );
}
