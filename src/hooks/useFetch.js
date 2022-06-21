import { useState } from "react";
import { useEffect } from "react";


const useFetch = () => {

     const [state,setState] = useState({})
     const {url, body } = state

     useEffect(() => {

        fetch(url, { method: "POST",body: body })
        .then(resp => resp.json())
        .then (msg => setState({
            data : msg
        }))


    }, [url]);

     return state

}

export default useFetch;