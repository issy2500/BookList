import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";


//stateless function component or dump component
//always return JSX
//setup vars

const books =[
  { id:1,
  img:"https://images-na.ssl-images-amazon.com/images/I/81WuEQjTE1L._AC_UL200_SR200,200_.jpg",
  title: "The Princess Spy: The True Story of World War II Spy Aline Griffith, Countess of Romanones",
  author: "Larry Loftis",
},
{id:2,
  img:"https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg",
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones ",
  author: "James Clear",
},
{id:3,
  img:"https://images-na.ssl-images-amazon.com/images/I/41bChkOa4zL._AC_UL200_SR200,200_.jpg",
  title: "Think Again: The Power of Knowing What You Don't Know",
  author: "Adam Grant",
},

];



function BookList(){
  return <section className="booklist">
   {books.map((book,index)=>{
     const {img,title,author}= book;
 return (
   <Book key={book.index} {...book}>
</Book>
   
 );
   })}</section>;
  }


const Book = (props) =>{

const {img,title,author }=props;
 
return (
  <article className="book">
    <img src={img} alt=""/>
    <h4> {title} </h4>
    <h3> {author} </h3>
  
  </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));