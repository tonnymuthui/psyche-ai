import React, { useState } from "react";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const  toggleForm = () => setIsLogin(!isLogin);

    const handleSubmit = (e) => {
        e.preventDevault();

        console.log(isLogin ? "Loggin in ..." : "Signing you up!...");
    };

    const handleGoogleAuth = () => {
        // ill replece with my google auth logic after I config bakend

        console.log("GOogle auth triggered");

    };




return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 max-w-md w-full text-white animate-fade-in-down transition-all duration-500">
            <h2 className="text-3xl font-bold text-center mb-6">
                {isLogin ? "Welcome Back " : "Create an Account"}
            </h2>

            <button
                onClick={handleGoogleAuth}
                className="w=full py-2 px-4 mb-4 text-center bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
                >
                    <span className="inline-block mr-2">🔒</span>
                    Continue with Google
                </button>

            <div className="relative text-center text-sm mb-4">
                <span className="bg-gray-900 px-2 z-10 relative">or</span>
                <div className="absolute top-1/2 left-0 w-full border-t border-gray-600 z-0"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required

                    />
                )} 
                  <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required

                    />
                      <input
                        type="password"
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required

                    />
                    <button
                        type = "submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 font-semibold" 
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>

            </form>
            <p className="text-sm mt-6 text-center">
                {isLogin ? "Don't have an account ?" : "Already have an account?"}{" "}
                <button onClick={toggleForm} className="text-blue-400 hover:text-blue-600 font-medium ml-1 transition">
                    {isLogin ? "Register" : "Login"}

                </button>
            </p>

        </div>
    </div>
);
};


export default AuthForm; 