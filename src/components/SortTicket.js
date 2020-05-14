import React from 'react';
import { useSelector } from 'react-redux';
import SortBySelect from './SortBySelect';

const SortTicket = props => {
    const sortBy = useSelector(state => state.TicketReducer.sortBy);
    return (
        <section className = 'sort-ticket' >
            <SortBySelect 
                select = {{
                    name: 'key',
                    options: [
                        { value: 'createdAt', title: 'Created Date' },
                        { value: 'dueDate', title: 'Due Date' }
                    ],
                    defaultValue : { defaultValue: sortBy.key }
                }}
                sortSelected = { props.onSetSortBy } 
            />
            <SortBySelect 
                select = {{
                    name: 'order',
                    options: [
                        { value: '1', title: 'Newer to Older' },
                        { value: '-1', title: 'Older to Newer' }
                    ],
                    defaultValue: { defaultValue: sortBy.order }
                }}
                sortSelected = { props.onSetSortBy }
            />
        </section>
    );
};

export default SortTicket;