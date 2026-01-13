import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {Login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            await Login(email, password);
            navigate("/");
        }catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className=" flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-80 ">
                <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <input type="email"
                placeholder="Email"
                className="border p-2 w-full mb-3 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />

                <input type="password"
                placeholder="Password"
                className="border p-2 w-full mb-3 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}
                className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;