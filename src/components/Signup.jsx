import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const [input, setInput] = useState({ username: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('https://userlogin-4y76.onrender.com/api/v1/user/register', input, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });

            if (res.data.success) {
                toast.success(res.data.message);
                setInput({ username: "", email: "", password: "" });
                navigate('/login');
            }
        } catch (err) {
            const message = err?.response?.data?.message || "Signup failed!";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
                <h2 className="text-3xl font-bold text-center">Sign Up for GameZone</h2>

                <div>
                    <label className="block mb-1 font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={input.username}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded font-semibold"
                    disabled={loading}
                >
                    {loading ? "Creating account..." : "Sign Up"}
                </button>

                <div className="text-center text-sm text-gray-400">
                    Already have an account? <Link to="/login" className="text-purple-400 hover:underline">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Signup;
