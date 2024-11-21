

import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
function MovieList({genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList






































// import React, { useEffect, useRef, useState } from 'react';
// import GlobalApi from '../Services/GlobalApi';
// import MovieCard from './MovieCard';
// import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
// import HrMovieCard from './HrMovieCard';

// function MovieList({ genreId, index_ }) {
//     const [movieList, setMovieList] = useState([]);
//     const [selectedMovie, setSelectedMovie] = useState(null); // State to hold the clicked movie
//     const elementRef = useRef(null);

//     useEffect(() => {
//         getMovieByGenreId();
//     }, []);

//     const getMovieByGenreId = () => {
//         GlobalApi.getMovieByGenreId(genreId).then((resp) => {
//             setMovieList(resp.data.results);
//         });
//     };

//     const slideRight = (element) => {
//         element.scrollLeft += 500;
//     };
//     const slideLeft = (element) => {
//         element.scrollLeft -= 500;
//     };

//     const handleMovieClick = (movie) => {
//         setSelectedMovie(movie); // Set the clicked movie
//     };

//     const closePlayer = () => {
//         setSelectedMovie(null); // Close the video player
//     };

//     return (
//         <div className="relative">
//             {/* Left Scroll Button */}
//             <IoChevronBackOutline
//                 onClick={() => slideLeft(elementRef.current)}
//                 className={`text-[50px] text-white
//                   p-2 z-10 cursor-pointer 
//                   hidden md:block absolute
//                   ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
//             />

//             {/* Movie List */}
//             <div
//                 ref={elementRef}
//                 className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
//             >
//                 {movieList.map((item, index) => (
//                     <div key={item.id} onClick={() => handleMovieClick(item)} className="cursor-pointer">
//                         {index_ % 3 === 0 ? (
//                             <HrMovieCard movie={item} />
//                         ) : (
//                             <MovieCard movie={item} />
//                         )}
//                     </div>
//                 ))}
//             </div>

//             {/* Right Scroll Button */}
//             <IoChevronForwardOutline
//                 onClick={() => slideRight(elementRef.current)}
//                 className={`text-[50px] text-white hidden md:block
//                   p-2 cursor-pointer z-10 top-0
//                   absolute right-0 
//                   ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
//             />

//             {/* Video Player Modal */}
//             {selectedMovie && (
//                 <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//                     <div className="relative w-full max-w-4xl h-[70vh] bg-gray-900 rounded-lg overflow-hidden">
//                         <iframe
//                             src={`https://www.youtube.com/embed/${selectedMovie.videoId}`}
//                             title={selectedMovie.title}
//                             className="w-full h-full"
//                             allow="autoplay; encrypted-media"
//                         ></iframe>
//                         <button
//                             onClick={closePlayer}
//                             className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default MovieList;














