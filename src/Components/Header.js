import logo from '../utils/Netflix_Logo_PMS.png'
function Header() {
    return (
        <div className="w-full py-3 px-14 bg-gradient-to-b from-black">
            <img className='w-52' src={logo} alt="logo"/>
        </div>
    )
}

export default Header