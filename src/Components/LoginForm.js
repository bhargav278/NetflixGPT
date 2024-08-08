import { useState, useRef } from 'react'
import { checkValidate } from '../utils/FormValidations';
import { auth } from '../utils/firebase';
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';


function LoginForm() {

    const [isLogin, setIsLogin] = useState(true);
    const [validationError, setValidationError] = useState(undefined);


    const dispatch = useDispatch()
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();


    // console.log(auth.currentUser)


    function handleLoginPage() {
        setIsLogin(!isLogin);
    }

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    function handleSubmit(e) {
        // let error = checkValidate(email.current.value, password.current.value, name.current);
        // setValidationError(error);
        // if (error) return;

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                
                
                    

                const email = user.email;
                const displayName = user.displayName;

                dispatch(addUser({ email, displayName }));
                navigate("/browse");
                


                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.

                console.log(error)
                // ...
            });


    }

    return (
        <form className='w-full' onSubmit={(e) => e.preventDefault()}>

            <div className="w-4/12 h-[500px] bg-black mx-auto bg-opacity-80 text-white flex-col items-start pt-10 rounded-md">
                <h3 className="text-3xl font-semibold my-3 ml-16">{(isLogin) ? <>Sign In</> : <>Sign Up</>}</h3>
                {
                    (!isLogin) ? <input className="w-9/12 my-3 p-3 ml-14 rounded-md bg-gray-700 bg-opacity-50 placeholder-white" type="text" placeholder="Full Name" ref={name} /> : <></>
                }
                <input className="w-9/12 my-3 p-3 ml-14 rounded-md bg-gray-700 bg-opacity-50 placeholder-white" type="text" placeholder="Email" ref={email} />
                <input className="w-9/12 my-3 p-3 ml-14 rounded-md bg-gray-700 bg-opacity-50 placeholder-white" type="password" placeholder="Password" ref={password} />
                <button type='submit' className="w-9/12 my-3 bg-red-600 ml-14 p-2 rounded-md font-semibold hover:bg-red-700" >{(isLogin) ? <>Sign In</> : <>Sign Up</>}</button>
                {
                    validationError ? <div className='ml-14 text-red-600 font-semibold tracking-wider text-xl my-3'>{validationError}</div> : <></>
                }
                {
                    (isLogin) ? <>
                        <div className="w-full text-center">Forgot password?</div>
                        <div className="ml-14 flex items-center my-3"><input className="mr-4 border h-4 w-4" type="checkbox" />Remember me</div>
                    </> : <></>
                }
                <div className='text-center opacity-50'>OR</div>
                <button className='w-9/12 my-3 bg-gray-700 ml-14 p-2 rounded-md font-semibold hover:bg-gray-500 hover:text-black'
                    onClick={handleSubmit}
                >{isLogin ? "Sign in" : "Sign up"} with Google</button>
                <div className="tracking-wide cursor-pointer"
                    onClick={handleLoginPage}
                ><span className="ml-14 opacity-70">{(isLogin) ? "New to Netflix? " : "Already have an Account? "}</span><span className="font-semibold  hover:opacity-70">{(isLogin) ? "Sign-up now." : "Sign-in now."} </span></div>
            </div>
        </form>
    )
}

export default LoginForm