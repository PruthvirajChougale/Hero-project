import {useEffect, useState} from 'react';
const Fetchdata = (url) => {
    const [data, setData]=useState([]);
    const [pending,setPending]=useState(true);
    const [error,setError]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
            else{
                return res.json()
            }
        })
        .then(data=>{
            setPending(false);
            setData(data);
            console.log(data)
            setError(null);
        })
        .catch(err=>{
            setPending(false);
            setError(err.message);
        })
    },[url])

    return (
        {data , pending ,error}
     );
}
 
export default Fetchdata;