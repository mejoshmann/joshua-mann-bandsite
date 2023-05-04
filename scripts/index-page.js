const form = document.querySelector('.form');
// console.log(form);
// const commentContainer = document.querySelector('.comments__container');




// Pre populated Comment Cards.

const commentCards = [

{ 
image: "1",   
name: "Connor Walton",
date: "02/17/2021",
comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
},

{ 
    image: "2",    
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
},

{ 
    image: "3",
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
},

];


const commentContainer = document.querySelector(".comments");
// console.log("comment container", commentContainer);



    commentCards.forEach(function(comments) {

        const container = document.createElement("div");
        container.classList.add("comments__container");
        commentContainer.appendChild(container);

        const avatar = document.createElement("div");
        avatar.classList.add("comments__avatar-blank");
        container.appendChild(avatar);

        const box = document.createElement("div");
        box.classList.add("comments__box");
        container.appendChild(box);


        const boxHead = document.createElement("div");
        boxHead.classList.add("comments__box-head");
        box.appendChild(boxHead);


        const name = document.createElement("h3");
        name.classList.add("comments__name");
        name.textContent = comments.name;
        boxHead.appendChild(name);


        const date = document.createElement("p");
        date.classList.add("comments__date");
        date.textContent = comments.date;
        boxHead.appendChild(date);


        const comment = document.createElement("p");
        comment.classList.add("comments__comment");
        comment.textContent = comments.comment;
        box.appendChild(comment);
    
       
    });

    

