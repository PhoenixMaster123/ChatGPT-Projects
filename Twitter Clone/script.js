// select the tweet button and input box
const tweetButton = document.getElementById('tweet-button');
const tweetInput = document.getElementById('tweet-input');

// add event listener to tweet button
tweetButton.addEventListener('click', () => {
  // check if the tweet input is not empty
  if (tweetInput.value.trim() !== '') {
    // create a new tweet element
    const tweetList = document.getElementById('tweet-list');
    const tweet = document.createElement('div');
    tweet.classList.add('tweet');
    const tweetContent = document.createElement('p');
    tweetContent.classList.add('tweet-content');
    tweetContent.textContent = tweetInput.value.trim(); // remove white space at the start and end
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.innerHTML = '<i class="far fa-heart"></i>';
    tweet.appendChild(tweetContent);
    tweet.appendChild(likeButton);
    tweetList.insertBefore(tweet, tweetList.firstChild);
    // clear the tweet input
    tweetInput.value = '';
  }
});

// add event listener to tweet input box to prevent submission on enter
tweetInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

// add event listener to like buttons
const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('liked')) {
      likeButton.classList.remove('liked');
      likeButton.innerHTML = '<i class="far fa-heart"></i>';
    } else {
      likeButton.classList.add('liked');
      likeButton.innerHTML = '<i class="fas fa-heart"></i>';
    }
  });
});

// change the appearance of the tweet input on focus and blur
tweetInput.addEventListener('focus', () => {
  tweetInput.style.borderColor = '#4AB3F4';
  tweetInput.style.boxShadow = '0px 0px 5px #4AB3F4';
});

tweetInput.addEventListener('blur', () => {
  tweetInput.style.borderColor = '#E8E8E8';
  tweetInput.style.boxShadow = 'none';
});
