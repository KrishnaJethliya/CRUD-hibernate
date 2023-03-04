function add1(a:number,b?:number)
{
console.log("value of a"+a);
console.log("value of b"+b);
console.log("value of a+b is"+(a+b!));
console.log("here value of b is optional and value of a is compulsory to give and give '!' this sign to optional things");

}
add1(10,8);
add1(15);


function add2(a?:number,b?:number)
{
    console.log("value of a is optional here so given sign ! where we are performing operation only "+a!);
    console.log("value of b is optional here so given sign ! where we are performing operation only "+b!);
    console.log("value of a+b "+a!+b!);
    console.log("when we make first parameter optional all parameters after it must be optional ");
}
add2(5,6);
add2();


function add3(a:number,b:number=10)
{
    console.log("here value of a is compulsory to give "+a);
    console.log("here value of b is default so if we not assign value it will take default value" +b);
    console.log(" addition will be  "+(a+b!));
    
}

add3(20);
add3(30,45);


function add4(a:number=11,b:number)
{
console.log("here value of a is default but no use as we have to give value always to a then only we can give value to b");
console.log('addition is '+(a+b));
}
add4(5,44);


function add5(a:number=11,b?:number)
{
console.log("here value of a is default and of b is optional "+a);
console.log("here value of b is optional so we can use default value of a by giving ! sign to b");
console.log('addition is '+(a+b!));
}
add5(5,44);
add5(1);




























