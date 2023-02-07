const tempString = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, at.";

/* string includes */
// console.log("String includes ... ", tempString.includes("*123"));

/* string trim */
const tempString2 = "   Lorem Ipsum     ";
const trimmedString = tempString2.trim();
// console.log("String trim", tempString2.length, trimmedString.length)

/* string replace
Replace only single occurance.
*/

const tempReplaceEg = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, at.";
/**
 * string.replaceAll() is supported on node v15+
 */
const replacedString = tempReplaceEg.replace("o", '*')
// console.log([
//     tempReplaceEg,
//     replacedString,]);
/* string replace all
    Replaces every occurance that matches.
*/
const tempReplaceEg2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, at.";

const replacedString2 = tempReplaceEg2.replace(/o/g, '*');
console.log("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, at.".replaceAll("o", "*"));
// console.log([
//     tempReplaceEg2,
//     replacedString2,]);


/* string concat */
const str1 = 'Fist string';
const str2 = 'Second string';
console.log(str1.concat('test-111 ','123 ', 'pre ',' ', str2));