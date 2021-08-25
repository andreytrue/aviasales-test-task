import React from 'react';
import { setTicketStopsAmount, setDurationTime } from '../../utils/common';
import moment from 'moment';

function Segment({segment}) {
  const {date, destination, duration, origin, stops} = segment;

  const startTime = moment(date).format('HH:MM');
  const finishTime = moment().add(duration, 'minutes').format('HH:MM');

  return (
    <table className="item__table">
      <tbody className="item__table-wrapper">
        <tr className="item__table-row">
          <th className="item__table-header">{origin} – {destination}</th>
          <th className="item__table-header">В пути</th>
          <th className="item__table-header">{setTicketStopsAmount(stops)}</th>
        </tr>
        <tr className="item__table-row">
          <td className="item__table-value">{startTime} – {finishTime}</td>
          <td className="item__table-value">{setDurationTime(duration)}</td>
          <td className="item__table-value">{stops.join(', ')}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Segment;
