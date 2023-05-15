const form = document.querySelector('.form');
const commentContainer = document.querySelector(".comments");
const apiKey = "ae6dd861-e1f6-45a7-bdb8-b95541ad30fa";
const getURL = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;
const postURL = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`

// Fetch Comments from API
const fetchComments = () => {
  axios
        .get(getURL)
            .then(result => {
                // Sort the comments in descending order
                const comments = result.data.sort((a, b) => b.timestamp - a.timestamp);

                    comments.forEach(comment => {

                        // Build the comment container
                        const container = document.createElement("div");
                        container.classList.add("comments__container");

                        const avatar = document.createElement("div");
                        avatar.classList.add("comments__avatar-blank");

                        const box = document.createElement("div");
                        box.classList.add("comments__box");

                        const boxHead = document.createElement("div");
                        boxHead.classList.add("comments__box-head");

                        const commentName = document.createElement("h3");
                        commentName.classList.add("comments__name");
                        commentName.textContent = comment.name;

                        const date = document.createElement("p");
                        date.textContent = new Date(comment.timestamp).toLocaleDateString('fr-FR');

                        const commentText = document.createElement("p");
                        commentText.classList.add("comments__comment");
                        commentText.textContent = comment.comment;

                        commentContainer.appendChild(container);
                        container.appendChild(avatar);
                        container.appendChild(box);
                        box.appendChild(boxHead);
                        boxHead.appendChild(commentName);
                        boxHead.appendChild(date);
                        box.appendChild(commentText);

                    });

            }).catch(error => {
                    console.error(error);
                });
};



postComment = (name, comment) => {
    axios.post(postURL, {
                name: name,
                comment: comment,
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
                    e.target.name.classList.add("form-error")
                    return;
            }
            if (commentInput === '') {
                alert("Please leave a comment");
                    e.target.comment.classList.add("form-error")
                    return;
            }
        
            postComment(nameInput, commentInput);
                     e.target.reset();

});

fetchComments();
    









    

