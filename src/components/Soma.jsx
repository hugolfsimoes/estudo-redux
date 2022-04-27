import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Soma = ({ numeros: { min, max } }) => {
  return (
    <Card title="Soma de Números" blue>
      <div className='Soma'>
        <span>
          <span>Resultado: </span>
          <strong>{min + max}</strong>
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
export default connect(mapStateToProps)(Soma);