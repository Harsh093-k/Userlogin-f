import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const featuredGames = [
        {
            name: 'Adventure',
            imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
            name: 'BGMI',
            imageUrl: 'https://images.unsplash.com/photo-1611605698335-0c1f7f7b8c8e?auto=format&fit=crop&w=400&h=250&q=80',
        },
        {
            name: 'Free Fire',
            imageUrl: 'https://images.unsplash.com/photo-1587202372775-5d2a8d4d5e4e?auto=format&fit=crop&w=400&h=250&q=80',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-700">
                <h1 className="text-3xl font-bold italic">GameZone</h1>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-purple-400">Home</Link>
                    <Link to="/games" className="hover:text-purple-400">Games</Link>
                    <Link to="/login" className="hover:text-purple-400">Logout</Link>
                    <Link to="/signup" className="hover:text-purple-400">Signup</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="text-center py-20 px-4 md:px-0">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Enter the World of Epic Gaming</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    Play. Compete. Conquer. Join the ultimate gaming community with the hottest games and latest updates.
                </p>
                <Link to="/games">
                    <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg rounded shadow-md transition duration-300">
                        Explore Games
                    </button>
                </Link>
            </section>

            {/* Featured Games */}
            <section className="py-16 px-6 md:px-20">
                <h3 className="text-3xl font-semibold mb-10 text-center">🔥 Featured Games</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {featuredGames.map((game, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={game.imageUrl}
                                alt={game.name}
                                className="rounded mb-4 w-full h-48 object-cover"
                            />
                            <h4 className="text-xl font-semibold mb-2">{game.name}</h4>
                            <p className="text-gray-400">
                                Jump into action with {game.name}. Fast-paced gameplay and endless fun await!
                            </p>
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
