"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { set } from "date-fns";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const [name, setName] = useState();
  const [showAbout, setShowAbout] = useState(false);
  const router = useRouter()

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    
    <div className="min-h-screen" style={{ backgroundImage: "url('https://i.pinimg.com/originals/cf/57/7d/cf577d963b77a87e3a8f7f9c67f8ee40.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
        {/* <ul className="flex justify-between items-center px-4 sm:px-3 lg:px-4">
          <li className="cursor-pointer">
            <FaShoppingCart className="inline-block mr-1" />
            SHOPPING CART
          </li>
          <li className="cursor-pointer" onClick={toggleAbout}>
            <FaBars className="inline-block mr-1 " />
            ABOUT US
          </li>
        </ul> */}
  

  <div id="gallery" className="max-w-lg mx-auto rounded-3xl  overflow-hidden  bg-cover p-4" data-carousel="slide">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
        >
          <img src="https://r2.easyimg.io/8pk1jyzme/druk_trade_hub.png" alt="Clothing/Attires" className="max-h-80 w-auto mx-auto" />
          <img src="https://pbs.twimg.com/media/Es0TXknU0AUR43G.jpg" alt="Masks" className="max-h-80 w-auto mx-auto" />
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*7fG5nOcOcjICgx_4.jpg" alt="Containers/Baskets" className="max-h-80 w-auto mx-auto" />
          <img src="https://cdn.bookmytour.bt/cms/uploads/2018/05/colorful-yathra.jpg" alt="Bhutanese Paintings and Sculptures" className="max-h-80 w-auto mx-auto" />
          <img src="https://travelmax.in/wp-content/uploads/2023/10/IMG_5265-e1417202783725.jpg" alt="Cordyceps" className="max-h-80 w-auto mx-auto" />
          <img src="https://previews.agefotostock.com/previewimage/medibigoff/c99357366faae6c15451c987a546f11b/dpa-pga-256212.jpg" alt="Accessories" className="max-h-80 w-auto mx-auto" />
          
        </Carousel>
          </div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
  
              <div className="bg-cyan-200/50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-black ">Clothings/Attires</h2>
                  <img src="https://images.unsplash.com/photo-1599025740232-710fba3365b9?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Clothings/Attires" className="mt-4 rounded-lg" />
                  <p className="mt-2 text-indigo-900 text-sm p-3 text-bold">Discover the varieties of authentic traditional handwoven attires.</p>
                  <Link href="/pages/categories/3" className=" text-black bg-green-400  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-block">
                    Discover More
                  </Link>
                </div>
              </div>
              <div className="bg-cyan-200/50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-black">Masks</h2>
                  <img src="https://img.atlasobscura.com/1qOkVZseF046KBe6nKZysqz8iY8XKiF9Va7yh0L_1Yo/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy8xNTA0YzFiZjJk/ZmM3ZTYzZmZfR2V0/dHlJbWFnZXMtMTEz/NzQ2NjMyIHByb21v/Y3JvcC5qcGVn.jpg" alt="Masks" className="mt-4 rounded-lg" />
                  <p className="mt-2 text-indigo-900 text-sm p-3">Explore a variety of wooden masks.</p>
                  <Link href="/pages/categories/1" className="text-black bg-green-400 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-block">
                    Discover More
                  </Link>
                </div>
              </div>
              <div className="bg-cyan-200/50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-black">Containers/Baskets</h2>
                  <img src="https://productinbhutan.files.wordpress.com/2016/08/bamboo-product.jpg?w=720&h=481&crop=1" alt="Containers/Baskets" className="mt-4 rounded-lg" />
                  <p className="mt-2 text-indigo-900 text-sm p-3">Browse through our collection of containers and baskets totally made of natural resources.</p>
                  <Link href="/pages/categories/4" className="text-black bg-green-400 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-block">
                    Discover More
                  </Link>
                </div>
              </div>
              <div className="bg-cyan-200/50 overflow-hidden shadow rounded-lg">
                <div className="p-6 mt-4">
                  <h2 className="text-lg font-semibold text-black">Bhutanese Paintings and Sculptures</h2>
                  <img src="https://i0.wp.com/tasteofbhutan.com/wp-content/uploads/2023/04/Lhazo-the-Art-of-Painting-in-Bhutan-3.jpg?fit=1024%2C683&ssl=1" alt="Bhutanese Paintings and Sculptures" className="mt-4 rounded-lg" />
                  <p className="mt-2 text-indigo-900 text-sm p-3">Explore the rich culture and tradition through intricate paintings and sculptures.</p>
                  <Link href="/pages/categories/8" className="text-black bg-green-400 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-block">
                    Discover More
                  </Link>
                </div>
              </div>
              <div className="bg-cyan-200/50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-black">Cordyceps</h2>
                  <img src="https://media.licdn.com/dms/image/C5622AQHotnxrKgnifw/feedshare-shrink_2048_1536/0/1608656161688?e=2147483647&v=beta&t=FygAmIZjGvLjy_SDx7Fy4a3yKihMmyfNlKZ__oKwsWw" alt="Cordyceps" className="mt-4 rounded-lg" />
                  <p className="mt-2 text-indigo-900 text-sm p-3">Discover the health benefits of cordyceps and its traditional uses.</p>
                  <Link href="/pages/categories/6" className="text-black bg-green-400 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-block">
                    Discover More
                  </Link>
                </div>
              </div>
              <div className="bg-cyan-200/50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-black">Accessories</h2>
                  <img src="https://previews.agefotostock.com/previewimage/medibigoff/c99357366faae6c15451c987a546f11b/dpa-pga-256212.jpg" alt="Accessories" className="mt-4 rounded-lg" />
                  <p className="mt-2 text-indigo-900 text-sm p-3">Explore our collection of unique accessories.</p>
                  <Link href="/pages/categories/7" className="text-black bg-green-400 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-block">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAbout && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-sky-200 p-8 rounded-lg w-2/4 h-2/4 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-black font-serif">About Us</h2>
            <p className="text-gray-800 ">
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
    </div>
  );
}

