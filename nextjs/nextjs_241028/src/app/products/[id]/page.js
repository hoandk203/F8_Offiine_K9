export default async function ({ params, searchParams }) {
    console.log(await params);

    return (
        <div>
            <h1>Products detail </h1>
        </div>
    );
}
