import "../Login.css"
const Login = () => {
    return (
        <div>
            <br /><br />
            <h2 style={{ textAlign: "center" }}>Login Page</h2><br />
            <div className="login">
                <form id="login" method="get" >
                    <label><b>User Name
        </b>
                    </label>
                    <input type="text" name="Uname" id="Uname" placeholder="Username" />
                    <br /><br />
                    <label><b>Password
        </b>
                    </label>
                    <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                    <br /><br />
                    <input type="button" name="log" id="log" value="Log In" />
                    <br /><br />
                    <input type="checkbox" id="check" />
                    <span>Remember me</span>
                    <br /><br />
                    <a href="#" >Forgot Password</a>
                </form>
            </div>
        </div>
    )
}
export default Login;