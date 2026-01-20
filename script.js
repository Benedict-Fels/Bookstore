function loadBooks() {
    for (let index = 0; index < books.length; index++) {
        loadBookTemplate(index);
        renderFavoriteIcon(index);
    }
}

function getComments(i) {
    if (books[i].comments.length >= 1) {
        return getCommentsTemplate(i);
    } else {
        return `<p>Schreibe hier den ersten Kommentar</p>`;
    }
}

function comment(index) {
    let comment = document.getElementById(`inputID${index}`);
    if (comment.value.length > 0) {
        let obj = {};
        obj["name"] = "Gast";
        obj["comment"] = comment.value;
        books[index].comments.push(obj);
        updateComments(index);
        comment.value = "";
    }
}

function updateComments(index) {
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