import React, { useContext, useRef, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../core/Provider';


const Form= ({user})=>{
    const { logout } = useAuth0();
    const form = useRef();
    const {dispatch}= useContext(AppContext)
    const [message, setMessage]= useState("");

    const handleChange= (e)=>{
        setMessage(e.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        dispatch({type: "true"});
        emailjs
            .sendForm('service_whwqhe8', 'template_8eth928', form.current, {
                publicKey: '3fUDYJsRQNBvAm_ia',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    dispatch({type: "false"});
                    toast.success('Email sent');
                    setMessage("");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    dispatch({type: "false"});
                    toast.error('Email failed');
                },
            );
    };

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={"h-screen flex justify-center items-center"}>
                <div className="w-[500px] bg-[#111827] p-6 rounded-lg">
                    <div className={"flex justify-center"}>
                        <img className={"rounded-full"} src={user.picture} alt={user.name}/>
                    </div>
                    <div className={"text-end"}>
                        <span>
                            <button type="button" formAction="null"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                        </span>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                name</label>
                            <input type="text" id="name" name='user_name' value={user.name} readOnly={true}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email" name="user_email" value={user.email} readOnly={true}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email..." required/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                message</label>
                            <textarea id="message" rows="4" name="message"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your message..."
                                    value={message}
                                    onChange={handleChange}></textarea>
                        </div>
                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send email
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form