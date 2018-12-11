import React from 'react'
import page1 from '../../images/page1.jpg';
import page2 from '../../images/page2.jpg';
import page3 from '../../images/page3.jpg';
import page4 from '../../images/page4.jpg';
import page5 from '../../images/page5.jpg';

const archive = () => {
    return <div>
        <h1>Archive</h1>
            <h2>Chapter 1</h2>
            <a href="/static/media/page1.f3371c83.jpg"><img className="thumbnail" src={page1} /></a>
            <a href="/static/media/page2.66504aff.jpg"><img className="thumbnail" src={page2} /></a>
            <a href="/static/media/page3.9198e1c1.jpg"><img className="thumbnail" src={page3} /></a>
            <a href="/static/media/page4.8319d899.jpg"><img className="thumbnail" src={page4} /></a>
            <a href="/static/media/page5.9e229ffb.jpg"><img className="thumbnail" src={page5} /></a>
            <p><strong>More to come soon! Stay tuned!</strong></p>
    </div>
};

export default archive;