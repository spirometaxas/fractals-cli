const sierpinski_triangle = require('sierpinski-triangle-cli');
const sierpinski_carpet = require('sierpinski-carpet-cli');
const sierpinski_hexagon = require('sierpinski-hexagon-cli');
const hexaflake = require('hexaflake-cli');
const koch_snowflake = require('koch-snowflake-cli');
const koch_antisnowflake = require('koch-antisnowflake-cli');
const t_square = require('t-square-cli');
const triflake = require('triflake-cli');
const vicsek_fractal = require('vicsek-fractal-cli');

const SIERPINSKI_TRIANGLE_NAME = 'sierpinski-triangle';
const SIERPINSKI_CARPET_NAME = 'sierpinski-carpet';
const SIERPINSKI_HEXAGON_NAME = 'sierpinski-hexagon';
const SIERPINSKI_HEXAFLAKE_NAME = 'hexaflake';
const KOCH_SNOWFLAKE_NAME = 'koch-snowflake';
const KOCH_ANTISNOWFLAKE_NAME = 'koch-antisnowflake';
const T_SQUARE_NAME = 't-square';
const TRIFLAKE_NAME = 'triflake';
const VICSEK_FRACTAL_NAME = 'vicsek-fractal';

const SUPPORTED_NAMES = [
  SIERPINSKI_TRIANGLE_NAME,
  SIERPINSKI_CARPET_NAME,
  SIERPINSKI_HEXAGON_NAME,
  SIERPINSKI_HEXAFLAKE_NAME,
  KOCH_SNOWFLAKE_NAME,
  KOCH_ANTISNOWFLAKE_NAME,
  T_SQUARE_NAME,
  TRIFLAKE_NAME,
  VICSEK_FRACTAL_NAME,
];

const create = function(name, n, config) {
  if (name === undefined || !SUPPORTED_NAMES.includes(name.toLowerCase()) || n === undefined || n < 0) {
    return '';
  }
  
  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  if (SIERPINSKI_TRIANGLE_NAME === name.toLowerCase()) {
    return sierpinski_triangle.create(n, config);
  } else if (SIERPINSKI_CARPET_NAME === name.toLowerCase()) {
    return sierpinski_carpet.create(n, config);
  } else if (SIERPINSKI_HEXAGON_NAME === name.toLowerCase()) {
    return sierpinski_hexagon.create(n, config);
  } else if (SIERPINSKI_HEXAFLAKE_NAME === name.toLowerCase()) {
    return hexaflake.create(n, config);
  } else if (KOCH_SNOWFLAKE_NAME === name.toLowerCase()) {
    return koch_snowflake.create(n, config);
  } else if (KOCH_ANTISNOWFLAKE_NAME === name.toLowerCase()) {
    return koch_antisnowflake.create(n, config);
  } else if (T_SQUARE_NAME === name.toLowerCase()) {
    return t_square.create(n, config);
  } else if (TRIFLAKE_NAME === name.toLowerCase()) {
    return triflake.create(n, config);
  } else if (VICSEK_FRACTAL_NAME === name.toLowerCase()) {
    return vicsek_fractal.create(n, config);
  }
  return '';
}

module.exports = {
  create: create,
  SUPPORTED_NAMES: SUPPORTED_NAMES,
};