
//Action Creator
export const alterarNumeroMinimo = (novoNumero) => {
  return {
    type: 'NUM_MIN_ALTERADO',
    payload: novoNumero
  };
};