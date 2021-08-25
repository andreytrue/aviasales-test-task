import React from 'react';

import Segment from '../segment/segment';
import { setTicketPrice } from '../../utils/common';

// Картинки компаний:
// pics.avs.io/99/36/{IATA_CODE_HERE}.png

function Ticket({ticket}) {
  console.log(ticket);
  const {price, carrier, segments} = ticket;

  return (
    <li className="tickets__item item">
      <div className="item__info">
        <h2 className="item__header">{setTicketPrice(price)} Р</h2>
        <img className="item__logo" src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} width="110" height="36"/>
      </div>
      <div className="item__data">
        {segments.map((item, id) => {
          return (
            <Segment key={item.duration + id} segment={item} />
          )
        })}
      </div>
    </li>
  )
};

export default Ticket;