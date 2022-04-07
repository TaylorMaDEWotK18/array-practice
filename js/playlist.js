const songsBaby = [ 'Get Down', 'Beat It', 'Rocket Man', 'Welcome to the Jungle', 'PTY'];

//#1) Create a function to take each of the elements in the array and place them in the item list. The function will need to accept the array as an argument to create the list. Inside the code block we'll create the items variable to store each list item for the playlist. With this items variable, I can build and store the entire string before returning it and displaying it on the page.

//#2) Create a for loop to loop through the array and keep adding list items to the length of the array

function createListItem(arr) {
    let items = '';
    for ( let x = 0; x < arr.length; x++ ) {
        items += `<li>${arr[x]}</li>`;
    }
    return items;
}

//Now we are going to write the code to display it on the page through the loop and interpolation.

document.querySelector('main').innerHTML = `
    <ol>
      ${createListItem(songsBaby)}
    </ol>
    `;
    
//This was just a quick little for loop challenge to loop through the array    
const temperatures = [100, 90, 99, 80, 70, 65, 30, 10];
for ( let i = 0; i < temperatures.length; i++ ) {
    console.log(temperatures[i]);
}