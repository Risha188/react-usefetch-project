import {useCallback, useEffect, useState} from "react"

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    
    const fetchData = useCallback(async () => {
        try{
            setError(false);
            const response = await fetch(url);
            if(!response.ok) {
                throw new error("Failed to fetch data");
            }
            const result = await response.json();
            setData(result); 
        }catch(err){
            setError(err.message || "Something went wrong");
        }finally{
            setLoading(false);
        }
    }, [url])
    
    useEffect(() => {
        fetchData();
    }, [fetchData])
    
    return {data, loading, error};
}

export default useFetch;
