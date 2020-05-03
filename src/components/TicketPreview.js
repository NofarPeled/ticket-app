import React from 'react';
import { Link } from 'react-router-dom';
import UtilService from '../services/UtilService';

const TicketPreview = props => {
    const { ticket } = props;
    
    return (
        <section className = "ticket-preview">
            <Link to = {`/ticket/${ticket._id}`}>
                <h1 className = "title">{ticket.subject}</h1>
                <h2 className = "body">{ticket.body}</h2>  
                <h2 className = "create-at">{UtilService.dateConvertor(ticket.createdAt)}</h2> 
                <h2 className = "due-date">{ticket.dueDate ? UtilService.dateConvertor(ticket.dueDate) : 'Off'}</h2>
                <button onClick = { (e) => {
                    e.preventDefault()
                    props.onTicketRemove(ticket._id) 
                }}><i className="fas fa-trash-alt"></i></button>
                <Link to = {`/ticket/edit/${ticket._id}`} ><i className="fas fa-edit"></i> </Link>
            </Link>
        </section>
    )
}

export default TicketPreview;