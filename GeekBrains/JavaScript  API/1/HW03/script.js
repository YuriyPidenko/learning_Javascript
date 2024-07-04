const API_KEY = 'your_unsplash_api_key_here';
const photoElement = document.getElementById('photo');
const photographerElement = document.getElementById('photographer');
const likeBtnElement = document.getElementById('like-btn');
const likeCountElement = document.getElementById('like-count');

let likeCount = localStorage.getItem('likeCount') || 0;
likeCountElement.textContent = likeCount;

async function getRandomPhoto() {
    const apiKey = '0rMkNQyofnrDWRY0xfNfxI0v5y2hTXpBiuDOZb48jz8';
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const data = await response.json();
        photoElement.src = data.urls.regular;
        photographerElement.textContent = `Photo by ${data.user.name}`;
    } catch (error) {
        console.error('Error fetching random photo:', error);
    }
}

likeBtnElement.addEventListener('click', () => {
    likeCount++;
    likeCountElement.textContent = likeCount;
    localStorage.setItem('likeCount', likeCount);
});


getRandomPhoto();