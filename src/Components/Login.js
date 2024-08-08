import Footer from "./Footer"
import Header from "./Header"
import LoginForm from "./LoginForm"
import { useSelector } from "react-redux"

function Login() {

    const data = useSelector((store)=>store.user)
    return (
        <>
            <div className="bg-hero-img w-full min-h-svh">
                <Header />
                <LoginForm />
            </div>
            <Footer />
            {console.log("login page : : ", data)}
        </>
    )
}
export default Login