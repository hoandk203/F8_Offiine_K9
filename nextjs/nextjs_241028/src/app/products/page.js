import Link from "next/link";

export const metadata = {
    title: "Products",
    description: "Products page",
};

export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <Link href="/products/1">Detail</Link>
        </div>
    );
}
