import React from 'react'
import Taryn from '../../images/Taryn.jpg';

const about = () => {
    return <div>
        <h1>About this Webcomic</h1>
            <img id="self" src={Taryn} />
            <h2>The Author</h2>
            <p>My name is Taryn, writer and artist. I received a Bachelor’s Degree in English, and am currently
            pursuing my childhood dream of creating and illustrating my own stories.</p>
            <p>You can follow me here(…) or (…) or you can check out my Etsy Shop, if you’re looking for something
            different but in a similar style.</p>
            <h2>The Webcomic</h2>
            <p>Ghosts Cops is a supernatural comedy adventure about runaway Simon Shoal, the newest recruit for the
            Supernatural Police Department, a group dedicated to solving ghostly cases.</p>
            <p>Recommended for ages 10+ for occasional violence, slapstick, and language that looks like this: #$#$@%!</p>
    </div>
};

export default about;