const myLibrary = []; 
const container = document.getElementById("book_cards_container"); 
const dialog = document.querySelector("dialog"); 
const showButton = document.querySelector("dialog + button"); 
const confirmButton = document.getElementById("confirm"); 
const userBook = document.getElementById("title"); 
const userAuthor = document.getElementById("author"); 
const userPages = document.getElementById("pages"); 
const userRead = document.getElementById("read"); 

showButton.addEventListener("click", () => {
    dialog.showModal(); 
}); 

//When press submit, new Book object is created, then added into myLibrary array 
confirmButton.addEventListener("click", (event) => { 
    //If any input field is not empty, register a new book. Else, keep asking user for information 
    if (userBook.value.length != 0 && userAuthor.value.length != 0 && userPages.value.length != 0) {
        event.preventDefault(); 
        const book = new Book(userBook.value, userAuthor.value, userPages.value, userRead.checked); 
        myLibrary.push(book); 
        console.log(myLibrary); 
        addBookToLibrary(myLibrary); 
        userBook.value = ' '; 
        userAuthor.value = ' '; 
        userPages.value = 0;
        dialog.close(); 
    }  
})

//Book Constructor
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
}

// Manually adding example, please ignore
// const book1 = new Book("my title", "my author", "my pages", true);
// const book2 = new Book("my title 2", "my author 2", "my pages 2", false);
// const book3 = new Book("my title 3", "my author 3", "my pages 3", false); 
// myLibrary.push(book1, book2, book3);
console.log(myLibrary); 

function addBookToLibrary(array) {
    //Loop through items
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild); 
    }
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
        //Delete every children except the last one
        // container.removeChild(container.children[i-1]);
    }
    console.log(container.children.length); 
    // if (container.children.length > 1) {
    //     for (let k = container.children.length - 1; k < array.length; k--) {
    //         container.removeChild(container.children[k]);   
    //     }
    // }
    // console.log(container.children);
}

// addBookToLibrary(myLibrary); 