let answer = parseInt(prompt('gib number for buzzing and fizzing'))

for (let i = 1; i <= answer; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log('FizzBuzz!')
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
       console.log('buzz') 
    } else
    console.log(i)
}

