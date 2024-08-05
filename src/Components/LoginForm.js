function LoginForm() {
    return (
        <div className="w-full">
            <div className="w-4/12 h-[500px] bg-black mx-auto bg-opacity-80 text-white flex-col items-start pt-10 rounded-md">
                <h3 className="text-3xl font-semibold my-3 ml-16">Sign In</h3>
                <input className="w-9/12 my-3 p-3 ml-14 rounded-md bg-gray-700 bg-opacity-50 placeholder-white" type="email" placeholder="Email" />
                <input className="w-9/12 my-3 p-3 ml-14 rounded-md bg-gray-700 bg-opacity-50 placeholder-white" type="password" placeholder="Password"/>
                <button className="w-9/12 my-3 bg-red-600 ml-14 p-2 rounded-md font-semibold">Sign in</button>
                <div className="w-full text-center opacity-50">OR</div>
                <button className="w-9/12 my-3 bg-white bg-opacity-20 ml-14 p-2 rounded-md font-semibold">Use a sign-in code</button>
                <div className="w-full text-center">Forgot password?</div>
                <div className="ml-14 flex items-center my-3"><input className="mr-4 border h-4 w-4" type="checkbox" />Remember me</div>
                <div className="tracking-wide"><span className="ml-14 opacity-70">New to Netflix?</span><span className="font-semibold"> Sign up now.</span></div>
            </div>
        </div>
    )
}

export default LoginForm