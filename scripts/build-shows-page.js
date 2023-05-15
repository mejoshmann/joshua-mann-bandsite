  const showsContainer = document.querySelector('.show');
  const apiKey = "ae6dd861-e1f6-45a7-bdb8-b95541ad30fa"
  const showApi = `https://project-1-api.herokuapp.com/showdates/?api_key=${apiKey}`

  getShows = () => {
    axios.get(showApi)
            .then((result) => {
              const shows = result.data;
  
              shows.forEach(show => {

                const showContainer = document.createElement('div');
                showContainer.classList.add('show__container');
    
                // Date container
                const showDate = document.createElement('div');
                showDate.classList.add('show__date');  
              
                const dateHead = document.createElement('p');
                dateHead.classList.add('show__container-silver')
                dateHead.innerText = "DATE";
              
                const date = document.createElement('p');
                date.classList.add('show__date-num');
                date.textContent = new Date(show.date).toLocaleDateString('ca');
                
                // Venue container
                const showVenue = document.createElement('div');
                showVenue.classList.add('show__venue');
              
                const venueHead = document.createElement('p');
                venueHead.classList.add('show__venue-silver');
                venueHead.innerText = "VENUE";
              
                const venuePlace = document.createElement('p');
                venuePlace.classList.add('show__venue-head');
                venuePlace.textContent = show.place;
              
              
                // Location container
                const showLocal = document.createElement('div');
                showLocal.classList.add('show__location');
              
                const localHead = document.createElement('p');
                localHead.classList.add('show__location-silver');
                localHead.textContent = "LOCATION";
              
                const localPlace = document.createElement('p');
                localPlace.classList.add('show__location-place');
                localPlace.textContent = show.location;
                showLocal.appendChild(localPlace);  
              
                // Buy tickets Button
                const button = document.createElement('button');
                button.classList.add('show__button');
                button.innerText = "BUY TICKETS";

                showsContainer.appendChild(showContainer);
                showContainer.appendChild(showDate);
                showDate.appendChild(dateHead);
                showDate.appendChild(date);
                showContainer.appendChild(showVenue);
                showVenue.appendChild(venueHead);
                showVenue.appendChild(venuePlace);
                showContainer.appendChild(showLocal);
                showLocal.appendChild(localHead);
                showContainer.appendChild(button);

    })
  });
};

getShows();
  
      
