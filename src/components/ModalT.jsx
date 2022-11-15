import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Image from 'react-bootstrap/Image'

export default function ModalT({show, handleClose, title, overview, ima}) {

      // movieInfo(modalData.movieOverview, modalData.movieName)     \
      // console.log(modalData.movieName)
      // console.log(modalData.movieOverview)
      // console.log(modalData.moviePoster
  
    
  return (
    <>

      <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Image src={`https://image.tmdb.org/t/p/w400/${ima}`} width="150"/> */}
          <div>
          {overview}
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
