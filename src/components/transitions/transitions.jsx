import React from 'react';

function Transitions() {
  return (
    <section className="main__transitions transitions">
      <form className="transitions__form">
        <h2 className="transitions__header">Количество пересадок</h2>

        <fieldset className="transitions__wrapper">
          <label className="transitions__label" htmlFor="all">Все
            <input className="transitions__input visually-hidden" type="checkbox" id="all" />
            <span className="transitions__checkmark"></span>
          </label>

          <label className="transitions__label" htmlFor="no-transitions">Без пересадок
            <input className="transitions__input visually-hidden" type="checkbox" id="no-transitions" />
            <span className="transitions__checkmark"></span>
          </label>

          <label className="transitions__label" htmlFor="one-transition">1 пересадка
            <input className="transitions__input visually-hidden" type="checkbox" id="one-transition" />
            <span className="transitions__checkmark"></span>
          </label>

          <label className="transitions__label" htmlFor="two-transitions">2 пересадки
            <input className="transitions__input visually-hidden" type="checkbox" id="two-transitions" />
            <span className="transitions__checkmark"></span>
          </label>

          <label className="transitions__label" htmlFor="three-transitions">3 пересадки
            <input className="transitions__input visually-hidden" type="checkbox" id="three-transitions" />
            <span className="transitions__checkmark"></span>
          </label>
        </fieldset>
      </form>
    </section>
  )
}

export default Transitions;
