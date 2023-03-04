const tweetButton = document.getElementById('tweet-button');
const tweetInput = document.getElementById('tweet-input');

tweetButton.addEventListener('click', () => {
  if (tweetInput.value.trim() !== '') {
    const tweetList = document.getElementById('tweet-list');
    const tweet = document.createElement('div');
    tweet.classList.add('tweet');
    const tweetContent = document.createElement('p');
    tweetContent.classList.add('tweet-content');
    tweetContent.textContent = tweetInput.value;
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.innerHTML = '<i class="far fa-heart"></i>';
    const likeCount = document.createElement('span');
    likeCount.classList.add('like-count');
    likeCount.textContent = '0';
    const commentInput = document.createElement('textarea');
    commentInput.classList.add('comment-input');
    commentInput.placeholder = 'Leave a comment...';
    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-button');
    commentButton.textContent = 'Comment';
    const commentList = document.createElement('ul');
    commentList.classList.add('comment-list');
    tweet.appendChild(tweetContent);
    tweet.appendChild(likeButton);
    tweet.appendChild(likeCount);
    tweet.appendChild(commentInput);
    tweet.appendChild(commentButton);
    tweet.appendChild(commentList);
    tweetList.insertBefore(tweet, tweetList.firstChild);
    tweetInput.value = '';

    // Add like functionality to the new tweet
    addLikeFunctionality(likeButton, likeCount);
  }
});

function addLikeFunctionality(likeButton, likeCount) {
  likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('liked')) {
      likeButton.classList.remove('liked');
      likeButton.innerHTML = '<i class="far fa-heart"></i>';
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
      likeButton.classList.add('liked');
      likeButton.innerHTML = '<i class="fas fa-heart"></i>';
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  });
}

const tweetList = document.getElementById('tweet-list');

tweetList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('comment-button')) {
    const commentInput = target.previousSibling;
    const commentList = target.nextSibling;

    if (commentInput.value.trim() !== '') {
      const comment = document.createElement('li');
      comment.classList.add('comment');
      comment.textContent = commentInput.value;
      commentList.appendChild(comment);
      commentInput.value = '';
    }
  }
});
