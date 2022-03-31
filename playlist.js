const songsBaby = [ 'Get Down', 'Beat It', 'Rocket Man', 'Welcome to the Jungle'];

//#1) Create a function to take each of the elements in the array and place them in the item list. The function will need to accept the array as an arguement to create the list. Inside the code block we'll create the items variable to store each list item for the playlist. With this items variable, I can build and tore the entire string before returning it and displaying it on the page.

//#2) Create a for loop to loop through the array and keep adding list items to the length of the array

function createListItem(arr) {
    let items = '';
    for ( x = 0; x < arr.length; x++ ) {
        items = `<li>${arr[x]}</li>`;
    }
    return items;
}

