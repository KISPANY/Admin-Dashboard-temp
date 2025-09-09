import { Link, useHistory } from 'react-router-dom';

import { useEffect, useState } from 'react';


const SignUp =() => {
    const [onView, setOnView] = useState('form center flex-column')
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            history.push("/");
        }, 1000);
    }
    

    return (
        <form method='POST' className={onView}>
            <h1 className="form-title">Sign Up</h1>
            <div className="center field-container">
                <div className='flex-column'>
                    <p className="lable">Enter User Name</p>
                    <input type="text" required className="form-input" placeholder=" " />
                </div>
                <div className='flex-column'>
                    <p className="lable">Enter Email</p>
                    <input type="email" required className="form-input" placeholder=" " />
                </div>
                <div className='flex-column'>
                    <p className="lable">Password</p>
                    <input type="password" required className="form-input" placeholder=""/>
                </div>
                <br/>
                <button type="submit" className="form-btn width-100" >Submit</button>
                <br/><br/>
                <div className="flex">
                    <p className="form-change-link">Already have account? 
                        <Link
                            onClick={handleClick} 
                            to="/"  className="underline"><span onClick={ () =>  setOnView('kupoteakulia form center flex-column') }> log in</span>
                         </Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default SignUp;