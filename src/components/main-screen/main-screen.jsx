import React, {useEffect, useState} from 'react';

import Header from '../header/header';
import TicketsList from '../tickets-list/tickets-list';
import ShowMore from '../show-more/show-more';
import Transitions from '../transitions/transitions';
import TicketsFilter from '../tickets-filter/tickets-filter';
import axios from 'axios';

// Картинки компаний:
// pics.avs.io/99/36/{IATA_CODE_HERE}.png

function MainScreen() {
  const getSearchId = async () => {
    return await axios.get('https://front-test.beta.aviasales.ru/search')
      .then(({data}) => setSearchId(data.searchId))
  }
  
  const [searchId, setSearchId] = useState('');
  
  useEffect(() => {
    setSearchId(getSearchId());
  }, []);

  return(
    <React.Fragment>
      <Header />

      <main className="page__main main">
        <Transitions />
        <section className="main__tickets tickets">
          <TicketsFilter />

          <TicketsList searchId={searchId} />

          <ShowMore />
        </section>
      </main>
    </React.Fragment>
  )
}

export default MainScreen;
