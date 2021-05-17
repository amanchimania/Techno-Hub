import { useState } from "react";
import "../Login.css"
import { useHistory } from "react-router-dom"
const SignUp = () => {
    const history = useHistory()
    const [signUp, setSignup] = useState({
        fullName: "",
        username: "",
        password: "",
        city: "",
        pincode: "",
        phone: ""
    })
    const handleData = (e) => {
        e.preventDefault();
        // console.log(e.target.value);

        setSignup({
            ...signUp,
            [e.target.name]: e.target.value
        })


    }
    const handleForm = async (e) => {
        e.preventDefault();

        if (signUp.fullName === "" || signUp.username === "" || signUp.password === "" || signUp.city === "" || signUp.pincode === "" || signUp.phone === "") {
            alert("Please fill all the fields");
        } else {
            const data = await fetch("http://localhost:4000/userSignup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: signUp.fullName,
                    username: signUp.username,
                    password: signUp.password,
                    city: signUp.city,
                    pincode: signUp.pincode,
                    phone: signUp.phone
                })
            })
            const result = await data.json()
            console.log(result);
            if (result.status === 400 || !data) {
                alert("User not created")
            } else {
                alert(`User ${signUp.username} created`)
                history.push("/login")
            }
        }
    }
    return (
        <div>
            <br /><br />
            <h2 style={{ textAlign: "center" }}>SignUp Page</h2><br />
            <div className="login">
                <form id="login" method="POST" onSubmit={handleForm}>
                    <label><b>Full Name</b></label>
                    <input type="text" id="Uname" placeholder="FullName" name="fullName" onChange={handleData} />
                    <br /><br />
                    <label><b>User Name</b></label>
                    <input type="text" id="Uname" placeholder="User Name" name="username" onChange={handleData} />
                    <br /><br />
                    <label><b>Password</b></label>
                    <input type="password" id="Uname" placeholder="Password" name="password" onChange={handleData} />
                    <br /><br />
                    <label><b>City</b></label><br />
                    <input type="text" id="Uname" placeholder="City" name="city" onChange={handleData} />

                    <br /><br />
                    <label><b>Pincode</b></label>
                    <input type="text" id="Uname" placeholder="Pincode" name="pincode" onChange={handleData} />


                    <br /><br />
                    <label><b>Phone Number</b></label>
                    <input type="password" id="Uname" placeholder="Phone Number" name="phone" onChange={handleData} />
                    <br /><br />
                    <input type="submit" name="log" id="log" value="Sign Up" />

                </form>
            </div>
        </div>
    )
}
export default SignUp;