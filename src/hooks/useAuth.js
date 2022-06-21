import { useState } from "react";


const useAuth = (initialState = {}) => { 
    const [auth, setAuth] = useState(initialState);
    const getData = (e) => {
    setAuth({
        ...auth,
        [e.target.name] : e.target.value
        
    })
    };

   return [auth,getData]

}

export default useAuth;