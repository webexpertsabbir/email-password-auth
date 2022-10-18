import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';


const auth = getAuth(app)

const RegisterReactBt = () => {
   
    const [passwordError, setPasswordError] = useState('');
    const [success, setSucces] = useState('');



    const handelRegister = (event) =>{
        event.preventDefault();
        setSucces(false);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide a to uppercase');
            return;
        }
        if(password.length < 6){
            setPasswordError('Please should be a last 6 carecter')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setSucces(true)
            form.reset();
            varifyemail();
            updateUserName(name);
        })
        .catch(error =>{
            console.log(error);
            setPasswordError(error.message)
        })
    }

    const varifyemail = () =>{
        sendEmailVerification(auth.currentUser)
        .then( () =>{
            alert('Please check your email and verify')
        })
    }

    const updateUserName = (name) =>{
        updateProfile(auth.currentUser,{
            displayName: name
        })
        .then(() =>{
            console.log('dispaly name updated')
        })
        .catch(error => console.log(error));
    }



    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register</h3>
             <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>You Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name " required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email " required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Creted success</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? Please <Link to='/login'>Login</Link></p>

        </div>
    );
};

export default RegisterReactBt;