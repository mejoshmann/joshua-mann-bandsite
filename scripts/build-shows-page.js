  const showsContainer = document.querySelector('.show');

  function getShows() {
    axios
         .get(`https://project-1-api.herokuapp.com/showdates/?api_key=ae6dd861-e1f6-45a7-bdb8-b95541ad30fa`)
         .then((result) => {

          console.log(result.data);
  
   
      result.data.forEach((show) => {

  
  
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
    date.textContent = new Date(show.date).toLocaleDateString('ca');
    showDate.appendChild(date);
    
    // Venue container
    const showVenue = document.createElement('div');
    showVenue.classList.add('show__venue');
    showContainer.appendChild(showVenue);
  
    const venueHead = document.createElement('p');
    venueHead.classList.add('show__venue-silver');
    venueHead.innerText = "VENUE";
    showVenue.appendChild(venueHead);
  
    const venuePlace = document.createElement('p');
    venuePlace.classList.add('show__venue-head');
    venuePlace.textContent = show.place;
    showVenue.appendChild(venuePlace);
  
  
    // Location container
    const showLocal = document.createElement('div');
    showLocal.classList.add('show__location');
    showContainer.appendChild(showLocal);
  
    const localHead = document.createElement('p');
    localHead.classList.add('show__location-silver');
    localHead.textContent = "LOCATION";
    showLocal.appendChild(localHead);
   
    
  
    const localPlace = document.createElement('p');
    localPlace.classList.add('show__location-place');
    localPlace.textContent = show.location;
    showLocal.appendChild(localPlace);  
  
    const button = document.createElement('button');
    button.classList.add('show__button');
    button.innerText = "BUY TICKETS";
    showContainer.appendChild(button);
      })
  });

};
getShows();
  
      
