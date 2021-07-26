/////////////////////////////////////////////////////////
///////////    function in typescript //////////////////
///////////////////////////////////////////////////////
function fun() {
    console.log("inside fun");
}
fun();
//////////////////////////////////////////////////////
/////////// addition of two number //////////////////
/////////    positional argument   ///////////////////
function addition(num1, num2) {
    var ans = 0;
    ans = num1 + num2;
    console.log("Addition is :", ans);
    console.log(i);
}
var i = 10;
var j = 11;
addition(i, j); // addition(10,11)
//////////////////////////////////////////////////////
////// return statment (subtraction of two no) //////
/////////////  positional argument ///////////////////
function subtraction(num1, num2) {
    var answer = 0;
    answer = num1 - num2;
    return answer;
}
var a = 10;
var b = 11;
var ret;
ret = subtraction(a, b); // subtraction(10,11)
console.log("subtraction is :", ret);
////////////////////////////////////////////////////////
/////////////    Default argument     //////////////////
////////////////////////////////////////////////////////
function Area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var x = 0;
    x = PI * Radius * Radius;
    return x;
}
var no = 10.2;
var ret = 0;
ret = Area(no, 7.12);
console.log("Area is :", ret);
ret = Area(no);
console.log("Area is :", ret);
/////////////////////////////////////////////////////////
////////////   optional argument     ///////////////////
////////////////////////////////////////////////////////
function gun(name, passport, nationality) {
    if (nationality === void 0) { nationality = "Indian"; }
    console.log("Name is :", name);
    if (passport == undefined) {
        console.log("sorry id dont have passport");
    }
    else {
        console.log("passport number is :", passport);
    }
    console.log("nationality is :", nationality);
}
gun("rushi", 4001); //gun(10,11)
/////////////////////////////////////////////////////////
/////////   variable number of argument    //////////////
/////////////////////////////////////////////////////////
function mun() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data);
}
mun(10, 20, 30, 40, 50);
///////////////////////////////////////////////////////
