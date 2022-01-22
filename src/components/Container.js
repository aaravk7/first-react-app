import React from 'react'

const Container = (props) => {
    return (
        <div className="container pt-5">
            {props.children}
        </div>
    )
}

export default Container
