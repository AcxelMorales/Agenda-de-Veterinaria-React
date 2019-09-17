import React, { useState, useEffect, Fragment } from 'react';

import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  const crearCita = cita => {
    const nuevasCitas = [...citas, cita];
    setCitas(nuevasCitas);
  };

  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);

    setCitas(nuevasCitas);
  };

  const titulo = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administrar las Citas';

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita eliminarCita={eliminarCita} key={index} index={index} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
