import React from 'react';

import User from '../../component/User';

const authIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Patrick" age={46}/>
    </div>
);

export default authIndexPage;