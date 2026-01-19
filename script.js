let books = [
    {
        "name": "Die Geheimnisse des Ozeans",
        "author": "Clara Meer",
        "likes": 1250,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2018,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
            {
                "name": "FantasyFanatic",
                "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
            },
            {
                "name": "SciFiGuru",
                "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
            },
            {
                "name": "NovelLover",
                "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
            }
        ]
    },
    {
        "name": "Der vergessene Pfad",
        "author": "Maximilian Schwarz",
        "likes": 980,
        "liked": false,
        "price": 14.50,
        "publishedYear": 2021,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "Die Farben des Himmels",
        "author": "Laura Blau",
        "likes": 1520,
        "liked": true,
        "price": 22.95,
        "publishedYear": 2019,
        "genre": "Romantik",
        "comments": [
            {
                "name": "LeserPeter",
                "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
            },
            {
                "name": "BookLover21",
                "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
            },
            {
                "name": "FantasyNerd",
                "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
            },
            {
                "name": "SciFiEnthusiast",
                "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
            },
            {
                "name": "ReadingAddict",
                "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
            }
        ]
    },
    {
        "name": "Das Rätsel der Zeit",
        "author": "Alexander Weiss",
        "likes": 750,
        "liked": false,
        "price": 18.00,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BuchKenner",
                "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
            },
            {
                "name": "LeseWurm",
                "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
            }
        ]
    },
    {
        "name": "Der letzte Wächter",
        "author": "Sabine Grün",
        "likes": 1300,
        "liked": true,
        "price": 16.75,
        "publishedYear": 2017,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "Im Schatten des Mondes",
        "author": "Philipp Silber",
        "likes": 890,
        "liked": false,
        "price": 12.30,
        "publishedYear": 2022,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BücherLiebhaber",
                "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
            },
            {
                "name": "Leseratte",
                "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
            }
        ]
    },
    {
        "name": "Jenseits der Sterne",
        "author": "Oliver Schwarz",
        "likes": 1450,
        "liked": true,
        "price": 21.00,
        "publishedYear": 2015,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
            }
        ]
    },
    {
        "name": "Das verborgene Königreich",
        "author": "Elena Gold",
        "likes": 920,
        "liked": false,
        "price": 17.50,
        "publishedYear": 2020,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Bookworm92",
                "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
            }
        ]
    },
    {
        "name": "Liebe in Zeiten des Krieges",
        "author": "Emilia Rot",
        "likes": 1800,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2016,
        "genre": "Romantik",
        "comments": [
            {
                "name": "Bibliophile23",
                "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
            },
            {
                "name": "StorySeeker",
                "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
            },
            {
                "name": "SciFiExplorer",
                "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
            }
        ]
    }
]

function loadBooks() {
    for (let index = 0; index < books.length; index++) {
        loadBookTemplate(index);
        renderFavoriteIcon(index);
    }
}

function loadBookTemplate(index) {
    const booksLocation = document.getElementById("contentsID");
    booksLocation.innerHTML += `
         <div id="book${index}" class="book-outlay">
             <div class="book-content">
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

function getComments(i) {
    let allComments = "";
    if (books[i].comments.length >= 1) {
        for (let index = 0; index < books[i].comments.length; index++) {
            allComments += `
                <tr>
                <td><b>${books[i].comments[index].name}:</b></td>
                <td>${books[i].comments[index].comment}</td>
                </tr>`
        }
        return `<table>${allComments}</table>`;
    } else {
        return `<p>Schreibe hier den ersten Kommentar</p>`;
    }
}

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         comment();
//     }
// }
// )

function comment(index){
    let comment = document.getElementById(`inputID${index}`);
    let obj = {};
    obj["name"] = "Gast";
    obj["comment"] = comment.value;
    books[index].comments.push(obj);
    updateComments(index);
    comment.value = "";
}

function updateComments(index){
let allComments = document.getElementById(`commentsID${index}`);
allComments.innerHTML = getComments(index);
}

function renderFavoriteIcon(index) {
    if (books[index].liked == true) {
        document.getElementById(`heartID${index}`).classList.add('heart-filling');
    }
}

function whileHeartClicking(index) {
    document.getElementById(`heartID${index}`).classList.add('heart-darkred');
}

function adjustFavorite(index) {
    if (books[index].liked == true) {
        books[index].liked = false;
        books[index].likes -= 1;
    }
    else {
        books[index].liked = true;
        books[index].likes += 1;
    }
    document.getElementById(`heartID${index}`).classList.remove('heart-darkred');
    document.getElementById(`heartID${index}`).classList.toggle('heart-filling');
    updateLikedNumber(index);
}

function updateLikedNumber(index) {
    let likedAmount = document.getElementById(`likedAmountID${index}`);
    likedAmount.innerHTML = books[index].likes;
}