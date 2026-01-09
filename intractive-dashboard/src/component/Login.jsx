import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const {Login} = useContext(AuthContext);
    const [email, setEmail] = useState(" ");

    return (
        <div className=" flex item-center justify-center">
            <div className="bg-white p-3 rounded shadow w-80 ">
                <input 
                className="border w-full p-2 mb-3"
                placeholder="Email"
                onClick={(e) => setEmail(e.target.value)}/>
                <button 
                onClick={ () => Login(email)}
                className="bg-black text-white w-full py-2">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;