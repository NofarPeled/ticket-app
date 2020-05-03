import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getById, add, update } from '../store/actions/TicketAction';
import AlertService from '../services/AlertService';

import Header from '../components/Header';

const TicketEdit = props => {
    const dispatch = useDispatch();
    const { id } = props.match.params;
    const [ticket, setTicket] = useState({
        _id: id,
        createdAt: 0,
        dueDate: 0,
        subject: '',
        body: ''
    });

    useEffect(()=> {
        if (id) (async () => {
            setTicket({...await dispatch(getById(id))});
        })()
    }, [])

    const onEditTicket = ev => {
        const {name, value} = ev.target;
        setTicket({...ticket, [name]: value});
    }

    const onTicketSubmit = async ev => {
        ev.preventDefault()
        try {
            ticket.createdAt = id ? ticket.createdAt : Date.now();
            id ? await dispatch(update(ticket)) : await dispatch(add(ticket));
            props.history.push(`/`);
        } catch (err) {            
            AlertService.eventAlert(`Failed to ${id ? 'Update' : 'Add'} Ticket` , 'error');
        }
        
    }

    return (
        <section className = "ticket-edit">
            <Header />
            <h1 className = "title">{id ? 'Edit Ticket' : 'Create Ticket'}</h1>
            <form  onSubmit = { onTicketSubmit}>
                <input type = "text" name = "subject" placeholder = "Title" value = { ticket.subject } onChange = { onEditTicket } />
                <textarea rows ="4" type = "text" name = "body" placeholder = "Body" value = { ticket.body } onChange = { onEditTicket } />
                <input type = "date" name = "dueDate" placeholder = "Due Date" value = { ticket.dueDate } onChange = { onEditTicket }/>
                <input type = "submit" placeholder = { id ? 'Update Ticket' : 'Add Ticket'} />
            </form>
        </section>
    )
}

export default TicketEdit;