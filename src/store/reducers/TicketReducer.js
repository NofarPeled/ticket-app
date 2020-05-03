import Types from '../Types';

let initState = {
    sortBy: {
        key: 'createdAt',
        order: '1'
    },
    tickets: [],
    ticket: {}
}

function TicketReducer ( state = initState, action ) {
    switch(action.type) {
        case Types.ADD_TICKET: {
            return {
                ...state, 
                tickets: [...state.tickets, action.ticket]
            }
        } 
        case Types.REMOVE_TICKET: {
            return {
                ...state, 
                tickets: state.tickets.filter( ticket => {
                    return ticket._id !== action.id;
                })
            }
        }
        case Types.UPDATE_TICKET: {
            return {
                ...state,
                tickets: state.tickets.map(ticket => {
                    if (ticket._id == action.ticket._id) {
                        return {...action.ticket}
                    }
                    return ticket
                })
            }
        }
        case Types.SET_TICKET: {
            return {
                ...state,
                ticket: action.ticket
            }
        }
        case Types.SET_TICKETS: {
            return {
                ...state,
                tickets: action.tickets
            }
        }
        case Types.SET_SORT_BY: {            
            return {
                ...state,
                sortBy: action.sortBy
            }
        }

        default: {
            return state;
        }
    }
}

export default TicketReducer;