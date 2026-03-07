"use client";

import { ArrowUpRight } from "lucide-react";

const destinations = [
  { name: "UK", listings: "Knowledge Capital", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200" },
  { name: "USA", listings: "Academic Excellence", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200" },
  { name: "UAE", listings: "Innovation Hub", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200" },
  { name: "France", listings: "Cultural Excellence", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200" },
  { name: "Italy", listings: "Heritage & Design", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200" },
  { name: "Germany", listings: "Engineering Powerhouse", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200" },
  { name: "Spain", listings: "Vibrant Learning", image: "https://img.freepik.com/free-photo/dawn-view-toledo_1398-2077.jpg?semt=ais_hybrid&w=740&q=80" },
 { 
  name: "New Zealand", 
  listings: "World-Class Education", 
  image: "https://www.newzealand.com/assets/Tourism-NZ/Auckland/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg" 
},

{ 
  name: "Malta", 
  listings: "Mediterranean Learning Hub", 
  image: "https://media.istockphoto.com/id/1487116739/photo/view-of-saint-julian-malta.jpg?s=612x612&w=0&k=20&c=6oNCD-Da8gJOd9Vhe8q7ahHTWNQr8EVJUqOb2OrgAU0=" 
},

{ 
  name: "Latvia", 
  listings: "Gateway to European Education", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHOsWE62erqzj4Ac3oCTjrTvcJqd-JwiZbA&s" 
},

{ 
  name: "Lithuania", 
  listings: "Affordable European Studies", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MVB62m8CjpKaZJcqfhFcgcFKpJEuDak0kQ&s" 
},

{ 
  name: "Austria", 
  listings: "Tradition Meets Innovation", 
  image: "https://assets.vogue.com/photos/5aa18ec50ec45c7da912b925/master/w_2560%2Cc_limit/00-story-image-non-skiing-guide-to-tyrol-austria.jpg" 
},
  { name: "Canada", listings: "Quality of Life", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200" },
  { name: "Australia", listings: "Global Opportunities", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200" },
];

export default function CountrySlider() {
  return (
    <section className="py-20 bg-white overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <p className="text-blue-950 font-bold tracking-widest mb-3 uppercase text-sm">
          The World is Your Campus
        </p>

        <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#c1972d]">
          Choose the Right Country. 
          <span className="text-blue-950">Choose the Right Future.</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">

        <div className="flex gap-6 w-max slider-track hover:[animation-play-state:paused]">

          {[...destinations, ...destinations].map((item, index) => (

            <div
              key={index}
              className="min-w-75 h-105 rounded-3xl overflow-hidden relative group shrink-0"
            >

              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />

              <div className="absolute bottom-0 p-6 w-full">

                <h3 className="text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center mt-2">

                  <p className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transition">
                    {item.listings}
                  </p>

                  <ArrowUpRight className="text-white" size={20} />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CSS INSIDE COMPONENT */}
      <style>{`
        .slider-track {
          animation: scroll 55s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}