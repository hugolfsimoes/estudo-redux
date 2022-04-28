import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import './Intervalo.css';

import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/Actions/numerosAction';

const Intervalo = ({ numeros: { min, max }, alterarMinimo, alterarMaximo }) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={e => alterarMinimo(+e.target.value)}
            max={max} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            min={min}
            onChange={e => alterarMaximo(+e.target.value)} />
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
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);