import React from 'react';
import propertyList from '../propertyList';

import Title from '../components/Title';

const AllProperties = () => {

    return(
        <>
            <Title pageName="All Available Properties" />

            {Object.entries(propertyList).map(([id, {address, image}]) => (
                <li key={id}>
                    <p>{address}</p>
                    <img src={image} alt={`home ${id}`} />
                </li>
            ))}
        </>
    )
}

export default AllProperties;