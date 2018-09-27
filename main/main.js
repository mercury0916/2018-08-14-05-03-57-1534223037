module.exports = function main(s) {
  return s.split('').map(function(x){return x - '0'}).reduce(function(x,y){return x + y;});
};
