import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import {booksData} from "./booksData";
import  {Book} from  "./Book.js";



function BookList(){
  return <section className="booklist">
   {booksData.map((book,index)=>{
     const {img,title,author}= book;
 return (
   <Book key={book.index} {...book}>
</Book>
   
 );
   })}</section>;
  }




ReactDom.render(<BookList/>,document.getElementById('root'));