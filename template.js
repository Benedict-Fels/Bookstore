function loadBookTemplate(index) {
    const booksLocation = document.getElementById("contentsID");
    booksLocation.innerHTML += `
         <div id="book${index}" class="book-outlay">
             <div class="book-content">
                 <div class="book-content-no-comments">
                     <h2>${books[index].name}</h2>
                     <img class="book-icon" src="./assets/book2.png" alt="Buch Icon"></img>
                     <div class ="price-and-likes">
                        <p>${books[index].price.toFixed(2).toString().replace('.', ',')} Є</p>
                             <div class="likes">
                                 <p id="likedAmountID${index}">${books[index].likes}</p>
                                 <svg id="heartID${index}" class="heart" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                 <path onmousedown="whileHeartClicking(${index})" onmouseup="adjustFavorite(${index})" d="M16 24.675C15.7667 24.675 15.5292 24.6333 15.2875 24.55C15.0458 24.4667 14.8333 24.3333 14.65 24.15L12.925 22.575C11.1583 20.9583 9.5625 19.3542 8.1375 17.7625C6.7125 16.1708 6 14.4167 6 12.5C6 10.9333 6.525 9.625 7.575 8.575C8.625 7.525 9.93333 7 11.5 7C12.3833 7 13.2167 7.1875 14 7.5625C14.7833 7.9375 15.45 8.45 16 9.1C16.55 8.45 17.2167 7.9375 18 7.5625C18.7833 7.1875 19.6167 7 20.5 7C22.0667 7 23.375 7.525 24.425 8.575C25.475 9.625 26 10.9333 26 12.5C26 14.4167 25.2917 16.175 23.875 17.775C22.4583 19.375 20.85 20.9833 19.05 22.6L17.35 24.15C17.1667 24.3333 16.9542 24.4667 16.7125 24.55C16.4708 24.6333 16.2333 24.675 16 24.675Z"/>
                                 </svg>
                             </div>
                     </div>
                     <table class="book-info">
                        <tr>
                            <td><b>Autor:</b></td>
                            <td>${books[index].author}</td>
                        </tr>
                        <tr>
                            <td><b>Erscheinungsjahr:</b></td>
                            <td>${books[index].publishedYear}</td>
                        </tr>
                        <tr>
                            <td><b>Genre:</b></td>
                            <td>${books[index].genre}</td>
                        </tr>
                     </table>
                 </div>
                 <h3>Kommentare:</h3>
                 <div id="commentsID${index}" class="comments">
                     ${getComments(index)}
                 </div>
             </div> 
             <div class="pages">
                 <input id="inputID${index}" class="comment-input" type="text" placeholder="  Schreibe einen Kommentar...">
                 <img onclick="comment(${index})" class="send-icon" src="./assets/send.png" alt="Send Icon"></img>
             </div>
         </div>        
  `
}

function getCommentsTemplate (i){
    let allComments = "";
    for (let index = 0; index < books[i].comments.length; index++) {
            allComments += `
                <tr>
                <td><b>${books[i].comments[index].name}:</b></td>
                <td>${books[i].comments[index].comment}</td>
                </tr>`
        }
        return `<table>${allComments}</table>`;
}