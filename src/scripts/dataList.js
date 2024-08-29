
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
        newGenreEntry.innerText += musicGenre;

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


function addGenreToDataList(event, targetInputId){

    // Find the form element
    let formElement = document.getElementById("genresInputForm");
    // Use the form element.checkValidity() method and save the results
    let isFormValid = formElement.checkValidity();
    console.log("isFormValid value: " + isFormValid);

    // do a conditional based on that result value
    if (!isFormValid){
        formElement.reportValidity();
        return;
    } 


    // Find the form from the event
    // Prevent the form from doing its default behaviour (refreshing page)
    event.preventDefault();
    console.log("Add car to list function is now running!");

    // Find the input text field based on targetInputId
    // Grab the string value from the text field
    let targetTextInput = document.getElementById(targetInputId);
    // Push the string value into dataArray
    console.log(targetTextInput.value);

    // Push the string value into dataArray
	dataArray.push(targetTextInput.value);

	// Clear out the input field text to be blank again 
	targetTextInput.value = "";

	// Focus on the text input field again to enable quick data entry!
	targetTextInput.focus();
    
    alert("Submitted a new entry: " + dataArray[dataArray.length -1]);

	// call renderData() to update the page 
	renderData();
    
}

let formInputButton = document.getElementById("formInputButton");
formInputButton.addEventListener("click", (event) => addGenreToDataList(event, "genreInputText"))

