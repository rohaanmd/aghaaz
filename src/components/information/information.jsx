import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data';
import "./_info.scss";

export default function Information() {

let { infoName } = useParams();
const [Data, setData] = useState({})


useEffect(() => {
    var temp = data.find(x => JSON.stringify(x.eventId) === infoName);

    setData({...temp})
}, [])

return (
    <div className='_information'>
         
         <div class="container">
  <div class="information">

<div className="_information_header">
<div className="_information_title">
      Know More
    </div>

<div className="_information_eventName">
{Data.eventName}
</div>
</div>

<div className="_information_body">
<h2 className="_information_body_subHeading">
Description</h2>

<p>
  {Data.description}
</p>

</div>
<div className="_information_body">
<h2 className="_information_body_subHeading">
Rules and Regulations
</h2>
<ol>
  {Object.keys(Data).length>0 && Data.rules.map((d,k)=><li key={k}>{d}</li>)}
</ol>


</div>
<div className="_information_body">
<h2 className="_information_body_subHeading">
Event Coordinators
</h2>
<ol>
  {Object.keys(Data).length>0 && Data.contact.s_coord.map((d,k)=><li key={k}>{d.name +" : "} <a href={`tel:${d.number}`}>+91 {d.number}</a>{" "}</li>)}
</ol>


</div>

<div className="_information_footer">

  <a className='fill' href={Data.rLink}>Register Now !!</a>
</div>



  


  </div>
  <div class="poster">
<img src={Data.poster} alt="" />

  </div>
</div>
    </div>
  )
}
