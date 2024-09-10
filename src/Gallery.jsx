import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import doctor from "./Images/doc.jpg"
import IC6 from "./Images/ic6.jpg"
import IC5 from "./Images/ic5.jpg"

function Gallery() {
  return (
    
     <div className="grid grid-cols-8 grid-rows-6 gap-4 mt-20">
    <div className="col-span-2 row-span-5 rounded-lg shadow-lg bg-white p-6">
          <h3 className="text-2xl font-semibold mb-4">Self-Reflection</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </p>

    </div>
    <div className="col-span-4 row-span-3 col-start-3 rounded-lg shadow-lg bg-white p-6"> 
      {/* <div className="col-span-2 row-span-1 rounded-lg shadow-lg bg-white p-6 flex"> */}
          <img src= {IC6}
          
            className="w-auto h-auto mr-4"
          />
          <div>
           
          
        </div></div>
    <div className="col-span-2 row-span-3 col-start-7 rounded-lg shadow-lg bg-white p-6"> 
      <h3 className="text-xl font-semibold mb-4">Self-Reflection</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
          </p>
</div>
    <div className="col-span-2 row-span-3 col-start-1 rounded-lg shadow-lg bg-white p-6 row-start-6">
    <h3 className="text-xl font-semibold mb-4">Self-Reflection</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
          </p>
    </div>
    <div className="col-span-2 row-span-5 col-start-3 row-start-4 rounded-lg shadow-lg bg-white p-6">
    <h3 className="text-xl font-semibold mb-4">Self-Reflection</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
          </p>
    </div>
    <div className="col-span-4 row-span-3 col-start-5 row-start-4 rounded-lg shadow-lg bg-white p-6">
    <img src= {IC5}
          
          className="w-auto h-auto mr-4"
        />
    </div>
    <div className="col-span-2 row-span-2 col-start-5 row-start-7 rounded-lg shadow-lg bg-white p-6">
    <h3 className="text-xl font-semibold mb-4">Self-Reflection</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
          </p>
    </div>
    <div className="col-span-2 row-span-2 col-start-7 row-start-7 rounded-lg shadow-lg bg-white p-6">
    <h3 className="text-xl font-semibold mb-4">Self-Reflection</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
          </p>
    </div>
</div>
  );
}

export default Gallery;
