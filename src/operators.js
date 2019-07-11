import { createAnimatedOperator } from './core/AnimatedOperator';

const operator = createAnimatedOperator;

export const add = operator('add');
export const sub = operator('sub');
export const multiply = operator('multiply');
export const divide = operator('divide');
export const pow = operator('pow');
export const modulo = operator('modulo');
export const sqrt = operator('sqrt');
export const sin = operator('sin');
export const cos = operator('cos');
export const exp = operator('exp');
export const round = operator('round');
export const lessThan = operator('lessThan');
export const eq = operator('eq');
export const greaterThan = operator('greaterThan');
export const lessOrEq = operator('lessOrEq');
export const greaterOrEq = operator('greaterOrEq');
export const neq = operator('neq');
export const and = operator('and');
export const or = operator('or');
export const defined = operator('defined');
export const not = operator('not');
export const tan = operator('tan');
export const acos = operator('acos');
export const asin = operator('asin');
export const atan = operator('atan');
