
// Declare data to use in the logic
let dataArray = [
    "Techno",
    "House",
    "Disco",
    "Ambient",
    "Funk", 
    "Soul",
    "Hip-Hop",
    "Nu Jazz",
    "Jazz",
    "Experimental",
    "Punk",
    "Folk",
    "Kraut Rock"
]

// Find elements on the page for us to use in the logic
let genresContainerElement = document.getElementById("genresContainer");

function renderData(){

    // Clear any existing content
    genresContainerElement.innerText = "";

    // Create elements to add to the page via the logic
    let genresContainerList = document.createElement("ul");

    // Do logic for each individual item in the array
    dataArray.forEach((musicGenre) => {

        // Verify what we are working with, just log it to see the data's value 
        console.log(musicGenre);

        // Verify what we are working with, just log it to see the data's value
        let newGenreEntry = document.createElement("li");

        // Create new HTML element to help us format the data's value
        newGenreEntry.innerText += (musicGenre + " \n");

        // Add a button to each entry
        // click on the button to remove the entry from the list
        let removeButton = document.createElement("button"); 

        removeButton.innerText = `Remove ${musicGenre}`;

        removeButton.onclick = (() => removeGenreFromDataList(musicGenre));

        // Add the removeButton to the genre entry
        newGenreEntry.appendChild(removeButton);

        // add the nicely formatted element into the list container
        genresContainerList.appendChild(newGenreEntry);


    });

    // Add the list container onto the actual HTML page
    genresContainerElement.appendChild(genresContainerList);
}



function removeGenreFromDataList (targetItemToRemove) {
    // remove the target item from the dataArray
    dataArray = dataArray.filter((musicGenre) => musicGenre != targetItemToRemove);

    // After the filtering is done, re-render the page with the new array
    renderData();
}


