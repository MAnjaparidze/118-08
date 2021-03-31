import React from 'react';
import CallIcon from '../../../../assets/img/phone.png';
import LocationIcon from '../../../../assets/img/pin.png';
import OrganizationIcon from '../../../../assets/img/dest.png';
import WithoutImage from '../../../../assets/img/org-no-picture.png';
import { Link } from 'react-router-dom';

import MenuIco from '../../../../assets/img/menu.png';
import DeliveryIco from '../../../../assets/img/box.png';

export default function organizationItem({organization}) {

    const redirectToOrg = () => {
        window.location = (`/ka-ge/organization/${organization.id}`);
    }

    return (
        <div className="organization__wrapper" onClick={() => redirectToOrg()}>
                            <div className='organization__header__wrapper'>
                                <img src={OrganizationIcon} alt="" />
                                <Link className='organization-name' to={`/ka-ge/organization/${organization.id}`} title={organization.name}>{organization.name}</Link>
                                <div className='organization-description'>{organization.activity}</div>
                                <div className='organization-rating'>{organization.rate_count} შეფასება</div>
                            </div>
                            <div className='organization-image__wrapper' style={{backgroundImage: `url(` + (organization.image ? organization.image : WithoutImage) + ')'}}>
                                <div className='organization-image'  />
                                <div className='organization-address'>
                                    <img src={LocationIcon} alt="" />
                                    <span>{organization.address}</span>
                                </div>
                            </div>

                            <div className='organization__footer__wrapper'>
                                <div className='organization-working-hours'>{organization.work_hours}</div>
                                {organization.has_delivery === 1 && <img src={MenuIco} alt=""/>}
                                {organization.has_menu === 1 && <img src={DeliveryIco} alt=""/>}
                                <a href={`tel:${organization.number}`} className='call-icon__wrapper'>
                                    <img src={CallIcon} alt="" />
                                </a>
                            </div>
                        </div>
    )
}
