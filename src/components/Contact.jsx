import React from 'react';
import pic from "./pic.png"

export default function Contact(props) {
  return (
    <div className='row mt-4 mb-3'>
        <hr />
        <div className="col-4 text-center"><img width={65} height={70} src={pic} alt="" /></div>
        <div className='col-4'>
        <h4>{props.contact.name}</h4>
        <p className='mt-0  text-primary'>{props.contact.email}</p>
        </div>
        <div className='col-2 text-end mt-3'>
        <i class="fa-regular fa-trash-can" onClick={()=>props.deleteContact(props.contact.id)}></i>
        </div>
        <hr />
    </div>
  )
}
