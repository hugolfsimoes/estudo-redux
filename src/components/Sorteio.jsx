import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Sorteio = ({ numeros: { min, max } }) => {
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Sorteio de um número" purple>
      <div className='Sorteio'>
        <span>
          <span>Resultado: </span>
          <strong>{aleatorio}</strong>
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
export default connect(mapStateToProps)(Sorteio);