import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer : React.FC = () => {
  return (
    <footer className="mx-5 md:mx-15">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <Link to='/'><img src={assets.logo} alt="logo" className="mb-5 w-32 cursor-pointer"/></Link>
                <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quis excepturi similique alias at exercitationem laborum quas natus porro tempora?</p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1234567890</li>
                    <li>example@example.com</li>
                </ul>
            </div>
        </div>
        <div>
            <p className="bg-gray-400 w-full h-[1px]"></p>
            <p className="py-5 text-sm text-center text-gray-500">Copyright 2025@ forever.com - All Rights Reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;