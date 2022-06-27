import React,{useState} from 'react';



const Popup=(props)=>{
    const { showingBody, closePopup } = props;

    return(
        <div className='Popup'>

            <button className='cancelPopup' onClick={closePopup}>X</button>
            <p className='show'>{showingBody}</p>
        </div>
       
    );
};

export default Popup;