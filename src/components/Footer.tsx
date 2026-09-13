import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (

        <div className=" grid-rows-4  px-10 gap-10">

            <div className=" row-span-3 grid grid-cols-5 gap-4 py-10">
                <div className="col-span-2">
                    <img src={Logo} alt="Logo" />
                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p> <br/>
                    

                    <div className="flex space-x-3 ">
                        <a href="https://github.com/" className="hover:text-red-600">GitHub</a>
                        <a href="https://x.com/" className="hover:text-red-600">Twitter</a>
                        <a href="https://www.linkedin.com/" className="hover:text-red-600">LinkedIn</a>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col">
                    <a href="" className="hover:text-red-600">PRODUCT</a>
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">Home</a>
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">Technologies</a>
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">Projects</a>
                </div>
                <div className="col-span-1 flex flex-col">
                    <a href="" className="hover:text-red-600">COMPANY</a>
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">About</a>
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">Contact</a>
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">Careers</a>
                </div>
                <div className="col-span-1 flex flex-col">
                    <a href="" className="hover:text-red-600 ">LEGAL</a>

                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500 ">Privacy Policy</a>

                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500 ">Terms of Service</a>
                    <br/>
                </div>
            </div>

            <div className="row-span-1 flex justify-between">
                <div>
                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                </div>

                <div className=" space-x-2">
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">Privacy</a>
                    <a href="" className="hover:text-red-600 mt-3 flex-1 text-sm leading-6 text-gray-500">Terms</a>
                </div>
            </div>

        </div>

    );
};

export default Footer;