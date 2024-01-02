// Function to open the movies modal
function openMoviesModal() {
  var moviesModal = document.getElementById('moviesModal');
  moviesModal.style.display = 'block';
}

// Function to close the movies modal
function closeModal() {
  var moviesModal = document.getElementById('moviesModal');
  moviesModal.style.display = 'none';
}
// Your existing JavaScript functions remain unchanged

// Function to open the movies modal with dynamic content
function openMoviesModal() {
  var moviesModal = document.getElementById('moviesModal');
  var modalContent = moviesModal.querySelector('.modal-content ul');

  // Clear existing content
  modalContent.innerHTML = '';

  // Add new content (modify as needed)
  var movies = [
    { title: 'EMCRAFT', link: 'https://youtube.com/@itsemcraft?si=kvoD_XpjlPajnKAx' },
    { title: 'EZRAIN', link: 'https://youtube.com/@Ezrain?si=uixKgaV0CQSvoNY5' },
    { title: 'MINE ORE', link: 'youtube.com/c/mineoreyt' }
    // Add more movie items as needed
  ];

  movies.forEach(function(movie) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = movie.link;
    link.textContent = movie.title;
    listItem.appendChild(link);
    modalContent.appendChild(listItem);
  });

  moviesModal.style.display = 'block';
}

