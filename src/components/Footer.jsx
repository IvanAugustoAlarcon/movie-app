import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center text-white" style={{backgroundColor:"#f1f1f1"}}>
        {/* <!-- Grid container --> */}
        <div className="container pt-2">
            {/* <!-- Section: Social media --> */}
            <section className="mb-1">
            {/* <!-- Facebook --> */}
            
            {/* <!-- Github --> */}
            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/IvanAugustoAlarcon"
                role="button"
                data-mdb-ripple-color="dark"
                ><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' style={{width: "1.5rem"}}></img>
                </a>
            <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/ivan-augusto-alarcon-herrera-b5b76b122/"
                role="button"
                data-mdb-ripple-color="dark"
                ><img src='https://png.pngtree.com/element_our/md/20180301/md_5a982744da73b.jpg' style={{width: "2rem"}}></img>
                </a>
            </section>
        </div>
            <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright
            </div>
        </footer>
        )
}
