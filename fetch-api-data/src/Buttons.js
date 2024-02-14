import './Button.css'
import {useState, useEffect} from 'react';

const Buttons = () =>{
    const [clicked, setClicked] = useState('');
    const [data, setData] = useState([]);

    const handleClick = (value) => {
        setClicked(value);
    };
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/${clicked}`);
                if(!response.ok) throw Error ('Did not recieve expected data');
                const list = await response.json();
                setData(list);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [clicked])
    
    return(
        <div>
            <div className='container' >
                <button className='button' onClick={() => handleClick('users')}>Users</button>
                <button className='button' onClick={() => handleClick('posts')}>Posts</button>                
                <button className='button' onClick={() => handleClick('comments')}>Comments</button>
            </div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{JSON.stringify(item)}</li> 
                ))}
            </ul>
        </div>
    )
}

export default Buttons;