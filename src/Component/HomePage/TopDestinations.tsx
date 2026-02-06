"use client";

import { ArrowUpRight } from "lucide-react";

const destinations = [
    {
        name: "New York",
        listings: "Learning Capital",
        image:
            "https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=1200",
    },
    {
        name: "London",
        listings: "Knowledge Capital",
        image:
            "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1200",
    },
    {
        name: "San Francisco",
        listings: "Academic Excellence",
        image:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200",
    },
    {
        name: "Paris",
        listings: "Cultural Hub",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
    },
];

export default function TopDestinations() {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-0">
                {/* Heading */}
                <div className="text-center max-w-6xl mx-auto">
                    <p className="text-blue-950 font-semibold tracking-wide mb-4 uppercase">
                        The Moment Before The Decision
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Top <span className="text-blue-950">Destinations</span>
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        Every international journey begins with a quiet moment of doubt.
                        Questions surface. Possibilities feel exciting — yet overwhelming.
                        Choosing to study abroad isn’t just about opportunity; it’s about
                        responsibility, clarity, and timing. That moment deserves guidance — not noise.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((item, index) => (
                        <div
                            key={index}
                            className="group relative h-105 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            <div className="group relative h-105 rounded-3xl overflow-hidden cursor-pointer shadow-xl bg-slate-900">
                                {/* Background Image with subtle zoom */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                                />

                                {/* Dynamic Overlay - Deepens on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Animated SVG Path - "The Design Change" */}
                                <svg
                                    viewBox="0 0 200 200"
                                    className="absolute -bottom-10 -left-10 w-64 h-64 text-blue-600/0 transition-all duration-700 ease-in-out group-hover:scale-150 group-hover:text-blue-500/40"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M40,-62.1C53.3,-54.5,66.5,-45.1,73.6,-32.5C80.7,-19.9,81.7,-4.1,77.8,10.1C73.8,24.3,64.9,37,53.8,47.2C42.7,57.4,29.3,65.1,14.8,69.2C0.3,73.3,-15.3,73.7,-29.8,68.7C-44.3,63.7,-57.7,53.3,-66.1,40.1C-74.5,26.9,-77.9,10.9,-75.4,-4.1C-72.9,-19.1,-64.5,-33.1,-52.8,-41.2C-41.1,-49.3,-26.1,-51.5,-11.4,-57.8C3.3,-64.1,18.7,-74.6,32.4,-73.4C46.1,-72.2,58.2,-59.3,40,-62.1Z"
                                        transform="translate(100 100)"
                                    />
                                </svg>

                                {/* Content Container */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            

                                    {/* Title and Listings */}
                                    <div className="relative mt-2">
                                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center justify-between overflow-hidden">
                                            <p className="text-blue-200 font-medium transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                                {item.listings} 
                                            </p>

                                            {/* Minimalist Arrow */}
                                            <div className="p-2 rounded-full border border-white/30 text-white translate-x-12 transition-all duration-500 group-hover:translate-x-0 group-hover:bg-white group-hover:text-blue-950">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle Top Border Glow */}
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-400/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
