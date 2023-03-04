/* in ts- array is heterogenous as well as homogenous
we dont need to give size to it
it is dyanamically growable and shrinkable
 

*/
var a = [];
var a1 = [];
var a2 = [1, 2.5, "krishna", true];
var a3 = [2.5, 45, 88];
for (var i = 0; i < a3.length; i++) {
    console.log("value of a " + a3[i] + "Index is" + i);
    console.log(a.join());
}
console.log(a3);
console.log(a3.join('\n'));
a3.forEach(function (kuchbhi, i, myvalu) {
    console.log(kuchbhi + " Index" + i + " " + myvalu);
});
