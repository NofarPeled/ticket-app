import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import UtilService from '../services/UtilService';

const TicketPreview = props => {
    const { ticket } = props;
    const history = useHistory();

    return (
        <li 
            className = 'ticket-preview' 
            onClick = { () => history.push( process.env.PUBLIC_URL + `/ticket/${ticket._id}`) }
        >
            <h1 className = 'title'> { ticket.subject } </h1>
            <h2 className = 'body'> { ticket.body } </h2>  
            <h2 className = 'create-at'>                         
                <i className = 'far fa-clock'/> { UtilService.getFormatDate(ticket.createdAt) } 
            </h2> 
            <h2 className = 'due-date'>
                <i className = 'far fa-bell'/> { ticket.dueDate 
                    ? UtilService.getFormatDate(ticket.dueDate) 
                    : 'Off' 
                }
            </h2>
            <button className = 'delete-btn' onClick = { ev => {
                ev.stopPropagation()
                props.onTicketRemove(ticket._id) 
            }}>
                <i className='fas fa-trash-alt'/>
            </button>
            <Link 
                onClick = { ev => ev.stopPropagation() } 
                className = 'edit-ticket-link' 
                to = { process.env.PUBLIC_URL + `/ticket/edit/${ticket._id}` } 
            >
                <i className='fas fa-edit'/> 
            </Link>
        </li>
    );
};

export default TicketPreview;