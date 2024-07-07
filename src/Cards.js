import React from 'react'

const Cards = (props) => {
  return (
    <>
    <div className="card" style={{ width: "18rem" }}>
            <img
              src={props.img}
              className="card-img-top w-full h-[16rem] object-cover"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title w-full h-10">{props.name}</h5>
             
              <a href={props.link} className="btn btn-primary">
                Order now
              </a>
            </div>
          </div>
    </>
  )
}

export default Cards