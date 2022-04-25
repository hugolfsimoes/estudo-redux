import React from 'react';
import Card from './Card';

export default function Soma() {
  return (
    <Card title="Soma de Números" blue>
      <div className='Soma'>
        <span>
          <span>Resultado: </span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  );
}
