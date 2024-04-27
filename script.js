const myLibrary = []; 
const container = document.querySelector(".book_cards_container")

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
}

const book1 = new Book("my title", "my author", "my pages", true);
const book2 = new Book("my title 2", "my author 2", "my pages 2", false);
myLibrary.push(book1, book2);
console.log(myLibrary); 

function addBookToLibrary(array) {
    //Loop through items
    for (let i = 0; i < array.length; i++) {
        //Create a new div within book_cards_container for every book added
        const card = document.createElement("div");
        card.classList.add("book_cards");
        container.appendChild(card); 
        //Create texts display for each div
        const title = document.createElement("h3"); 
        const author = document.createElement("h3"); 
        const pages = document.createElement("h3"); 
        const read = document.createElement("h3");  
        card.appendChild(title); 
        card.appendChild(author); 
        card.appendChild(pages); 
        card.appendChild(read); 
        //Display content of each book in each card
        for (let j = 0; j < Object.keys(array[i]).length; j++) {
            title.textContent = `Title: ${array[i].title}`; 
            author.textContent = `Author: ${array[i].author}`; 
            pages.textContent = `Pages: ${array[i].pages}`; 
            if (array[i].read == true) {
                read.textContent = "Read"; 
            } else {
                read.textContent = "Not Read"; 
            }
        }
    }
}

addBookToLibrary(myLibrary)