import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum maiores nam cum aliquam nulla, ad voluptates temporibus ut excepturi cupiditate provident veniam accusamus officia maxime. Hic minima vero quasi nulla harum debitis ea libero laborum repellendus aliquid, quos nemo laudantium provident sunt beatae numquam nam maxime sequi facere nostrum.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;