
// "use client";
// export default function Navbar() {
//     return (
//         <nav class="bg-cyan-700">
//             <div class="container-fluid">
//             <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a class="navbar-brand" href="#">
//                     <img src="https://flagmakers.co.uk/media/yabjzevh/flag_of_bhutan_alternate.png?anchor=center&mode=crop&width=1530&height=0&rnd=132442151882370000" alt="" width="35" height="27" class="d-inline-block align-text-top"/>
//                     <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex justify-center text-center">Druk Trade Hub</span>
                
//                 </a>
//                 </div>
//             </div>
//         </nav>
//     );
// }


"use client";

// import { FaShoppingCart, FaBars } from 'react-icons/fa';
// import React, { useState } from "react";
// export default function Navbar() {

//     const [showAbout, setShowAbout] = useState(false);

//     const toggleAbout = () => {
//         setShowAbout(!showAbout);
//       };
    
//     return (
//         <nav class="bg-cyan-500/60">
            
//             <div class="container-fluid">
//                 <div class="max-w-screen-xl flex items-center justify-center mx-auto p-4">

//                 <ul className="flex justify-between items-center px-4 sm:px-3 lg:px-4">
//           <li className="cursor-pointer">
//             <FaShoppingCart className="inline-block mr-1" />
//             SHOPPING CART
//           </li>
//           <li className="cursor-pointer" onClick={toggleAbout}>
//             <FaBars className="inline-block mr-1 " />
//             ABOUT US
//           </li>
//         </ul>
//                     <a class="navbar-brand flex items-center" href="#">
//                         <img src="https://flagmakers.co.uk/media/yabjzevh/flag_of_bhutan_alternate.png?anchor=center&mode=crop&width=1530&height=0&rnd=132442151882370000" alt="" width="35" height="27" class="d-inline-block align-text-top"/>
//                         <span class="text-2xl font-semibold ml-2 whitespace-nowrap dark:text-white font-serif">Druk Trade Hub</span>

//                         {showAbout && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
//           <div className="bg-sky-200 p-8 rounded-lg w-2/4 h-2/4 overflow-y-auto">
//             <h2 className="text-2xl font-bold mb-4 text-black font-serif">About Us</h2>
//             <p className="text-gray-800 ">
//               "Druk Trade Hub is not just an online marketplace; it's a gateway to the enchanting
//               world of Bhutanese craftsmanship. Here, artisans weave dreams into fabrics, 
//               sculptors breathe life into wood, and every product becomes a testament to Bhutan's timeless heritage."
//             </p>
//             <p className="text-blue-800 mt-4 font-bold hover:underline">
//               For more Information: 
//               <br />
//               Contact us : 975 77792900
//               <br />
//               Email : Druktrade@gmail.com
//               <br />
//               Hours : open 24 hours
//             </p>
//             <button className="mt-4 bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAbout}>
//               Close
//             </button>
//           </div>
//         </div>
        
//       )}
//     </div>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { FaShoppingCart, FaBars } from 'react-icons/fa';

// export default function Navbar() {

//     const [showAbout, setShowAbout] = useState(false);

//     const toggleAbout = () => {
//         setShowAbout(!showAbout);
//     };
    
//     return (
//         <nav className="bg-cyan-500/60">
//             <div className="container mx-auto p-4 flex items-center justify-between">
//             <a class="navbar-brand flex items-center" href="#">
//                       <img src="https://flagmakers.co.uk/media/yabjzevh/flag_of_bhutan_alternate.png?anchor=center&mode=crop&width=1530&height=0&rnd=132442151882370000" alt="" width="35" height="27" class="d-inline-block align-text-top"/>
//                         <span class="text-2xl font-semibold ml-2 whitespace-nowrap dark:text-white font-serif">Druk Trade Hub</span>
                

//                 <div className="flex items-center">
                    
//                     <FaShoppingCart className="mr-2" />
//                     <span className="text-white text-lg">SHOPPING CART</span>
//                 </div>
//                 <div className="hidden md:block">
//                     <button className="text-white" onClick={toggleAbout}>
//                         <FaBars className="inline-block mr-1" />
//                         ABOUT US
//                     </button>
//                 </div>
//             </div>
//             {showAbout && (
//                 <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
//                     <div className="bg-sky-200 p-8 rounded-lg w-2/4 h-2/4 overflow-y-auto">
//                         <h2 className="text-2xl font-bold mb-4 text-black font-serif">About Us</h2>
//                         <p className="text-gray-800">
//                             "Druk Trade Hub is not just an online marketplace; it's a gateway to the enchanting
//                             world of Bhutanese craftsmanship. Here, artisans weave dreams into fabrics, 
//                             sculptors breathe life into wood, and every product becomes a testament to Bhutan's timeless heritage."
//                         </p>
//                         <p className="text-blue-800 mt-4 font-bold hover:underline">
//                             For more Information: 
//                             <br />
//                             Contact us : 975 77792900
//                             <br />
//                             Email : Druktrade@gmail.com
//                             <br />
//                             Hours : open 24 hours
//                         </p>
//                         <button className="mt-4 bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAbout}>
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }


