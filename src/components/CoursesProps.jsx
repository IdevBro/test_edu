import React from 'react'

function CoursesProps({ week, lvl, name, text, title }) {
    return (
        <div>
            <p>{week}</p>
            <p>{lvl}</p>
            <h2>{name}</h2>
            <h1>{text}</h1>
            <p>{title}</p>
        </div>
    )
}

export default CoursesProps
