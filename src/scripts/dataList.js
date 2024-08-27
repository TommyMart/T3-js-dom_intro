let dataArray = [
    "techno",
    "house",
    "disco",
    "ambient",
    "funk", 
    "soul"
]

let genreContainerElement = document.getElementById("genreContainer");


let genresContainerList = document.createElement("ul");

dataArray.forEach( (musicGenre) => {
    console.log(musicGenre);

    newGenreEntry = document.createElement("li");

    newGenreEntry.innerText += musicGenre;

    genresContainerList.appendChild(newGenreEntry);


});

genreContainerElement.appendChild(genresContainerList);




