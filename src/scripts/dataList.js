
// Declare data to use in the logic
let dataArray = [
    "techno",
    "house",
    "disco",
    "ambient",
    "funk", 
    "soul"
]

// Find elements on the page for us to use in the logic
let genreContainerElement = document.getElementById("genreContainer");

// Create elements to add to the page via the logic
let genresContainerList = document.createElement("ul");

// Do logic for each individual item in the array
dataArray.forEach( (musicGenre) => {
    console.log(musicGenre);

    // Verify what we are working with, just log it to see the data's value
    newGenreEntry = document.createElement("li");

    // Create new HTML element to help us format the data's value
    newGenreEntry.innerText += musicGenre;

    // add a button to each entry
    // click on the button to remove the entry from the list
    // let removeButton = docutmentElement("button"); same as below
    removeButton.innerText = `Remove ${musicGenre}`;
    // Add the removeButton to the genre entry
    newGenreEntry.appendChild(removeButton);

    // add the nicely formatted element into the list container
    genresContainerList.appendChild(newGenreEntry);


});

// Add the list container onto the actual HTML page
genreContainerElement.appendChild(genresContainerList);




