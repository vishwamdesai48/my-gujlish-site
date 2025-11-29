import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    // આ demo છે — અહીં તમે API call મૂકી શકો છો
    setSent(true)
    setTimeout(()=>{ setSent(false); setName(''); setMessage('') }, 2000)
  }

  return (
    <section className="page contact container-sm">
      <h1>Contact</h1>
      {sent ? <p className="success">Message sent!Thanks 🙂</p> : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input value={name} onChange={e=>setName(e.target.value)} required />
          </label>
          <label>
            Message
            <textarea value={message} onChange={e=>setMessage(e.target.value)} required />
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  )
}
