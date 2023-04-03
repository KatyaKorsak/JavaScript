/*1. Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел*/
// function summa(a, b){
//     let result = a + b
//     console.log('Сумма=', result)
//     }
//     summa(2, 3)


// /*2. Сделать функцию которая вернёт в консоль квадрат переданного числа*/

// function square(a, b){
//     let result = Math.pow(a, b)
//     console.log('Квадрат переданного числа =', result)
//     }
//     square(3, 2)


/*3. Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
{"name":И,
 "surname":Ф,
 "middlename":О}*/

//  function full_name(name,surname,middlename){
//   console.log(JSON.stringify({ name: 'Екатерина', surname: "Корсак", middlename: "Александровна"}, null, 2));}
//   full_name('Екатерина','Корсак','Александровна')


/*4. вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел.
Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"*/


function masSiv(...mass){
  let maS= []
  for(let i = 0; i < mass.length; i += 1 ){
      if (mass[i] % 2 == 0){
          maS.push(mass[i]);
      }
  }
  if(maS.length>0){
      return maS;
  } else {
      return 'No even numbers'
  }
}
let m = masSiv(29, 41, 61, 31, 4)
console.log(m)


















 
// / function even_numbers(num){
//     let mas= []
//     for(let i = 0; i < num.length; i += 1 ){
//         if (num[i] % 2 == 0){
//             mas.push(m[i]);
//         }
//     }
//     if(mas.length>0){ 
//         console.log(mas); 
//      } else { 
//          return 'No even numbers' 
//      }
// }
//   let mas = even_numbers(4, 56, 96)
//   console.log(mas)
    

//   function masSiv(...mass){
//     let maS= []
//     for(let i = 0; i < mass.length; i += 1 ){
//         if (mass[i] % 2 == 0){
//             maS.push(mass[i]);
//         }
//     }
//     if(maS.length>0){ 
//         console.log(maS); 
//      } else { 
//          return 'No even numbers' 
//      }
// }
//   let m = masSiv(29, 15, 31)
//   console.log(m)

  
 


// function Massive (MS){
//     for (let i=0; i<MS.length; i++){
//     let MS1 =MS[i];
//     if (MS1%2===0) {
//       console.log (MS1)}
//     else {(MS.length>0) ; console.log ("No even numbers")
//   }}}
//   let nums = [1,3,5,8,11,12,14,15,18,25,29,35];
//   Massive(nums)

