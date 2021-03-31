import React from 'react'
import Header from '../organizations/parts/Header'
import EventPageRender from './parts/EventPageMidRender'
import Footer from '../organizations/parts/Footer'


export default function EventPage({...props}) {
    console.log(props.location.state.eventInfo)
    return (
        <div className='event-page_container'>
            <Header />
            <EventPageRender event={props.location.state.eventInfo} />
            <Footer />
        </div>
    )
}
