import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="h-12 flex items-center justify-between px-10 border-b border-gray-100 sticky top-0 z-50 bg-red-50">

            

                <div className="flex items-center gap-1.5">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="flex items-center gap-6">
                    <a href="" className="text-pink-600">Home</a>
                    <a href="" className="hover:text-gray-600">Technologies</a>
                    <a href="" className="hover:text-gray-600">Projects</a>
                    <a href="" className="hover:text-gray-600">About</a>
                    <a href="" className="hover:text-gray-600">Contact</a>
                </div>

                <div className="flex items-center gap-3">
                    <button className="text-[15px] text-black" >Sign In</button>
                    <button className="bg-linear-to-r from-orange-500 to-pink-600 text-white text-[15px] px-3 py-1.5 rounded-full">Sign Up</button>
                </div>

            
        </nav>
    );
};

export default Nav;