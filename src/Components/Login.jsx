import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const [onView, setOnView] = useState('form center flex-column');

    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            history.push("/sign-up");
        }, 1000);
    }

    return (
        <form method="POST" className={onView}>
            <h1 className="form-title">Log in</h1>
            <div className="flex-column field-container">
                <div className="flex-column">
                    <p className="lable">Email</p>
                    <input type="email" required className="form-input" placeholder=" "/>
                </div>
                <div className="flex-column">
                    <p className="lable">Password</p>
                    <input type="password" required className="form-input" placeholder="" />
                </div>
                <p className='remember-me'><br/><span>Remember me </span><input type="checkbox" /></p><br />
                <button type="submit" className="form-btn width-100" >Authenticate</button>
                <p className="form-change-link">Don't have one? 
                    <Link
                        onClick={handleClick} 
                        to="/sign-up"  className="underline"><span onClick={ () =>  setOnView('kupoteakulia form center flex-column') }> create new</span>
                    </Link>
                </p>
            </div>
        </form>
    )
}

export default Login;