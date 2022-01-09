import React from 'react'

const Card = (props) => {
    return (
        <div className="card col-4">
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-danger">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card
