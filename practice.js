// let item1 = 5;
// let item2 = 10;

// let result1 = item1 + item2
// let result2 = item1 * item2
// let result3 = item1 - item2
// let result4= item1 / item2

// console.log("Resualt=", result1);
// console.log("Resualt=", result2);
// console.log("Resualt=", result3);
// console.log("Resualt=", result4);

// console.log("Resualt=", + result1, typeof result1);

// let name1 = "Hello";
// console.log(name1, typeof name1); 


// let v1 =10;
// let v2 =10.5;
// let v3 =true;
// let v4 =false;
// let v5 =null;
// let v6 =[10, 11, 44];
// let v7 ={"name": "Katya", "age": 27, "salary": 500};
// let v8 ="Hello";

// console.log(v1, typeof v1);
// console.log(v2, typeof v2);
// console.log(v3, typeof v3);
// console.log(v4, typeof v4);
// console.log(v5, typeof v5);
// console.log(v6, typeof v6);
// console.log(v7, typeof v7);
// console.log(v8, typeof v8);

// let item1 = 10;
// let item2 = 20;

// let result1 = item1 < item2;
// let result2 = item1 > item2;
// let result3 = item1 = item2;
// let result4 = item1 <= item2;
// let result5 = item1 >= item2;

// console.log("result1 = ", result1);
// console.log("result2 = ", result2);
// console.log("result3 = ", result3);
// console.log("result4 = ", result4);
// console.log("result5 = ", result5);

// if (result1){
//     console.log("result1 IF = ", result1)   
// };

// if (result2){
//     console.log("result2 IF = ", result2)   
// };

// if (item1 == item2){
//     console.log("result2 IF = ", result2)   
// };

// if (result1){
//     console.log("result1 IF = ", result1)}
//     else {
//         console.log("Other result")     
//     }  

//     if (result2){
//         console.log("result2 IF = ", result2)}
//         else {
//             console.log("Other result")     
//         } 



// let age1 = 30;


// let salary1 = 1000;
// let salary2 = 1500;
// let salary3 = 1000; 

// if (age1 < 30){
//         console.log("Salary =", salary1)   
//     } else if(age1 >= 30 && age1 < 40) {
//         console.log("Salary = ", salary2)}
//       else if (age1 >= 40 && age1 < 50) {
//             console.log("Salary = ", salary3)}
//        else{
//         console.log("Other result") 
//        }



let a = 5;
let b = 10;


let c1 = a > b;
let c2 = a < b;
let c3 = a == b;
let c4 = a != b;

// if (c1){
//   console.log('Result C1=', c1)
// } else if (c2){
//   console.log('Result C2=', c2)
// } else if (c3){
//   console.log('Result C3=', c3)
// } else if (c4){
//   console.log('Result C4=', c4)
// } else {
//   console.log('Other result')
// };


// if (c2){
//   console.log('Result C2=', c2)
//   if (c4){
//     console.log('Result C2 C4=', c4)  
//   }
// }

// let count = 0
// while (c2){
//   count++
//   console.log('Count ==', count)
// if (count == 10){
//   break
// } else if(count ==5){
//   continue
// }
// console.log('Count ==--==', count)
// }

// for (let i =0; i < 10; i++){

// if (i == 5){
//   break
// }

//   console.log('I ==',i)
// }


// let codes = [100, 200, 300, 400, 500]
// for (let i in codes){
//   console.log('I ==', i)
// }

// let codes = [100, 200, 300, 400, 500]
// console.log('Array ==', codes)
// for (let i in codes){
//   console.log('I ==', codes[i])

// if (codes[i] == 300){
//   codes[i] = 700
// }
// }
// console.log('New_Array ==', codes)







function f1(p1,p2){
     let a1 = p1
     let a2 = p2
     result_text = 'Hello! ' + p1 +' ' +p2
console.log(result_text)
return p1 + p2
}

f1('Katya', 10)
let func1 = f1(100, 10)
console.log(func1)
 


// function f2(name, message){

// // if (message === undefined){
// //   message = "Welcome!!"
// // }
// message = message || 'Welcome!!'

// return message + ' ' + name

// }
// console.log(f2('Katya', 'Hello!!!'))



// function f4(p1,p2){
//   if (p1 > p2){
//     return p1 - p2
//   }else if(p1 < p2){
//     return p1 + p2  
//   }else {
//     return 'p1 = p2'
//   }
// }
// console.log(f4(10, 4))

// let fs11 = () => console.log("OK!")
// fs11()


let n1 = 300
let n2 = 200

let fs33 = (n1 > n2) ?
    (p1,p2) => console.log("1_OK!", p1 - p2) 
    (p1,p2) => console.log("2_OK!", p1 + p2) 

fs33(n1,n2)    