import React from 'react';
import { Outlet } from 'react-router-dom';
import propertyList from '../propertyList';

import Title from '../components/Title';
import ListItem from '../components/ListItem';

const AllProperties = () => {

    return(
        <>
            <Outlet />
            <Title pageName="All Available Properties" />
    
            {Object.entries(propertyList).map(([id, {address, image}]) => (
                <ListItem 
                    id={id}
                    propertyAddress={address}
                    propertyImage={image}
                />
            ))}
        </>
    )
}

export default AllProperties;