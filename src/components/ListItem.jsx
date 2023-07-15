import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({id, propertyAddress, propertyImage}) => {

    return(
        <>
         <div key={id}>
            <Link to={`/main/${id}`}>
                <p>{propertyAddress}</p>
            </Link>
            <img src={propertyImage} alt={`home ${id}`} style={{ width: '300px'}} />
        </div>
        </>
    )
}

export default ListItem;