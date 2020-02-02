const flatArrayAndRemoveObjects = require('./flatArrayAndRemoveObjects');

const data =  [ 1, true, { x: 20 }, 4, [10, 20, [ { y: 5 }] ], "hello" ];
const flattern = flatArrayAndRemoveObjects(data);
console.log(flattern);