import "../Login.css";
import { useState } from "react"
import { useHistory } from 'react-router-dom'
const Login = () => {
    const history = useHistory()
    // const [loginData, setLoginData] = useState({
    //     userName: "",
    //     password: ""
    // })
    // const handleChange = (e) => {
    //     setLoginData({
    //         ...loginData,
    //         [e.target.name]: e.target.value
    //     })
    //     console.log(loginData);
    // }
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            alert("Please fill all the feilds")
        } else {
            const data = await fetch("http://localhost:4000/userLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const result = await data.json()
            console.log(result);
            history.push("/dashboard")
        }
    }

    return (
        <div>
            <br /><br />
            <h2 style={{ textAlign: "center" }}>Login Page</h2><br />
            <div className="login">
                <form id="login" method="POST" >
                    <label><b>User Name
        </b>
                    </label>
                    <input type="text" name="userName" id="Uname" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    <br /><br />
                    <label><b>Password
        </b>
                    </label>
                    <input type="Password" name="password" id="Pass" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <br /><br />
                    <input type="button" value="login" name="log" id="log" onClick={loginUser} />
                    <br /><br />
                    <br /><br />
                </form>
            </div>
        </div>
    )
}
export default Login;