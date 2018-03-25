var request = new XMLHttpRequest();
request.open("GET","json/problem-solving-books.json",true);
request.send();

var bookJSON;

request.onreadystatechange = function(){
  if ( request.readyState === 4 && request.status === 200 ) {
    bookJSON = JSON.parse(xhttp.responseText);
  }
 }  
 console.log(bookJSON);
  function displayBook(bookId){
     book = bookJSON.items[bookId];
     console.log(book);
     console.log(book.volumeInfo.title);
     document.getElementById("booktitle").innerHTML= book.volumeInfo.title;
     document.getElementById("author").innerHTML = book.volumeInfo.authors[0];
     if(book.saleInfo.listPrice == null )
        document.getElementById("price").innerHTML = "Not Available";
     else
        document.getElementById("price").innerHTML = book.saleInfo.listPrice.amount;
     document.getElementById("publisher").innerHTML = book.volumeInfo.publisher;
     console.log(book.volumeInfo.publisher);
     document.getElementById("year").innerHTML = book.volumeInfo.publishedDate;
     console.log(book.volumeInfo.publishedDate);
     document.getElementById("Description").innerHTML = book.volumeInfo.description;
     console.log(book.volumeInfo.description);
     document.getElementById("img").src = book.volumeInfo.imageLinks.thumbnail;
     document.getElementById("bookpreview").href = book.volumeInfo.previewLink;
    }

    displayBook(0);

    var currentBook = 0
    function setButtons() {
      bookCnt = bookJSON.items.length;
      console.log(bookCnt);
      
      if (currentBook == 0)
        document.getElementById("previous").disabled = true;

      if (currentBook == bookCnt - 1)
        document.getElementById("Next").disabled = true;

      
      if (currentBook > 0)
        document.getElementById("previous").disabled = false;

      
      if (currentBook < bookCnt - 1)
        document.getElementById("Next").disabled = false;
    }
    
    setButtons();

   
    function prev() {
      displayBook(--currentBook);
      setButtons();
    }
    setButtons();
    
    function next() {
      displayBook(++currentBook);
      setButtons();
    }
