  const showsContainer = document.querySelector('.show');
   
  const bandShows = [ 
    { 
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",    
    },

    {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    Location: "San Francisco, CA"
    },

    {
      Date: "Fri Oct 15 2021",
      Venue: "View Lounge", 
      Location: "San Francisco, CA",
    },

    {
      Date: "Sat Nov 06 2021", 
      Venue: "Hyatt Agency",
      Location: "San Francisco, CA", 
    },

    {
      Date: "Fri Nov 26 2021",
      Venue: "Moscow Center", 
      Location: "San Francisco, CA" 
    },

    {
      Date: "Wed Dec 15 2021",
      Venue: "Press Club", 
      Location: "San Francisco, CA"
    },
  ];

function displayShows(show) { 

  for (let i = 0; i < bandShows.length; i++) {

    const show = bandShows[i];


  const showContainer = document.createElement('div');
  showContainer.classList.add('show__container');
  showsContainer.appendChild(showContainer);

  // Date container
  const showDate = document.createElement('div');
  showDate.classList.add('show__date');  
  showContainer.appendChild(showDate);

  const dateHead = document.createElement('p');
  dateHead.classList.add('show__container-silver')
  dateHead.innerText = "DATE";
  showDate.appendChild(dateHead);

  const date = document.createElement('p');
  date.classList.add('show__date-num');
  date.textContent = show.Date;
  showDate.appendChild(date);
  
  // // Venue container
  const showVenue = document.createElement('div');
  showVenue.classList.add('show__venue');
  showContainer.appendChild(showVenue);

  const venueHead = document.createElement('p');
  venueHead.classList.add('show__venue-silver');
  venueHead.innerText = "VENUE";
  showVenue.appendChild(venueHead);

  const venuePlace = document.createElement('p');
  venuePlace.classList.add('show__venue-head');
  venuePlace.textContent = show.Venue;
  showVenue.appendChild(venuePlace);


  // // Location container
  const showLocal = document.createElement('div');
  showLocal.classList.add('show__location');
  showContainer.appendChild(showLocal);

  const localHead = document.createElement('p');
  localHead.classList.add('show__location-silver');
  localHead.innerText = "LOCATION";
  showLocal.appendChild(localHead);
 
  

  const localPlace = document.createElement('p');
  localPlace.classList.add('show__location-place');
  localPlace.textContent = show.Location;
  showLocal.appendChild(localPlace);  

  const button = document.createElement('button');
  button.classList.add('show__button');
  button.innerText = "BUY TICKETS";
  showContainer.appendChild(button);



  };
};


displayShows();

