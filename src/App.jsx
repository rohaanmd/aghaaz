import CardCustom from './components/card';
import Footer from './components/footer/footer';
import Headers from './components/header/header';
import { data } from './components/landingpage/data';
import './_style.scss';

function App() {





  return (

    <div classname="App">
<Headers />
  <header className="page-header">
    <h1 className="site-title" data-title="Aghaaz">Aghaaz
    </h1><br />
    <h2 className="page-sub-title">2022</h2>
    <br />
    <span style={{position:"relative"}}>
    <h2 className="page-title">A Management Fest</h2>
    <span className="span-title"> By Department of MBA</span>
    </span>
  </header>
  <main>
    <section className="flex-grid event-listing" >

{
  data.map((d,key)=>{
    console.log(d);
    return <CardCustom d={d} key={key} />
  })
}
    </section>

    

  </main>
<Footer/>
  
</div>
  );
}

export default App;
