import React from 'react';

import Ticket from '../ticket/ticket';

function TicketsList({ tickets }) {  
  return (
    <ul className="tickets__list">
      {tickets.map((ticket, id) => {
        return <Ticket key={ticket.price + id} ticket={ticket} />
      })}
    </ul>
  )
}

export default TicketsList;
