const button = document.querySelector('.button');

// function makeClick() {
//     let nameInput = document.querySelector('.name-input').value;
//     let nameResult = nameInput[0].toUpperCase() + nameInput.slice(1).toLowerCase();
//     document.querySelector('.name-result').innerHTML = nameResult;

//     let avatarInput = document.querySelector('.avatar-input').value;
//     let avatarResult = document.querySelector('.avatar-result').src = avatarInput;
//     avatarResult.alt = 'avatar';

//     let commentInput = document.querySelector('.comment-input').value;
//     let commentResult = document.querySelector('.comment-result').innerHTML = commentInput;
// }
// button.addEventListener('click', makeClick);

// function checkSpam() {
//     commentResult.replace(/viagra/i, "***");
//     commentResult.replace(/XXX/i, "***");
// }
// button.addEventListener('click', checkSpam);

function writeName() {
    let nameInput = document.querySelector('.name-input').value;
    let nameResult = nameInput[0].toUpperCase() + nameInput.slice(1).toLowerCase();
    document.querySelector('.name-result').innerHTML = nameResult;
}
button.addEventListener('click', writeName);

function postAvatar() {
    let avatarInput = document.querySelector('.avatar-input').value;
    let avatarResult = document.querySelector('.avatar-result').src = avatarInput;
    avatarResult.alt = 'avatar';
}
button.addEventListener('click', postAvatar);

function postComment() {
    let commentInput = document.querySelector('.comment-input').value.replace(/viagra/i, "***").replace(/xxx/i, "***");
    let commentResult = document.querySelector('.comment-result').innerHTML = commentInput;
}
button.addEventListener('click', postComment);

// function checkSpam() {
//     commentResult.replace(/viagra/i, "***");
//     commentResult.replace(/XXX/i, "***");
// }
// button.addEventListener('click', checkSpam);