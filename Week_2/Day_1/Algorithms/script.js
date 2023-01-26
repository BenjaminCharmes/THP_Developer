function computeFactorialIt (n) {
  let result = 1;
  while (n > 1) {
      result = result * n;
      n -= 1;
  }
  return result;
}

function computeFactorialRec (n) {
  if (n <= 1) {
    return 1;
  } else {
      return n * computeFactorialRec(n-1);
  }
}

function computePowerIt (n, p) {
  let sum = n;  
  for(let i=2; i <= p; i++){
    sum *= n;
  }
  return sum;
}

function computePowerRec (n, p) {
  if(p===1){
    return n;
  }else{
    return n * recursion(n,p-1);
  }
}

function computeSquareRoot (n) {
  return Math.sqrt(n);
}

function isPrimeNumber (n) {
  let isPrime = true;
  if (n === 1) {
    isPrime = false;
  } else if (n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
      }
  }
  return isPrime
}

function findSupPrime (n) {
  if (isPrimeNumber(n)) {
    console.log(`${n} is a prime number`)
    } else {
      while (isPrimeNumber(n) === false) {
        n++;
        if (isPrimeNumber(n)) {
          console.log(`${n} is the nearest sup prime number`)
        }
      }
    }
}

function countValidQueens (n) {

}