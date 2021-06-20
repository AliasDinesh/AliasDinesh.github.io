import {url, apiKey, movieId} from './MoviesApi.js';

const movie1 = document.querySelector('.movie-1');
const movie2 = document.querySelector('.movie-2');
const movie3 = document.querySelector('.movie-3');

/*async function ShowMovies() {
    try {
        const response = await fetch(
            `${url}/${apiKey}/${movieId[0]}/FullActor,Trailer,Ratings,`
            );

        const data = await response.json();
        console.log(data);
    }
    catch(e) {
        alert("The api doesn't work")
        console.log(e);
    }
}*/

const movie1Image = document.querySelector('.movie1-img');
const imgData = `{ "image": "https://imdb-api.com/images/original/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_Ratio0.6791_AL_.jpg" }`;
const img = JSON.parse(imgData);

movie1Image.src = img.image;