import React from 'react';
import Card from './Card';

export default function Sorteio() {
  return (
    <Card title="Sorteio de um número" purple>
      <div className='Sorteio'>
        <span>
          <span>Resultado: </span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  );
}
