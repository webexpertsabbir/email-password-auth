import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [success, setSucces] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handelSubmit = (event) =>{
        setSucces(false);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setSucces(true);
            console.log(user)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handelEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }


    const handelForgetPassword = () =>{
        if(!userEmail){
            alert('please enter your email');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
        .then( () => {
            alert('Password reset email sent, please check your email')
        })
        .catch(error =>{
            console.log(error);
        })
    }
    

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Login</h3>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input onBlur={handelEmailBlur} type="text" name="email" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password"/>
                </div>
                <div>
                    <button className='btn btn-primary'>Login</button>
                </div>
                
            </form>
                {success && <p>Successfully login to the account</p>}
                    <p>New to this website please <Link to='/register'>Register</Link></p>
                <button type="button" onClick={handelForgetPassword} className='btn btn-link'>Forget Password</button>

        </div>
    );
};

export default Login;