import React, {useEffect, useState} from 'react';
import axios from 'axios';

function TicketsList({searchId}) {
  console.log(searchId);

  const getTickets = async (searchId) => {
    return await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(({data}) => setTickets((data.tickets).slice(0, 5)));
  };

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets(searchId);
  }, [searchId]);

  console.log(tickets);

  return (
    <ul className="tickets__list">
      <li className="tickets__item item">
        <div className="item__info">
          <h2 className="item__header">13 400 Р</h2>
          <img className="item__logo" src="./img/company-logo.png" alt="" width="110" height="36"/>
        </div>
        <div className="item__data">
          <table className="item__table">
            <tbody className="item__table-wrapper">
              <tr className="item__table-row">
                <th className="item__table-header">MOW – HKT</th>
                <th className="item__table-header">В пути</th>
                <th className="item__table-header">2 пересадки</th>
              </tr>
              <tr className="item__table-row">
                <td className="item__table-value">10:45 – 08:00</td>
                <td className="item__table-value">21ч 15м</td>
                <td className="item__table-value">HKG, JNB</td>
              </tr>
            </tbody>
          </table>
          <table className="item__table">
            <tbody className="item__table-wrapper">
              <tr className="item__table-row">
                <th className="item__table-header">MOW – HKT</th>
                <th className="item__table-header">В пути</th>
                <th className="item__table-header">1 пересадка</th>
              </tr>
              <tr className="item__table-row">
                <td className="item__table-value">11:20 – 00:50</td>
                <td className="item__table-value">13ч 30м</td>
                <td className="item__table-value">HKG</td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
    </ul>
  )
}

export default TicketsList;
