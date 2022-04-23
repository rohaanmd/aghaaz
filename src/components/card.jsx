import React from 'react'
import Popup from 'reactjs-popup';
export default function CardCustom({d}) {

  const {s_coord,t_coord} = d.contact;
console.log(s_coord);

  return (
    <article className="flex-grid-item event-card">
<header className="event-card__header">
  <h1 className="event-card__date">
    <time datetime="dateTime">{d.date}</time>
    <span class="text-super">{d.superr}</span>
  </h1>
  <h2 className="event-card__city text-xl">{d.eventName}</h2>
  <h3 className="event-card__venue  text-xl">{d.venue}</h3>
</header>
<figure className="event-card__poster">
  <img className="tall" src={d.img} alt="imageDescription"/>
</figure>
<p className="event-card__desc copy-default">
{d.description}
</p>
<footer className="event-card__footer">
  <ul className="event-card__links">
    <li><a className="text-s link-default event-card__link" href={d.rLink}>Regester now</a></li>
    <Popup
    className='_contact'
            trigger={<li className="text-s link-default event-card__link"> Contacts </li>}
            position="top center"
            nested
          >
            <span className='_contact_content'>
              <h3 className="contact-head">Students co-ordinators</h3>
              <ol>
                  {s_coord.map((d,key)=> <li key={key}>{d.name} <br /> <a href={`tel:${d.number}`}>+91 {d.number}</a> </li>)}
                    </ol>
            </span>
            <span className='_contact_content'>
              <h3 className="contact-head">Teacher co-ordinator</h3>
              <ol>
              {t_coord.map((d,key)=> <li key={key}>{d} </li>)}
                
              
              </ol>
            </span>
          </Popup>
          

    {/* <li><a className="text-s link-default event-card__link" href="/">More Info</a></li> */}
  </ul>
</footer>
</article>
  )
}
