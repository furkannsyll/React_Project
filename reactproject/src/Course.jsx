import React from 'react'

export default function Course({ title, description, image }) {
    // export default function Course(props) {
    // const title         = props.title
    // const description   = props.description
    // const { title, description } = props;

  return (
    <>
        <img src={ image } alt="img" />
        <div>{ title }</div>
        <div>{ description }</div>
    </>
  )
}
