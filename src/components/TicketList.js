import React from 'react';
import TicketPreview from './TicketPreview';

const TicketList = props => {    
    const { sortBy } = props;

    const sortedTickets = props.tickets.sort((firstTicket, secondTicket) => {
            const firstValue = sortBy.order === '-1' ? firstTicket : secondTicket;
            const secondValue = sortBy.order === '-1' ? secondTicket : firstTicket;
            
            return isFinite(firstValue[sortBy.key]-secondValue[sortBy.key]) 
                ? firstValue[sortBy.key]-secondValue[sortBy.key] 
                : isFinite(firstValue[sortBy.key]) ? -1 : 1;
    });

    const ticketList = sortedTickets.map(ticket => {
        return (
            <TicketPreview 
                ticket = { ticket } 
                onTicketRemove = { props.onTicketRemove } 
                key = { ticket._id }
            />
        );
    });
        
    return (
        <ul className = 'ticket-list clean-list'>
            { ticketList }
        </ul>
    );
};

export default TicketList;