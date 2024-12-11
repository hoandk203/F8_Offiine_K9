import { useAuth0 } from "@auth0/auth0-react";

const Welcome= ()=>{
    const { loginWithPopup } = useAuth0();

    return (
        <div className="container mx-auto h-screen">
            <div className="flex justify-center items-center h-full">
                <div className="bg-[#111827] rounded-lg w-[400px] h-[200px] p-4 text-center text-white flex flex-col gap-3 justify-center">
                    <h1 className={"text-3xl font-semibold"}>Welcome to F8</h1>
                    <p className={"text-lg"}>Please login to send email</p>
                    <div>
                        <button className={'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'} onClick={() => loginWithPopup()}>Login | Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome