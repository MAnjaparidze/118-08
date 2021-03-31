import React from 'react';
// import { Route, Link } from 'react-router-dom';
// import OrganizationPage from './OrganizationPage';


import OrganizationItem from './OrganizationItem';

export default function Organizations({ organizations }) {


    return (
        <div className="organization-render__container">
            <div className='organization-render__header'>
                <span>პოპულარული ორგანიზაციები</span>
            </div>

            <div className='organization-render__wrapper'>
                {organizations.map((organization) => {
                    return (
                        <OrganizationItem key={organization.id} organization={organization} />
                    );
                })}
            </div>
        </div>
    )
}
