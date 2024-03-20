import {useState} from 'react';
import people from './data';
import { MdMonitor,MdRefresh } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = ()=>{
  const [index, setIndex] = useState(0);
  const {name,job,text,image} = people[index];


  // const checknum = (number)=>{
  //   if(number > people.length-1){
  //       return 0 ;
  //     }
  //   if(number < 0 ){
  //       return people.length-1;
  //     }
  //   return number;
  // } 


  const nextPerson = ()=>{
    setIndex((currentIndex)=>{
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    })
  };
   const prevPerson = ()=>{
    setIndex((currentIndex)=>{
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    })
  };


  const randomPerson =()=>{
     let randomNumber = Math.floor(Math.random() * people.length);
     if(randomNumber == index){
       randomNumber = index+1;
     }
    console.log(randomNumber);
     const newIndex = randomNumber % people.length;
     setIndex(newIndex);
  }


  return (
    <main>
    <article className="review" >
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button type="button" className="prev-btn " onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className="btn" onClick={randomPerson}>
       <MdRefresh /> 
        </button>
    </article>
    </main>
    );
};

export default App;
