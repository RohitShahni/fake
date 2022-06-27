import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from './Popup';



const Apppp = () => {
    const [data2, setData] = useState([]);
    const [showingBody, setShowingBody] = useState('');
    useEffect(() => {
        async function getData() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(res.data);
        }
        getData();
    })

    return (

        <div className="container">
            {
                data2.map(oneData => (
                    <div className="oneCardConatine" onClick={() => setShowingBody(oneData.body)}>
                        <h1>
                            user Id: {oneData.userId}
                        </h1>
                        <h3>
                            Id: {oneData.id}
                        </h3>
                        <p>
                            title: {oneData.title}
                        </p>
                    </div>
                    
                ))
                
            }
            {
                showingBody &&
                <Popup showingBody={showingBody} closePopup={() => setShowingBody('')}/>
            }
        
          
        </div>

    );
};




export default Apppp;
