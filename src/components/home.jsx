import React from 'react';
import Navbar from './navbar';
import "./home.css";



function Home() {
  return (
        
        <ul className='products'>
            
            <li className='product'>
                <h1 className='product-name'>Misión</h1>
                <p>SIS constituye una propuesta innovadora en Colombia al promover la solidaridad a través de facilitar que las personas interesadas puedan vincularse de manera informada
                     a voluntariados (de mediano/largo plazo) donde -teniendo en cuenta sus talentos y afinidades- generen un impacto positivo. En este proceso, se visibiliza a las organizacione
                     s de/para voluntariado y se favorece que puedan conectar con personas interesadas en contribuir a las causas que promueven. Adicionalmente, SIS brinda formación,
                     acompañamiento y certificación del voluntariado realizado, así como acceso a investigaciones, memorias y estadísticas en materia de voluntariado.</p>
                <p>Gracias por visitar nuestra web y esperamos que disfrutes de tu experiencia en voluntariados con nosotros. ¡Disfruta de la magia de ayudar!</p>
         

      <footer>
        <p>Derechos de autor © {new Date().getFullYear()}. sis_@gmail.com</p>
      </footer>
         </li>
        </ul>
  );
}

export default Home;

