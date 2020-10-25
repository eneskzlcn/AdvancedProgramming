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
        book.author = this.name;
        this.books.push(book);
    }
    toString()
    {
        console.log(this.name+' ('+this.birth+')'+' with '+this.books.length+' books');
    }
    filterByPageNumber(pageNumber)
    {
        let a = new Set(); 
        for(let i=0;i <this.books.length;i++)
        {
            if(this.books[i].page > pageNumber)
            {
                a.add(this.books[i]);
            }
        }
        return a;
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
let author1 = new Author("Rumi",1273);
author1.addBook(new Book("Mesnevi",180));
author1.addBook(new Book("Divan",350));
let setOfBooksLongerThanOneHundredPage = author1.filterByPageNumber(100);
console.log(setOfBooksLongerThanOneHundredPage);
//creating a map that allows -> m.get["Rumi"]= 2(numberOfBooks)

let allAuthors = [];
allAuthors.push(author1);
let m = new Map();
for (let author of allAuthors)
{
    m.set(author.name,author.getNumberOfBooks());
}
m.get("Rumi");
//m.addAuthor(author1);
//console.log(m.get("Rumi"))