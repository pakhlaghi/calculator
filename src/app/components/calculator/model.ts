
export enum opEnum {
  point,
  add,
  equal,
  minus,
  multiply,
  divide
}

export enum specialOpEnum {
  delete,
  clearAll,
  backSpace
}

export const operator = {
  [opEnum.point]: '.',
  [opEnum.add]: '+',
  [opEnum.equal]: '=',
  [opEnum.minus]: '-',
  [opEnum.multiply]: '*',
  [opEnum.divide]: '/'
}

export const specialOperator = {
  [specialOpEnum.delete]: 'C',
  [specialOpEnum.clearAll]: 'CE',
  [specialOpEnum.backSpace]: '←'
}
