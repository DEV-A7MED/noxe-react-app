import { useContext } from "react";
import { Offline, Online } from 'react-detect-offline';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Movies from "./Components/Movies/Movies";
import People from "./Components/People/People";
import Profile from "./Components/Profile/Profile";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Register from "./Components/Register/Register";
import Tv from "./Components/Tvshow/Tv";
import { AuthContext } from './Context/AuthStore';



function App() {

let {userData,setUserData,saveUserData}=useContext(AuthContext)
  let routers = createHashRouter([
    {
      path: '/', element: <Layout userData={userData} setUserData={setUserData}/>, children: [
        { index: true, element:<ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'movies', element: <ProtectedRoute userData={userData}><Movies /></ProtectedRoute>  },
        { path: 'tvshow', element: <ProtectedRoute userData={userData}><Tv /></ProtectedRoute>  },
        { path: 'people', element: <ProtectedRoute userData={userData}><People /></ProtectedRoute>  },
        { path: 'profile', element:<ProtectedRoute userData={userData}><Profile  userData={userData}/></ProtectedRoute>   },
        { path: 'itemdetails/:id/:media_type', element: <ProtectedRoute userData={userData}><ItemDetails /></ProtectedRoute>  },
        
        { path:'register', element: <Register />  },
        {path:'login',element:<Login saveUserData={saveUserData}/>},
        { path: '*', element: <Error /> }
  
      ]
    }
  ])
  return (
    <>
      <div>
        <RouterProvider router={routers} />
          
        
      </div>
    </>
  );
}

export default App;
