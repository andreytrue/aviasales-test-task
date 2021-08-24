import React from 'react';

function TicketsFilter() {
  return (
    <form className="tickets__filter">
      <fieldset className="tickets__filter-wrapper">
        <input className="tickets__filter-input visually-hidden" type="radio" name="filter" id="filter-cheap" defaultChecked/>
        <label className="tickets__filter-label" htmlFor="filter-cheap">Самый дешевый</label>
      
        <input className="tickets__filter-input visually-hidden" type="radio" name="filter" id="filter-fast"/>
        <label className="tickets__filter-label" htmlFor="filter-fast">Самый быстрый</label>

        <input className="tickets__filter-input visually-hidden" type="radio" name="filter" id="filter-optimal"/>
        <label className="tickets__filter-label" htmlFor="filter-optimal">Оптимальный</label>
      </fieldset>
    </form>
  )
}

export default TicketsFilter;
