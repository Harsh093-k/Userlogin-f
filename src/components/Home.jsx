import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-700">
                <h1 className="text-3xl font-bold italic">GameZone</h1>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-purple-400">Home</Link>
                    <Link to="/games" className="hover:text-purple-400">Games</Link>
                    <Link to="/login" className="hover:text-purple-400">Login</Link>
                    <Link to="/signup" className="hover:text-purple-400">Signup</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="text-center py-20 px-4 md:px-0">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Enter the World of Epic Gaming</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">Play. Compete. Conquer. Join the ultimate gaming community with the hottest games and latest updates.</p>
                <Link to="/games">
                    <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg rounded shadow-md transition duration-300">Explore Games</button>
                </Link>
            </section>

            {/* Featured Games */}
            <section className="py-16 px-6 md:px-20">
                <h3 className="text-3xl font-semibold mb-10 text-center">🔥 Featured Games</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {['Adventure', 'Bgmi', 'free fire'].map((game, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                            <img src={`https://source.unsplash.com/random/400x250?sig=${index}&${game}`} alt={game} className="rounded mb-4 w-full h-48 object-cover" />
                            <h4 className="text-xl font-semibold mb-2">{game}</h4>
                            <p className="text-gray-400">Jump into action with {game}. Fast-paced gameplay and endless fun await!</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
                &copy; {new Date().getFullYear()} GameZone. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
