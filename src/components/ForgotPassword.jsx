import React, { useState } from 'react'
import axios from 'axios';

import toast from 'react-hot-toast';
import { useNavigate,Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
   const navigate=useNavigate();
    const [input, setInput] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSendOTP = async () => {
        try {
            setLoading(true);
            const res = await axios.post("https://userlogin-4y76.onrender.com/api/v1/user/send-otp", {
                email: input.email
            });
            if (res.data.success) {
                toast.success("OTP sent to your email!");
                setStep(2); 
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (input.password !== input.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);
            const res = await axios.put("https://userlogin-4y76.onrender.com/api/v1/user/forgot-password", {
                email: input.email,
                otp: input.otp,
                newPassword: input.password
            });

            if (res.data.success) {
                toast.success("Password reset successful!");
                navigate('/login');
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to reset password");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex items-center w-screen h-screen justify-center'>
            <form onSubmit={handleResetPassword} className='shadow-lg flex flex-col gap-5 p-8'>
                <div className='my-4'>
                    <h1 className='text-center from-stone-950 text font-bold  italic text-3xl'>Instagram</h1>
                    <p className='text-sm text-center mt-4'>Forgot your password? Reset it here.</p>
                </div>

                <div>
                    <span className='font-medium'>Email</span>
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        disabled={step === 2}
                        className="focus-visible:ring-transparent my-2"
                    />
                </div>

                {step === 1 ? (
                  <div className="flex justify-between items-center mt-4">
                  <button type="button" onClick={handleSendOTP} disabled={loading}>
                      {loading ? (
                          <>
                              
                              Sending...
                          </>
                      ) : (
                          "Send OTP"
                      )}
                  </button>
              
                  <Link to="/login" className="text-sm text-blue-600 hover:underline">
                      Log In
                  </Link>
              </div>
              
                ) : (
                    <>
                        <div>
                            <span className='font-medium'>OTP</span>
                            <input
                                type="text"
                                name="otp"
                                value={input.otp}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-transparent my-2 w-full"
                            />
                        </div>
                        <div>
                            <span className='font-medium'>New Password</span>
                            <input
                                type="password"
                                name="password"
                                value={input.password}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-transparent my-2 w-full"
                            />
                        </div>
                        <div>
                            <span className='font-medium'>Confirm Password</span>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={input.confirmPassword}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-transparent my-2 w-full"
                            />
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? <><span className='mr-2 h-4 w-4 animate-spin' > Resetting...</span></> : "Reset Password"}
                        </button>
                    </>
                )}
            </form>
        </div>
    )
}

export default ForgotPassword;

