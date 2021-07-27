import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {

	function menu(evt) {
		window.location = "--------";
  }

return (

    <div>
      <h1>Lista de trabajos</h1>
      <p></p>
     <ul>

<ul class="nav">
				
				<li><a href="">ALGUNOS TRABAJOS ECHOS DURANTE EL SEMINARIO:</a>
					<ul>
						<li><a href="https://codesandbox.io/s/preguntas-plantillas-2jrdc?file=/src/index.js:884-947">Cuestionario<img src="https://freepikpsd.com/media/2019/10/acierto-png-5-Transparent-Images.png" align="center" width="120" height="60" alt="" /></a></li>
						<li><a href="https://codesandbox.io/s/individual-9jmtq?file=/App.js">Registro<img src="https://freepikpsd.com/media/2019/10/acierto-png-5-Transparent-Images.png" align="center" width="100" height="60" alt="" /></a></li>
            <li><a href="https://codesandbox.io/s/actividad-4-inicio-de-sesion-oxmym?file=/src/index.js">Inicio de sesion<img src="https://freepikpsd.com/media/2019/10/acierto-png-5-Transparent-Images.png" align="center" width="100" height="60" alt="" /></a></li>
						<li><a href="https://tareacecytemericivan601.blogspot.com/">blog<img src="https://freepikpsd.com/media/2019/10/acierto-png-5-Transparent-Images.png" align="center" width="100" height="60" alt="" /></a></li>
           
					</ul>
				</li>

       

			</ul>
      </ul>
			<button onClick={menu}> MENU PRINCIPAL </button>
      </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
