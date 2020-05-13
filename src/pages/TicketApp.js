import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import TicketList from '../components/TicketList';
import TicketNavBar from '../components/TicketNavBar';

import { updateSort, remove } from '../store/actions/TicketAction'; 
import AlertService from '../services/AlertService';

import '../styles/global.scss';

const TicketApp = () => {

    const dispatch = useDispatch();
    const tickets = useSelector(state => state.TicketReducer.tickets);
    const sortBy = useSelector(state => state.TicketReducer.sortBy);

    const onSetSortBy = sort => {
        try {
            const updatedSortBy = {...sortBy, [sort.name]: sort.value};
            dispatch(updateSort(updatedSortBy));
        } catch (err) {
            AlertService.eventAlert('Failed to Sort Tickets', 'error')
        }
    }    

    const onTicketRemove = async id => {
        try {
            const res = await AlertService.confirmAlert('Are You Sure?');
            if (res) dispatch(remove(id));        
        } catch (err) {
            AlertService.eventAlert('Failed to Delete Ticket', 'error')
        }
    }

    return (
        <section className = 'ticket-app-page'>
            <Header />
            <TicketNavBar onSetSortBy = { onSetSortBy } />
            <TicketList tickets = { tickets } onTicketRemove = { onTicketRemove } sortBy = { sortBy }/>
        </section>
    )
}

export default TicketApp;