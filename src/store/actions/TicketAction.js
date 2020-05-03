import Types from '../Types';
import TicketService from '../../services/TicketService';

const setTicket = ticket => {
    return {
        type: Types.SET_TICKET,
        ticket
    }
}

const setTickets = tickets => {
    return {
        type: Types.SET_TICKETS,
        tickets
    }
}

const addTicket = ticket => {
    return {
        type: Types.ADD_TICKET,
        ticket
    }
}

const removeTicket = id => {
    return {
        type: Types.REMOVE_TICKET,
        id
    }
}

const updateTicket = ticket => {
    return {
        type: Types.UPDATE_TICKET,
        ticket
    }
}

const setSortBy = sortBy => {
    return {
        type: Types.SET_SORT_BY, 
        sortBy
    }
}

export const updateSort = sortBy => {
    return dispatch => {
        try {
            dispatch(setSortBy(sortBy));
        } catch (err) {
            throw err;
        }
    }
    
}

export const query = () => {
    return async dispatch => {
        try {
            const tickets = await TicketService.query();
            dispatch(setTickets(tickets ? tickets : []));
        } catch (err) {
            throw err;
        }
    }
}

export const add = ticket => {
    return async dispatch => {
        try {
            const addedTicket = await TicketService.add(ticket);
            dispatch(addTicket(addedTicket));
        } catch (err) {
            throw err;
        }
    }
}

export const remove = id => {
    return async dispatch => {
        try {
            await TicketService.remove(id);
            dispatch(removeTicket(id));
        } catch (err) {
            throw err;
        }
    }
}

export const update = ticket => {
    return async dispatch => {
        try {
            await TicketService.update(ticket);
            dispatch(updateTicket(ticket));
        } catch (err) {
            throw err;
        }
    }
}

export const getById = id => {
    return async dispatch => {
        try {
            const ticket = await TicketService.getById(id);
            dispatch(setTicket(ticket));
            return ticket;
        } catch (err ) {
            throw err;
        }
    }
}


