import React from 'react';

export const Book = (props) =>{
  

const {img,title,author }=props;
 
return (
  <article className="book">
    <img src={img} alt=""/>
    <h4> {title} </h4>
    <h3> {author} </h3>
  </article>
  );
}