import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import './Intervalo.css';

import { alterarNumeroMinimo } from '../store/Actions/numeros';

const Intervalo = ({ numeros: { min, max }, alterarMinimo }) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={e => alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    numeros: state.numeros
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    alterarMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);