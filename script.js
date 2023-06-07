import { bands } from './bands.js';
import { venues } from './venues.js';
import { bookings } from './bookings.js';

document.addEventListener("DOMContentLoaded", () => {
  // Function to get the band name by ID
  const getBandNameById = (bandId) => {
    const band = bands.find((b) => b.id === bandId);
    return band ? band.name : '';
  };

  // Function to get the venue name by ID
  const getVenueNameById = (venueId) => {
    const venue = venues.find((v) => v.id === venueId);
    return venue ? venue.name : '';
  };

  // Function to display the bookings
  const displayBookings = () => {
    const bookingsList = document.getElementById('bookingsList');

    bookings.forEach((booking) => {
      const { bandId, venueId, date } = booking;
      const bandName = getBandNameById(bandId);
      const venueName = getVenueNameById(venueId);

      const listItem = document.createElement('li');
      listItem.textContent = `${bandName} is playing at ${venueName} on ${date}`;
      listItem.addEventListener('click', () => {
        showBookingInfo(booking);
      });

      bookingsList.appendChild(listItem);
    });
  };

  // Function to show booking information
  const showBookingInfo = (booking) => {
    const { bandId, venueId, date } = booking;
    const bandName = getBandNameById(bandId);
    const venueName = getVenueNameById(venueId);

    window.alert(`
      Band: ${bandName}
      Venue: ${venueName}
      Date: ${date}
    `);
  };

  // Function to display the venue list
  const displayVenues = () => {
    const venueList = document.getElementById('venueList');

    venues.forEach((venue) => {
      const { name } = venue;

      const listItem = document.createElement('li');
      listItem.textContent = name;
      listItem.addEventListener('click', () => {
        showVenueBands(venue.id);
      });

      venueList.appendChild(listItem);
    });
  };

  // Function to show venue bands
  const showVenueBands = (venueId) => {
    const venueName = getVenueNameById(venueId);
    const venueBands = bookings
      .filter((booking) => booking.venueId === venueId)
      .map((booking) => getBandNameById(booking.bandId));

    window.alert(`
      Bands playing at ${venueName}:
      ${venueBands.join('\n')}
    `);
  };

  // Function to display the band list
  const displayBands = () => {
    const bandList = document.getElementById('bandList');

    bands.forEach((band) => {
      const { name } = band;

      const listItem = document.createElement('li');
      listItem.textContent = name;
      listItem.addEventListener('click', () => {
        showBandVenues(band.id);
      });

      bandList.appendChild(listItem);
    });
  };

  // Function to show band venues
  const showBandVenues = (bandId) => {
    const bandName = getBandNameById(bandId);
    const bandVenues = bookings
      .filter((booking) => booking.bandId === bandId)
      .map((booking) => getVenueNameById(booking.venueId));

    window.alert



window.alert(`
      Venues where ${bandName} is playing:
      ${bandVenues.join('\n')}
    `);
  };

  displayBookings();
  displayVenues();
  displayBands();
});


