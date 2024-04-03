// import SignIn from "@/app/components/sign-in"


// export default function SignUp(){
//     return (

//     <>
//     <SignIn></SignIn>   
//     </>
//     )
// }

import SignIn from "@/app/components/sign-in";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
        </div>
        <SignIn />
        <div className="text-center text-sm text-gray-600">
          By signing up, you agree to our{" "}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
