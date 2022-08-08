import React from 'react';
import memesdata from '../memesdata';

export default function Meme() {

    const [image, setImage]= React.useState(" ")

    function getMemeImage(){
        const memearray= memesdata.data.memes
        const randomimg = Math.floor(Math.random() * memearray.length)
        setImage(memearray[randomimg].url)
    }

    return(
        <main className='main'>
            <div className='form'>
                <input type="text" placeholder='Above text' className='form--input'/>
                <input type="text" placeholder='Below text' className='form--input'/>
                <button 
                onClick={getMemeImage}
                className='form--button'>
                    Get a new meme image
                </button>
                <img src={image} 
                 className="meme--image"
                />
            </div>
        </main>
    )
    
}