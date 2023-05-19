// Count By X

function countBy(x, n) {
    let z = [];
    let firstNumberOfArray = x;
    let arrayMultiplier = n;
    
    for(i = 1; i <= arrayMultiplier; i++) {
      let results = i * firstNumberOfArray;
      z.push(results);
    }
    return z;
  }