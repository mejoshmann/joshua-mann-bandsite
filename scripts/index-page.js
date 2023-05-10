const form = document.querySelector('.form');
const commentContainer = document.querySelector(".comments");

 commentArrayAppend = (commentArray) => {
    for (let i = 0; i < commentArray.length; i++) {

        const container = document.createElement("div");
        container.classList.add("comments__container");
        commentContainer.appendChild(container);

        const box = document.createElement("div");
        box.classList.add("comments__box");
        container.appendChild(box);
    
        const boxHead = document.createElement("div");
        boxHead.classList.add("comments__box-head");
        box.appendChild(boxHead);

        const commentName = document.createElement("h3");
        commentName.classList.add("comments__name");
        commentName.textContent = commentArray[i].name;
        boxHead.appendChild(commentName);

        const date = document.createElement("p");
        date.classList.add("comments__date");
        date.textContent =  new Date(commentArray[i].timestamp).toLocaleDateString('ca');
        boxHead.appendChild(date);
    
        const comment = document.createElement("p");
        comment.classList.add("comments__comment");
        comment.textContent = commentArray[i].comment;
        box.appendChild(comment);
    }
}



getCommentsAppend = () => {
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=ae6dd861-e1f6-45a7-bdb8-b95541ad30fa`)
         .then((result) => {
            console.log(result.data);

            result.data.sort((a, b)=> {
                return b.timestamp - a.timestamp;
            });
             
            commentArrayAppend(result.data);
            
         });
        };



postComment = (name, comment) => {
    axios.post(`https://project-1-api.herokuapp.com/comments/?api_key=ae6dd861-e1f6-45a7-bdb8-b95541ad30fa`, {
        name: name,
        comment: comment,
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
};

   
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = e.target.name.value;
            const commentInput = e.target.comment.value;
        
         if (nameInput === '') {
            alert("Please enter your name ");
         }
         if (commentInput === '') {
            alert("Please leave a comment");
         }
         postComment(nameInput, commentInput);
         e.target.reset();

    });

    getCommentsAppend();
    
         
    
    

 

















    

