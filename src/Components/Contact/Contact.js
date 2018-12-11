import React from 'react'

const contact = () => {

    return <div>
        <h1>Contact Me</h1>
        <form action="https://formspree.io/ghostcopscomics@gmail.com"
            method="POST">
            <h2>Name</h2>
            <input type="text" name="name" required />
            <h2>Email</h2>
            <input type="email" name="_replyto" required />
            <h2>Message</h2>
            <textarea type="text" name="message" required />
            <input className="button" type="submit" value="Send" />
        </form>
    </div>
};

export default contact;