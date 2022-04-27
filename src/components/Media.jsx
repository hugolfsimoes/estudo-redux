import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Media = ({ numeros: { min, max } }) => {
  return (
    <Card title="Media de Números" green>
      <div className='Media'>
        <span>
          <span>Resultado: </span>
          <strong>{(min + max) / 2}</strong>
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
export default connect(mapStateToProps)(Media);