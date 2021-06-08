let count = 5;

function ButtonPressed(){
  location.replace("https://youtu.be/dQw4w9WgXcQ");
}

const posts = document.querySelectorAll('.gallery-item');

posts.forEach(post => {
  post.addEventListener('click', () => {
    const imgUrl = post.firstElementChild.src.split("?")[0];
    window.open(imgUrl, '_blank');
  });
});
