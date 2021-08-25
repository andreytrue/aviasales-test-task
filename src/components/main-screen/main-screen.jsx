import React from 'react';

import { useSelector } from 'react-redux';
import { getTickets } from '../../store/selectors';

import Header from '../header/header';
import TicketsList from '../tickets-list/tickets-list';
import ShowMore from '../show-more/show-more';
import Transitions from '../transitions/transitions';
import TicketsFilter from '../tickets-filter/tickets-filter';

function MainScreen() {
  const tickets = useSelector(getTickets);

  return(
    <React.Fragment>
      <Header />

      <main className="page__main main">
        <Transitions />
        <section className="main__tickets tickets">
          <TicketsFilter />

          <TicketsList tickets={tickets} />

          <ShowMore />
        </section>
      </main>
    </React.Fragment>
  )
}

export default MainScreen;
