// Chapter 17 to 20;
// Question1
// Part1
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ]
// document.write(matrix);
// Part2
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];
// var m;
// for(m of matrix){
//     document.write(m+"<br>")
// }


// Question 2
// for (var i =1; i<=10; i++){
//     document.write(i+"<br>")
// }


// Question3
// var table = +prompt("Enter Your Table");
// var lenght = +prompt("Enter Your Lenght");
// for(var i =1; i<=lenght; i++){
//     document.write(table+" x "+i+" = "+table*i +"<br>")
// }


// Question4
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write(fruits[0]+ "<br>")
// document.write(fruits[1]+ "<br>")
// document.write(fruits[2]+ "<br>")
// document.write(fruits[3]+ "<br>")
// document.write(fruits[4]+ "<br>")
// for(var i = 0; i<fruits.length; i++){
//     document.write("Element at index "+ i +" is " + fruits[i] +"<br>")
//     console.log(fruits[i])
// }


// Question5
// document.write("Counting :")
// for (var i = 1; i<=15; i++){
//     document.write(i+", ")
// }
// document.write("Reverse Counting :");
// for(var i = 10 ; i>=1; i--){
//     document.write(i+", ")
// }
// document.write("Even : <br>");
// for(var i =0; i<=20; i=i+2){
//     document.write(i+", ")
// }
// document.write("Odd : <br>")
// for(var i=1; i<=20; i=i+2){
//     document.write(i+", ")
// }
// document.write("Series : <br>");
// for(var i =2 ; i<=20; i=i+2){
//     document.write(i+"K"+", ")
// }



// Question6
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter Your Bakary Item");
// var flag = "no";
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === search) {
//         document.write(search + " is available at Index " + [i] + " is our bakery ")
//         flag = "yes"
//     }
// }

// if(flag === "no"){
//     document.write(" We are sorry " + search + " is not available " + " is our bakery ")
// }

// var cities = ["karachi","lahore","islamabad"];
    // var cityName = prompt("Enter your city name");
// var flag = "no";

// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === cityName){
//        flag = "yes";
//        break;
//     }
// }    

// if(flag === "yes"){
//     alert("Yes")
// }else{
//     alert("No")
// }


// var arr = [23,5,65,64,35,77,1,23];
// var max = 0;

// for(var i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max)


// var a = [24, 53, 78, 91, 12];
// var max = 0;
// for(var i =0; i<a.length; i++){
//     if(max < a[i]){
//         max=a[i]

//     }
// }
// console.log(max)

// var a = [24, 53, 78, 91, 12];
// var max = a[0];
// for(var i =0; i<a.length; i++){
//     if(max > a[i]){
//         max=a[i]

//     }
// }
// console.log(max)

// for(var i = 1; i<=20; i++){
//     document.write(i*5+",")
// }