import React from 'react';
import { Link } from 'react-router-dom';

import SortTicket from './SortTicket';

const TicketNavBar = props => {

    return (
        <nav className = "ticket-nav-bar">
            <SortTicket onSetSortBy = { props.onSetSortBy }/>
            <Link className = "add-ticket-link" to = '/ticket/edit'><i className="fas fa-plus"></i></Link>
        </nav>
    )
}

export default TicketNavBar;