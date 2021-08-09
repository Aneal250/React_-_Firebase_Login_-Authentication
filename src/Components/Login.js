import React from 'react'

function Login(props) {

        const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, passwordError, emailError,} = props  

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text" 
                autoFocus
                required
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type="password" 
                autoFocus
                required
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                            </p>
                        </>
                    ):
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    }               
                </div>

            </div>

        </section>
    )
}

export default Login
