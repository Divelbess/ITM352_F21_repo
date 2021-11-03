
var attributes = "Brandon;21;21.5;-20";

var parts =attributes.split(";");
// for(part of parts) {
//     console.log(`${part} isNonNegInt: ${isNonNegInt(part)}`)
// }

parts.forEach((item, index) => {console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);});
function isNonNegInt(q, returnErrors = false) {
    errors = []; 
if(Number(q) != q) errors.push('Not a number!'); 
if(q < 0) errors.push('Negative value!'); 
if(parseInt(q) != q) errors.push('Not an integer!'); 
    return returnErrors ? errors : (errors.length == 0)
}    
