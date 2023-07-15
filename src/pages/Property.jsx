import React from 'react';
import { useParams } from 'react-router-dom';

import Title from '../components/Title'

import propertyList from '../propertyList';

const Property = () => {

    const { id } = useParams();
    const property = propertyList[id];

    console.log(property)

    const { address, image } = property;


    return(
        <>
            <Title pageName="Individual Property Page"/>

            <img src={image} alt={`property ${id}`} style={{width: '800px'}} />
            <p>{address}</p>

        </>
    )
}

export default Property;