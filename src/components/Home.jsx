import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {getMovies} from '../services/MovieService'
import {searchMovie,pageMovie} from '../services/MovieService'
import ModalT from './ModalT'


export default function Home({searchvalue}) {

    const [movies, setMovies] = useState([])
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')
    const [overview, setOverview] = useState('')
    const [ima,setIma] = useState('')
    const [count, setCount] = useState(1)
    

    useEffect (() => {
        getMovies().then((data) =>{
        setMovies(data.results)
        })    
    },[])

    if(searchvalue.length > 0){
        searchMovie(searchvalue).then((data) => {
            setMovies(data.results)
        })
    } 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const pageChange = (pagenum) => {
        if((count + pagenum) > 0){
            setCount((count) => count + pagenum)
        }
        
    }
    if(searchvalue.length == 0){
    pageMovie(count).then((data) =>{
        setMovies(data.results)})
    }
    

  return (
    <>
        <div className="container">
            <div className='row'>
                {movies && movies.map((movieItem, index) => ( 

                <div className=' col-sm-12 col-md-6 col-lg-5 col-xl-3 card-size' key={index}>
                    <div className="card card-pointer" style={{width: "18rem"}} onClick={() => {handleShow(), setTitle(`${movieItem.title}`), setOverview(`${movieItem.overview}`), setIma(`${movieItem.poster_path}`)}}>  
                    <img className="card-img-top img-card" src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`} alt="Card image cap"/>               
                    </div>
                </div>
                    
                ))}
            </div>
        </div>
        <div className='div-button'>
            <button  className="btn btn-light" onClick={() =>{pageChange(-1)}}>&laquo; Previous</button>
            <button className="btn btn-light" onClick={() =>{pageChange(1)}}>Next &raquo;</button>
        </div>
        <ModalT show={show} handleClose={handleClose} title={title} overview={overview} ima={ima}/>
    </>
  )
}
