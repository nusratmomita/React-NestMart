import React from 'react'
import { useNavigate } from 'react-router';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { userCredentials } from '../Data/UserCredentials';
import { saveUserToLS } from '../Utilities/localStorageUtility';
import { FiUserPlus } from "react-icons/fi";
import { toast } from 'react-toastify';

const Register = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Form Section */}
                        <div className="p-8 sm:p-10">
                            <div className="mb-8 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#253D4E] to-[#5a5f9e] rounded-full mb-4">
                                    <FiUserPlus className='text-2xl text-white ml-1'/>
                                </div>
                                <h1 className="text-4xl font-bold text-[#253D4E] mb-2">Create An Account</h1>
                                <p className="text-base text-gray-600">
                                    Sign up to continue with NestMart
                                </p>
                            </div>
                            
                            <Formik initialValues={{
                                    name: "",
                                    email: "",
                                    password: "",
                                    isCorrect: ""
                                }}

                                validate={(values) => {
                                    const errors = {};

                                    if(!values.email){
                                      errors.email = "You must enter an email"
                                    }

                                    if(!values.name){
                                      errors.name = "You must enter a name"
                                    }

                                    if (!values.password) {
                                      errors.password = "You must enter a password";
                                    } 
                                    else if (values.password.length < 6) {
                                      errors.password = "Password must be at least 6 characters";
                                    }

                                    return errors;
                                }}

                                onSubmit={(values , {setErrors}) => {
                                    const isUserValid = userCredentials.some((user) => user.email.toLowerCase() === values.email.toLowerCase() &&  user.name.toLowerCase() === values.name.toLowerCase() && user.password === Number(values.password));
                                    console.log(isUserValid)
                                    if(!isUserValid){
                                        setErrors(
                                            {isCorrect:"Invalid user input. Try again."}
                                        )

                                        return;
                                    }

                                    saveUserToLS({
                                        userName: values.name,
                                        userEmail: values.email
                                    })

                                    toast.success("Register successful!");

                                    setTimeout(() => {
                                        navigate("/");
                                    },2000)
                                }}

                            >
                                <Form className="space-y-4">
                                    {/* name Field */}
                                    <div>
                                        <label htmlFor="name" className="block mb-1.5 text-xl font-semibold text-gray-700">
                                            Name
                                        </label>
                                        <Field 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            placeholder="John Doe" 
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#253D4E] focus:ring-1 focus:ring-[#253D4E] transition-all duration-200 bg-white text-gray-800 text-xl"
                                        />
                                        <ErrorMessage name="name" component="p" className="text-red-700"/>
                                    </div>

                                    {/* email field */}
                                    <div>
                                        <label htmlFor="email" className="block mb-1.5 text-xl font-semibold text-gray-700">
                                            Email
                                        </label>
                                        <Field 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="youremail@gmail.com"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#253D4E] focus:ring-1 focus:ring-[#253D4E] transition-all duration-200 bg-white text-gray-800 text-xl" 
                                        />

                                        <ErrorMessage name="email" component="p" className="text-red-700"/>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block mb-1.5 text-xl font-semibold text-gray-700">
                                            Password
                                        </label>
                                        <Field 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            placeholder="Enter your password"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#253D4E] focus:ring-1 focus:ring-[#253D4E] transition-all duration-200 bg-white text-gray-800 text-xl" 
                                        />

                                        <ErrorMessage name="password" component="p" className="text-red-700"/>
                                    </div>

                                    <ErrorMessage name="isCorrect" component="p" className="text-red-700"/>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button 
                                            type="submit" 
                                            className="cursor-pointer w-full px-6 py-3 text-base font-semibold text-white bg-[#253D4E] rounded-lg hover:bg-[#1f2452] focus:outline-none focus:ring-2 focus:ring-[#253D4E] focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">
                                            Sign Up
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Register