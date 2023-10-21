import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Movie from './movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

function Row({title, fetchUrl}){

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        axios.get(fetchUrl)
        .then((response) => {
            setMovies(response.data.results);
        })
    },[fetchUrl])

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
   <>
     <h2 className= 'text-white font-bold md:text-xl pd-4'>{title}</h2>
        <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft}
         className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
         size={40} />

            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id)=>(
                    <Movie key={id} item ={item}/>
                ))}
            </div>
            
        <MdChevronRight  onClick={slideRight}
        className= 'bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
        size={40} />
        </div>
   </>
  )
}

export default Row