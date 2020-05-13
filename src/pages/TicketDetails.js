import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getById, remove } from '../store/actions/TicketAction';
import UtilService from '../services/UtilService';
import AlertService from '../services/AlertService';

const TicketDetails = props => {
    const ticket = useSelector(state => state.TicketReducer.ticket);
    const dispatch = useDispatch();
    const { id } = props.match.params;
    
    useEffect(()=> {
        dispatch(getById(id));
    }, [])

    const onTicketRemove = async () => {
        try {
            const res = await AlertService.confirmAlert('Are You Sure You Want To Delete Ticket? ');
            if (res) await dispatch(remove(id));        
            props.history.push(process.env.PUBLIC_URL + '/');
        } catch (err) {
            AlertService.eventAlert('Failed to Delete Ticket')
        }
    }

    return (
        <section className = 'ticket-details-page'>
            { ticket._id 
                ? <section className = 'ticket-details'>
                    <h1 className = 'title'>{ticket.subject}</h1>
                    <h2 className = 'body'>{ticket.body}</h2>
                    <h2 className = 'created-at'>
                        <i className = 'far fa-clock'></i> { UtilService.getFormatDate(ticket.createdAt) }
                    </h2> 
                    <h2 className = 'due-date'>
                        <i className = 'far fa-bell'></i> { ticket.dueDate 
                            ? UtilService.getFormatDate(ticket.dueDate) 
                            : 'Off'
                        }
                    </h2>
                    <button className = 'remove-btn' onClick = { ev => {
                        ev.stopPropagation()
                        onTicketRemove(ticket._id) 
                        }}
                    >
                        <i className='fas fa-trash-alt'></i>
                    </button>
                    <Link className = 'edit-link' to = { process.env.PUBLIC_URL + `/ticket/edit/${ticket._id}`} >
                        <i className='fas fa-edit'></i> 
                    </Link>

                </section>
                : null
            }

        </section>
    )
}

export default TicketDetails;