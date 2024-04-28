import React from 'react'

export default function Course({ title, description }) {
    // export default function Course(props) {
    // const title         = props.title
    // const description   = props.description
    // const { title, description } = props;

  return (
    <>
        <div>{ title }</div>
        <div>{ description }</div>
    </>
  )
}
