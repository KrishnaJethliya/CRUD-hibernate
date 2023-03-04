/* in ts- array is heterogenous as well as homogenous
we dont need to give size to it
it is dyanamically growable and shrinkable
 

*/
let a:number[]=[];
let a1:string[]=[];
let a2:any[]=[1,2.5,"krishna",true];
let a3=[2.5,45,88];

for (let i=0;i<a3.length;i++)

{ 
    console.log("value of a "+a3[i]+"Index is"+i);
    console.log(a.join());
}

console.log(a3);
console.log(a3.join('\n'));

a3.forEach(
    (kuchbhi,i,myvalu)=>
{
console.log(kuchbhi+" Index"+i+" "+myvalu)
}
);

let b:number[]=[7,8,9];
console.log("b"+b);
