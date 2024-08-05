import React, { useEffect, useState } from 'react';

import "./App.css"

function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((r) => r.json())
    .then((json) => {
      setNutri(json);
    })
  }, []);

  return(
    <div>
      <header>
        <strong>React Nutri</strong>
      </header>

      <div className='container'>
        <div className='cards'>
          {nutri.map((item)=>{
            return(
              <div className='card-item'>
                <article key={item.id}>
                  <img src={item.capa} alt={item.titulo}/>
                  <strong>{item.titulo}</strong>
                  <p>{item.subtitulo}</p>
                  <span>{item.categoria}</span>
                </article>
              </div>
            );
          })}
        </div>
      </div>  
    </div>
  );
}

export default App;