//Part One - Querying DOM Elements

/*
1. Write a function tha tputs a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function alwasy does the same thing, it requires not parameters!
2/=. Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.
 */

function addStrikethrough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = "line-through";
}

addStrikethrough();
twoStrings("40px", 'happy');

/*
 3. Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
 * 4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
 */


 function setImage(id, url){

    let image = document.querySelector('#' + id);
    // or '#${id}
    image.src = url;
    //adjust height as needed
    image.style.height = "300px";


 }
 setImage('image-1', 'https://www.familyholiday.net/wp-content/uploads/2013/09/Cool-Easy-Pumpkin-Carving-Ideas-_14.jpg');
 setImage('image-2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWeUUNdTqgjcGIcZRJfNfkTnmQQGoGcnbmGrIYa8qa9UBr_zhp-6F6ezRhZ5Mx530XJY&usqp=CAU');
 setImage('image-3', 'https://cdn.onekindesign.com/wp-content/uploads/2017/10/Creative-Halloween-Pumpkin-Carving-Ideas-24-1-Kindesign.jpg');

/*
This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
Now use it to remove the first two items from that list. You'll need to call it twice!
*/

function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}

removeArgument();
removeArgument();

//7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
//8. Try using it to change the size of any text on the page.

function twoStrings(size, id){
    let itemId = document.querySelector(`#${id}`)
    itemId.style.fontSize = size;
}

//Part Two - DOM Elements as Function Parameters
//1. These functions will take in DOM elements as parameters. They also don't need to return anything.


//element = ANY DOM Element
function addElementToList(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
}

//2. Let's use it! Create an image element in Javascript and pass it into your function.
let newImage = document.createElement('img');
newImage.src = "https://akamai-scene7.grandinroad.com/is/image/frontgate/157569_main?$wgih$";
newImage.style.height = "200px"

let newImage2 = document.createElement('img');
newImage2.src = "https://i.guim.co.uk/img/media/5cbefc6ca39ec6e2aed5123400507980425652bf/0_0_7117_4268/master/7117.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0cb827433607dd6ca9309a1eae086cf9";
newImage2.style.height = "200px";

let newText = document.createElement('li');
newText.innerText = "Hey!!"
addElementToList(newImage);
addElementToList(newText);
addElementToList(newImage2);


//3. Write a function that takes in an image element and midifies its height to be 30 pixels.
function resizeImage(image){
    image.style.height = "30px";
}

//4. Let's use it. Query an image element and ten pass it into the function. 
let testing1 = document.querySelector('#image-1');
resizeImage(testing1);

//5. Write a function that takes in an element and gives it the class invisible.
function inVisable(element){
    element.className = "invisible";
}

//6. Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)
let header = document.querySelector('h1');
inVisable(header);

//Part Three - Creating DOM Elements. 
//1. Write a function that takes in text and returns a new <li> with the given text parameters as its innerText.

//let newElement = '';
function newLi(text){
    let newItemLi = document.createElement('li')
    newItemLi.innerText = text;
    //newElement = newItemLi;
    //console.log(newElement);
    return newItemLi;
}
//2. Test it! Somewhere below this function, call it. Store the returned DOM element in the variable, then append it to the page (use your first function from part 2)

let newVariable = newLi('Yes, Yes, this new code worked!');
addElementToList(newVariable);


//3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.
function createNewHeader(hsize, text){
    let newHeader = document.createElement(`h${hsize}`);
     newHeader.innerText = text;
    return newHeader;
}

//4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

let newLiHeader = createNewHeader(3, "The Newly Created Header!");
addElementToList(newLiHeader);



