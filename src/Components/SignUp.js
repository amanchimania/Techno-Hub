import "../Login.css"
const SignUp = () => {
    return (
        <div>
            <br /><br />
            <h2 style={{ textAlign: "center" }}>SignUp Page</h2><br />
            <div className="login">
                <form id="login" method="get" >
                    <label><b>User Name</b>
                    </label>
                    <input type="text" name="Uname" id="Uname" placeholder="Username" />
                    <br /><br />
                    <label><b>Password</b>
                    </label>
                    <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                    <br /><br />
                    <label><b>Confirm Password</b>
                    </label>
                    <input type="Password" name="confirmPass" id="Pass" placeholder="Confirm Password" />
                    <br /><br />
                    <input type="button" name="log" id="log" value="Sign Up" />
                    <br /><br />
                    <input type="checkbox" id="check" />
                    <span>Remember me</span>
                    <br /><br />
                </form>
            </div>
        </div>
    )
}
export default SignUp;