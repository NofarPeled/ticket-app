import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import UtilService from '../services/UtilService';

const TicketPreview = props => {
    const { ticket } = props;
    const history = useHistory();

    return (
        <li className = 'ticket-preview' onClick = { () => history.push(`/ticket/${ticket._id}`)}>
            <h1 className = 'title'> { ticket.subject } </h1>
            <h2 className = 'body'> { ticket.body } </h2>  
            <h2 className = 'create-at'>                         
                <i class="far fa-clock"></i> { UtilService.getFormatDate(ticket.createdAt) } 
            </h2> 
            <h2 className = 'due-date'>
                <i class="far fa-bell"></i> { ticket.dueDate 
                    ? UtilService.getFormatDate(ticket.dueDate) 
                    : 'Off' 
                }
            </h2>
            <button className = 'delete-btn' onClick = { (ev) => {
                ev.stopPropagation()
                props.onTicketRemove(ticket._id) 
            } }><i className='fas fa-trash-alt'></i></button>
            <Link onClick = { ev => ev.stopPropagation() } className = 'edit-ticket-link' to = { `/ticket/edit/${ticket._id}` } ><i className='fas fa-edit'></i> </Link>
        </li>
    )
}

export default TicketPreview;