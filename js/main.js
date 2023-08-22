const access_key = 'BW8bIT_ItI-pC4-4rylFRg550gwSbWlQ_TKQqr3Bwc8';
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=5`;

const gallery = document.querySelector('.gallery');

let allImages;

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    });

    const makeImages = (data) => {
        data.forEach((item, index) => {
    
            let img = document.createElement('img');
            img.src = item.urls.regular;
            img.className = 'gallery-img';
            gallery.appendChild(img);

            // img.addEventListener('click', () => {
            //     currentImage = index;
            //     showPopup(item);
            // })
    
        })
    }

    let searchParam = location.search.split('=').pop();
    const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=20`; 

    const searchImages = () => {
        fetch(search_photo_url)
        .then(res => res.json())
        .then(data => {
            allImages = data.results;
            makeImages(allImages);
    });
}
searchImages(); 
  
}
getImages();

// if(searchParam == ''){
//     getImages();
// } else{
//     searchImages();
// }

