export const adaptSearchId = (data) => {
  return data.searchId;
};

export const adaptTickets = (data) => {
  const tickets = Object.values(data)[0].slice(0, 5);

  return tickets;
};

export const setTicketPrice = (price) => {
  let result = price.toString();

  return result.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
};

export const setTicketStopsAmount = (stops) => {
  switch (stops.length) {
    case 0:
      return 'Без пересадок';
    case 1:
      return (stops.length + ' пересадка');
    default:
      return (stops.length + ' пересадки');
  }
};

export const setDurationTime = (duration) => {
  let hours = Math.trunc(duration/60);
	let minutes = duration % 60;

	return hours + 'ч. ' + minutes + 'м.';
};
