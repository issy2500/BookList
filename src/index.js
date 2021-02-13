import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";


//stateless function component or dump component
//always return JSX
//setup vars

const firstBook ={
  img:"https://images-na.ssl-images-amazon.com/images/I/81WuEQjTE1L._AC_UL200_SR200,200_.jpg",
  title: "The Princess Spy: The True Story of World War II Spy Aline Griffith, Countess of Romanones",
  author: "Larry Loftis",
}
const secondBook ={
  img:"https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg",
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones ",
  author: "James Clear",
}
function BookList(){
  return (
 <section className="booklist">
   <Book img={firstBook.img}  title ={firstBook.title} author={firstBook.author}/>
    <Book img={secondBook.img} title ={secondBook.title} author={secondBook.author} >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore cum animi voluptas
        temporibus quo delectus pariatur, hic voluptatum accusantium illo.
      </p>
</Book>
      
    <Book/>
    <Book/>
 </section>
  )
}

const Book = (props) =>{

const {img,title,author, children}=props;
  return (<article className="book">
    <img src={img} alt=""/>
    <h4> {title} </h4>
    <h3> {author} </h3>
    {props.children}
  </article>
  );
};

ReactDom.render(<BookList/>,document.getElementById('root'));



