import React from 'react';
import Card from './Card';

export default function Media() {
  return (
    <Card title="Media de Números" green>
      <div className='Media'>
        <span>
          <span>Resultado: </span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
}
