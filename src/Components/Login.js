import Footer from "./Footer"
import Header from "./Header"
import LoginForm from "./LoginForm"

function Login() {
    return (
        <>
            <div className="bg-hero-img w-full min-h-screen">
                <Header />
                <LoginForm />
            </div>
            <Footer />
        </>
    )
}
export default Login