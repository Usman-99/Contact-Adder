import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {
  const deleteContact=(id)=>{
    props.onDelete(id)
  }
  return (
    props.contactlist.map((contact,i)=>{
        return <Contact contact={contact} key={i} deleteContact={deleteContact}/>
    })
  )
}
