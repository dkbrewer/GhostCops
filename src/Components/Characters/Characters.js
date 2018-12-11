import React from 'react'
import simon from '../../images/simon.jpg';
import shawn from '../../images/shawn.jpg';
import obadiah from '../../images/obadiah.jpg';
import gideon from '../../images/gideon.jpg';
import margie from '../../images/margie.jpg';
import clara from '../../images/clara.jpg';
import jack from '../../images/jack.jpg';

const characters = () => {
    return <div>
        <h1>Characters</h1>
        <section id="sec1">
            <div className="leftcol">
                <h2>Simon Shoal</h2>
                <img className="character" src={simon} />
            </div>
            <div className="rightcol">
                <p>A bright albeit nervous young runaway who would like nothing more than to live out
                    his days being left alone. Unfortunately for him, a kids gotta to eat, and that
                means a kids got to work, and that means associating with people, living and dead.</p>
            </div>
        </section>
        <section id="sec2">
            <div className="leftcol">
                <h2>Shawn McMullin</h2>
                <img className="character" src={shawn} />
            </div>
            <div className="rightcol">
                <p>Cheerful, easy going goof who has a strong passion for helping his ghostly clientele.
                What he lacks in smarts he makes up for with heart and an array of ghostly powers.</p>
            </div>
        </section>
        <section id="sec3">
            <div className="leftcol">
                <h2>Obadiah</h2>
                <img className="character" src={obadiah} />
            </div>
            <div className="rightcol">
                <p>The grumpy old ghost of an innkeeper. He wants nothing more than to send Simon packing,
                which causes him to butt heads with some of the other ghosts.</p>
            </div>
        </section>
        <section id="sec4">
            <div className="leftcol">
                <h2>Gideon</h2>
                <img className="character" src={gideon} />
            </div>
            <div className="rightcol">
                <p>Eager to please, anxious and depressed, his bouts of sorrow usually end with him hanging himself. Again.</p>
            </div>
        </section>
        <section id="sec5">
            <div className="leftcol">
                <h2>Margie</h2>
                <img className="character" src={margie} />
            </div>
            <div className="rightcol">
                <p>Strong-willed but kind hearted, she has nothing more than a desire to help Simon in any way
                she can. Has never left the ‘80’s, and has the legwarmers to prove it.</p>
            </div>
        </section>
        <section id="sec6">
            <div className="leftcol">
                <h2>Clara</h2>
                <img className="character" src={clara} />
            </div>
            <div className="rightcol">
                <p>A helpful, sweet ghost who has a major crush on our resident runaway. Loves cooking, cleaning,
                and crocheting—despite only having perfected two of these skills. The other? Not so much.</p>
            </div>
        </section>
        <section id="sec7">
            <div className="leftcol">
                <h2>Jack</h2>
                <img className="character" src={jack} />
            </div>
            <div className="rightcol">
                <p>Rosewood’s oldest and silliest ghost, who loves nothing more than pulling pranks on anyone (living or dead).
                He has a powerful aura, but very little brain.</p>
            </div>
        </section>
    </div>
};

export default characters;