// "use client";

// import React, { useState } from "react";
// import { FaShoppingCart, FaBars } from 'react-icons/fa';

// export default function Navbar() {

//     const [showAbout, setShowAbout] = useState(false);

//     const toggleAbout = () => {
//         setShowAbout(!showAbout);
//     };
    
//     return (
//         <nav className="bg-cyan-500/60">
//             <div className="container mx-auto p-4 flex items-center justify-between">
//                 <div className="flex items-center">
//                     <div className="hidden md:flex items-center">
//                         <FaShoppingCart className="mr-2" />
//                         <span className="text-white text-lg">SHOPPING CART</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center flex-grow">
//                     <a className="navbar-brand flex items-center" href="#">
//                         <img src="https://flagmakers.co.uk/media/yabjzevh/flag_of_bhutan_alternate.png?anchor=center&mode=crop&width=1530&height=0&rnd=132442151882370000" alt="" width="35" height="27" className="d-inline-block align-text-top"/>
//                         <span className="text-2xl font-semibold ml-2 whitespace-nowrap dark:text-white font-serif">Druk Trade Hub</span>
//                     </a>
//                 </div>
//                 <div className="hidden md:block">
//                     <button className="text-white" onClick={toggleAbout}>
//                         <FaBars className="inline-block mr-1" />
//                         ABOUT US
//                     </button>
//                 </div>
//             </div>
//             {showAbout && (
//                 <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
//                     <div className="bg-sky-200 p-8 rounded-lg w-2/4 h-2/4 overflow-y-auto">
//                         <h2 className="text-2xl font-bold mb-4 text-black font-serif">About Us</h2>
//                         <p className="text-gray-800">
//                             "Druk Trade Hub is not just an online marketplace; it's a gateway to the enchanting
//                             world of Bhutanese craftsmanship. Here, artisans weave dreams into fabrics, 
//                             sculptors breathe life into wood, and every product becomes a testament to Bhutan's timeless heritage."
//                         </p>
//                         <p className="text-blue-800 mt-4 font-bold hover:underline">
//                             For more Information: 
//                             <br />
//                             Contact us : 975 77792900
//                             <br />
//                             Email : Druktrade@gmail.com
//                             <br />
//                             Hours : open 24 hours
//                         </p>
//                         <button className="mt-4 bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAbout}>
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }


"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
export default function Navbar() {

    const [showAbout, setShowAbout] = useState(false);

    const toggleAbout = () => {
        setShowAbout(!showAbout);
    };
    
    return (
        <nav className="bg-cyan-200/80">
            <div className="container mx-auto p-4 flex items-center justify-between">
                
                <div className="flex items-center justify-center flex-grow">
                    <a className="navbar-brand flex items-center" href="#">
                        <img src="https://flagmakers.co.uk/media/yabjzevh/flag_of_bhutan_alternate.png?anchor=center&mode=crop&width=1530&height=0&rnd=132442151882370000" alt="" width="35" height="27" className="d-inline-block align-text-top"/>
                        <span className="text-2xl font-semibold ml-2 whitespace-nowrap dark:text-black font-serif">Druk Trade Hub</span>
                    </a>
                </div>
                <div className="hidden md:block">
                    <button className="text-black" onClick={toggleAbout}>
                        <FaBars className="inline-block mr-1" />
                        ABOUT US
                    </button>
                </div>
            </div>
            {showAbout && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
                    <div className="bg-sky-200 p-8 rounded-lg w-2/4 h-2/4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4 text-black font-serif">About Us</h2>
                        <p className="text-gray-800">
                            "Druk Trade Hub is not just an online marketplace; it's a gateway to the enchanting
                            world of Bhutanese craftsmanship. Here, artisans weave dreams into fabrics, 
                            sculptors breathe life into wood, and every product becomes a testament to Bhutan's timeless heritage."
                        </p>
                        <p className="text-blue-800 mt-4 font-bold hover:underline">
                            For more Information: 
                            <br />
                            Contact us : 975 77792900
                            <br />
                            Email : Druktrade@gmail.com
                            <br />
                            Hours : open 24 hours
                        </p>
                        <button className="mt-4 bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAbout}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
