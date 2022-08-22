import React, {useRef} from 'react';
import logo from '@logos/logo_yard_sale.svg'
import '@styles/Login.scss';

const Login = () => {
    const form = useRef(null);

    const handleSumit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }
    return(
        <div className="Login">
            <div className="Login-container">
                <img src= {logo} alt="logo" className="logo" />
                {/* <h1 className="title">Create a new password</h1> */}
                {/* <p className="subtitle">Enter a new passwrd for yue account</p> */}
            <form action="/" className="form" ref={form}>
                <label htmlFor="email" className="label">email address</label>
                <input type="text" name="email" placeholder="josebos@example" className="input input-email" />
                <label htmlFor="password" className="label">Password</label>
                <input type="password" name="password" placeholder="*********" className="input input-password" />
                <button
                    type="submit"
                    onClick={handleSumit}
                    className="primary-button login-button" >
                    Log in
                    </button>
                <a href='/'>Forgot my password</a>
            </form>
            <button
            className="secondary-button signup-button">
            Sign up
            </button>
            </div>
        </div>
    );
}

export default Login;