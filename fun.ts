/////////////////////////////////////////////////////////
///////   function argument  in typescript     //////////
////////////////////////////////////////////////////////


function fun()
{

    console.log("inside fun");
}

fun();

////////////////////////////////////////////////////////
/////////   addition of two number      ////////////////
/////////    positional argument   /////////////////////
////////////////////////////////////////////////////////

function addition(num1 : number , num2 : number)
{
    var ans : number =0;
    ans = num1 + num2 ;
    console.log("Addition is :",ans);
    console.log(i);
}

var i : number = 10;
var j : number = 11;
addition(i,j);   // addition(10,11)

//////////////////////////////////////////////////////
////// return statment (subtraction of two no) ///////
/////////////  positional argument ///////////////////
//////////////////////////////////////////////////////

function subtraction(num1 : number , num2 : number)
{
    var answer : number =0;
    answer = num1 - num2 ;
    return answer ;
}

var a : number = 10;
var b : number = 11;
var ret : number;
ret = subtraction(a,b);   // subtraction(10,11)
console.log("subtraction is :",ret);


////////////////////////////////////////////////////////
/////////////    Default argument     //////////////////
////////////////////////////////////////////////////////

function Area(Radius : number , PI : number = 3.14)
{
    var x : number = 0;
    x = PI * Radius * Radius;
    return x;

}

var no : number = 10.2;
var ret : number = 0;
ret = Area(no,7.12);
console.log("Area is :", ret);

ret = Area(no);
console.log("Area is :", ret);

/////////////////////////////////////////////////////////
////////////   optional argument     ///////////////////
////////////////////////////////////////////////////////

function gun (name : string , passport ? , nationality ="Indian" )
{
    console.log("Name is :",name);

    if(passport == undefined)
    {
        console.log("sorry id dont have passport");
    }
    else
    {
        console.log("passport number is :",passport);
    }
    console.log("nationality is :",nationality);
}

gun("rushi",4001);   //gun(10,11)

/////////////////////////////////////////////////////////
/////////   variable number of argument    //////////////
/////////////////////////////////////////////////////////

function mun( ...data:number[])
{
    console.log(data);
}

mun(10,20,30,40,50);

///////////////////////////////////////////////////////


