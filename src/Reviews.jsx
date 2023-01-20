import React from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [index,setIndex] = React.useState(0)
   
  const {id,image,job,name,text} = people[index]
   
  const RandomNumber =(index) =>{
    let Rnumber;
    Rnumber = Math.floor(Math.random()* 4);
    if (Rnumber === index){
      RandomNumber(Rnumber)
    }
    return Rnumber
   }
   const checkNumber = (number) =>{
    if(number > 3){
      return 0
    }
    else if (number < 0){
      return 3
    }
    else{
      return number
    }
   }
   const nextNumber = () =>{
    setIndex((prev)=>{
      return checkNumber(prev + 1)
    })
   }
   const prevNumber = () =>{
    setIndex((prev)=>{
      return checkNumber(prev - 1)
    })
   }
  return (
    <article id={id} className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
        <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn"onClick={()=>prevNumber()}><FaChevronLeft /></button>
        <button className="next-btn" onClick={()=>nextNumber()}><FaChevronRight /></button>
      </div>
      <button onClick={()=>{setIndex(checkNumber(RandomNumber(index)))}} className="random-btn">surprise me</button>
    </article>
  );
};

export default Reviews;