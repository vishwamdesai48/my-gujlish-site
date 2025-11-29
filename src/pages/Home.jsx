import React from 'react'

export default function Home(){
  return (
    <section className="page home container-sm">
      <h1>Welcome to GujlishSite</h1>
      <p>Hey! આ website એક સાદુ React example છે. તારી પાસે content મૂકવો અને એમવી enhancement કરવી સાવ સરળ છે.</p>

      <div className="cards">
        <div className="card">
          <h3>Fast</h3>
          <p>Vite + React એટલે development lightning fast.</p>
        </div>
        <div className="card">
          <h3>Simple</h3>
          <p>Clean code structure અને React Router for multi-pages.</p>
        </div>
      </div>
    </section>
  )
}
