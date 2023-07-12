var post_container = document.getElementById('posts');
var post_url = 'https://jsonplaceholder.typicode.com/posts';
var user_url = 'https://jsonplaceholder.typicode.com/users';
var comments_url = 'https://jsonplaceholder.typicode.com/comments';

fetch(post_url)
  .then((response) => response.json())
  .then((posts) => {
    displayPosts(posts);
  });

function displayPosts(posts) {
  posts.forEach((post) => {
    var postEl = document.createElement('div');
    postEl.classList.add('post'); // Add the 'post' class to the post element

    fetch(user_url)
      .then((response) => response.json())
      .then((users) => {
        const user = users.find((user) => user.id === post.userId);
        const username = user ? user.username : 'Unknown';

        var usernameEl = document.createElement('p');
        usernameEl.classList.add('username'); // Add the 'username' class to the username element
        usernameEl.style.fontSize = '20px'; // Set the font size
            usernameEl.innerHTML = `<i class="fas fa-user"></i> ${username}`;
        postEl.appendChild(usernameEl);

        postEl.innerHTML += `<h2 class="post_title">${post.title}</h2>
                             <p class="post_body">${post.body}</p>`;

        fetch(comments_url)
          .then((response) => response.json())
          .then((comments) => {
            var postComments = comments.filter((comment) => comment.postId === post.id);
            var commentsContainer = document.createElement('div');
            commentsContainer.classList.add('comments-container');

            var commentsTitle = document.createElement('h3');
            commentsTitle.textContent = 'Comments';
            commentsContainer.appendChild(commentsTitle);

            var commentEl = document.createElement('div');
            commentEl.innerHTML = `<li>${postComments[0].body}</li>`;
            commentEl.classList.add('comment'); // Add the 'comment' class to the comment element
            commentsContainer.appendChild(commentEl);

            if (postComments.length > 1) {
              var readMoreLink = document.createElement('a');
              readMoreLink.href = '#';
              readMoreLink.textContent = 'Read More';
              commentsContainer.appendChild(readMoreLink);

              readMoreLink.addEventListener('click', function () {
                commentEl.innerHTML = '';
                postComments.slice(1).forEach((comment) => {
                  var subCommentEl = document.createElement('div');
                  subCommentEl.innerHTML = `<li>${comment.body}</li>`;
                  subCommentEl.classList.add('comment'); // Add the 'comment' class to the comment element
                  commentsContainer.appendChild(subCommentEl);
                });

                commentsContainer.removeChild(readMoreLink);
              });
            }

            postEl.appendChild(commentsContainer);
          });
      });

    post_container.appendChild(postEl);
  });
}