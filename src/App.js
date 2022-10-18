import { getAuth } from 'firebase/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';

import RegisterReactBt from './components/Register/RegisterReactBt';
import app from './firebase/firebase.init';
import Main from './Layout/Main';


const auth = getAuth(app);

const handelRegister = (event) =>{
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log("user Info:", email, password)
}

const handelEmailBlur = (event) =>{
  console.log(event.target.value);
}
const handelPasswordChange = (event) =>{
  console.log(event.target.value);
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBt></RegisterReactBt>
      },
      {
        path: '/register',
        element: <RegisterReactBt></RegisterReactBt>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
    
  }
])


function App() {
  return (
    <div>
        <div>
          {/* <RegisterReactBt></RegisterReactBt> */}
          <RouterProvider router={router}></RouterProvider>
        </div>

    </div>
  );
}

export default App;
