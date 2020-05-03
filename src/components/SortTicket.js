import React from 'react';
import { useSelector } from 'react-redux';
import SortBySelect from './SortBySelect';

const SortTicket = props => {
    const sortBy = useSelector(state => state.TicketReducer.sortBy);
    
    return (
        <section className = "sort-ticket" >
            <SortBySelect 
                select = {{
                    name: 'key',
                    options: [
                        { value: 'createdAt', title: 'Created Date', isSelected: sortBy.key === 'createdAt' },
                        { value: 'dueDate', title: 'Due Date', isSelected: sortBy.key === 'dueDate' }
                    ]
                }}
                sortSelected = { props.onSetSortBy } 
            />
            <SortBySelect 
                select = {{
                    name: 'order',
                    options: [
                        { value: '1', title: 'Newer to Older', isSelected: sortBy.order === '1' },
                        { value: '-1', title: 'Older to Newer', isSelected: sortBy.order === '-1' }
                    ]
                }}
                sortSelected = { props.onSetSortBy }
            />
        </section>
    )
}

export default SortTicket;