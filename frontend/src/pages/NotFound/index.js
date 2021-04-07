import React from 'react';
import NotFound from './styled';
import { Link } from 'react-router-dom';

const NOT =  () => {
    return (
        <NotFound> 
            <h1>404 - Not Found !</h1>
            <Link to="/">Voltar para  a Home</Link>
        </NotFound>

    )
}

export default NOT;