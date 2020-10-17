class Author
{
    constructor(name,birth,books =[])
    {
        this.name = name;
        this.birth = birth;
        this.books = books;
    }
    addBook(book)
    {
        book.name = this.name;
        this.books.push(book);
    }
    toString()
    {
        console.log(this.name+' ('+this.birth+')'+' with '+this.books.length+' books');
    }
    filterByPageNumber(pageNumber)
    {
        let set = [];
        for(let i=0;i <this.books.length;i++)
        {
            if(this.books[i].page > pageNumber)
            {
                set.push(this.books[i]);
            }
        }
        return set;
    }
    getNumberOfBooks()
    {
        return this.books.length;
    }
}

class Book
{
    constructor(name,page)
    {
        this.name = name;
        this.page = page;
    }
}
class Map
{
    constructor(authors=[])
    {
        this.authors = authors;
    }
    get(authorName)
    {
        let bookNumber = 0;
        for(let i =0; i<this.authors.length;i++)
        {
            if(this.authors[i].name == authorName)
            {
                bookNumber = this.authors[i].getNumberOfBooks();
                break;
            }
        }
        return bookNumber;
    }
    addAuthor(author)
    {
        this.authors.push(author);
    }
}

let author1 = new Author("Rumi",1273);
author1.addBook(new Book("Mesnevi",180));
author1.addBook(new Book("Divan",350));
let setOfBooksLongerThanOneHundredPage = author1.filterByPageNumber(100);
//console.log(setOfBooksLongerThanOneHundredPage);
let m = new Map();
m.addAuthor(author1);
console.log(m.get("Rumi"))