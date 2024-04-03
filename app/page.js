
"use client";

// import React, { useState } from "react";
// import Head from "next/head";
// import LoginForm from "./components/login-form";

// const Home = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = (userData) => {
//     setLoading(true);
//     setTimeout(() => {
//       if (!userData.email || !userData.password) {
//         setError("Email and password are required");
//         setLoading(false);
//         return;
//       }
//       if (userData.email === "test@test.com" && userData.password === "password") {
//         setUser(userData);
//         setError("");
//       } else {
//         setError("Invalid email or password");
//       }
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="bg-image" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2019/11/15/13/03/bhutan-4628373_1280.jpg')`, backgroundSize: "cover", minHeight: "100vh", backgroundColor: "#cbd5e0", backgroundPosition: "center" }}>
//       <Head>
//         <title>Druk Trade Hub - Home</title>
//         <meta name="description" content="An online marketplace for local products" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="flex flex-col items-center justify-center h-screen">
//         <div className="mt-10">
//           {error && <p className="text-black text-2xl font-italic flex flex-col mt-2 pd-3">{error}</p>}
//         </div>
    
//         <div className="mt-30 md:w-1/3 md:flex md:mx-auto flex flex-col items-center rounded-3xl p-8 bg-gray-100 text-black bg-gray-500/40 border:ring-black">
//           {!user ? (
//             <>
//               <div className="mb-4">
//                 <LoginForm onLogin={handleLogin} />
//               </div>
//               {loading && <img src="/Search" alt="Loading..." />}
//             </>
//           ) : (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
//               <strong className="font-bold">Success!</strong>
//               <span className="block sm:inline"> Welcome, {user.email}!</span>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;



"use client";

import React, { useState } from "react";
import Head from "next/head";
import LoginForm from "./components/login-form";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (userData) => {
    setLoading(true);
    setTimeout(() => {
      if (!userData.email || !userData.password) {
        setError("Email and password are required");
        setLoading(false);
        return;
      }
      if (userData.email === "test@test.com" && userData.password === "password") {
        setUser(userData);
        setError("");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-image" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2019/11/15/13/03/bhutan-4628373_1280.jpg')`, backgroundSize: "cover", minHeight: "100vh", backgroundColor: "#cbd5e0", backgroundPosition: "center" }}>
      <Head>
        <title>DRUK TRADE HUB - Home</title>
        <meta name="description" content="An online marketplace for local products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="mt-10">
          {error && <p className="text-black text-2xl font-italic flex flex-col mt-2 pd-3">{error}</p>}
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-stone-600 ">DRUK TRADE HUB</h1> {/* Page title added here */}
    
        <div className="md:w-1/3 md:flex md:mx-auto flex flex-col items-center rounded-3xl p-8 bg-gray-100 text-black bg-gray-500/40 border:ring-black">
          {!user ? (
            <>
              <div className="mb-4">
                <LoginForm onLogin={handleLogin} />
              </div>
              {loading && <img src="/Search" alt="Loading..." />}
            </>
          ) : (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Welcome, {user.email}!</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
