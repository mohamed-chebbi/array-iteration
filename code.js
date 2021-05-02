05/02/2021
ines/mohamed
//Q1
function arrayFor(array) {
    for (var i=0; i<array.length;i++){
    console.log(array[i])}}
    
    undefined
    arrayFor([1, 2, 3])
    VM374:3 1
    VM374:3 2
    VM374:3 3
 //Q2
  function arrayWhile(array) {
var i=0
 while(i<array.length)
        
 {
  console.log(array[i]) 
 i++}}
  undefined
  arrayWhile([1,2,3])
        
  VM103:6 1
  VM103:6 2
  VM103:6 3
  //Q3
   function sum(array) { var result=0
  for( var i=0;i<array.length;i++){
  result=result+array[i]}
  return result}
 undefined
 sum([1, 2, 3])
  6
  //Q4
function sumEveryOther(array) {var result=0
  for( var i=0;i<array.length;i=i+2){
   result=result+array[i]}
   return result}
  undefined
   sumEveryOther([1, 2, 3, 4, 5])
  9
   //Q5
   function sumStartAt(array, index) {var result=0
 for( var i=index;i<array.length;i++){
result=result+array[i]}
 return result}
 undefined
 sumStartAt([1, 2, 3, 4, 5], 1)
  14
 //Q6
 function sumUntil(array, index) {var result=0
 for( var i=0;i<index+1;i++){
 result=result+array[i]}
return result}
 undefined
 sumUntil([1, 2, 3, 4, 5], 2)
  6
  //Q7
  function subtractReverse(array) { var result=array[array.length-1]
   for( var i=array.length-2;i>=0;i--){
   result=result-array[i]}
  return result}
  undefined
  subtractReverse([1, 2, 3])
   0
   //Q8
 function product(array) {var result=1
   for(var i=0;i<array.length;i++)
    {result= result*array[i]}
 return result}
   undefined
   product([1, 2, 3])
 6
//Q9
 function average(array) {var result=0
  for(var i=0;i<array.length;i++)
  {result=result+array[i]}
{return result/array.length}}
                                                             
  undefined
  average([1, 2, 3])
  2
//Q10
  function square(array){
     var newArray=[]
 for (var i=0; i<array.length;i++){
                                            newArray[i]=array[i]*array[i];}
 return newArray;}
                                    
undefined
   square([1, 2, 3])
   (3) [1, 4, 9]
 //Q11
function isArray(array) {return  Array.isArray(array)}
   

undefined
isArray([1, 2, 3])
true
isArray("hi")
false
//Q12
function min(array){
    var min=array[0];
 for (var i=1;i<array.length;i++){
 if (array[i]<min){
   min=array[i]}}
 return min}
undefined
min([-1, 2, -3])
-3
min([-1, 2, 3])
//Q13
function max(array){
var max=array[0];
for (var i=1;i<array.length;i++){
 if (array[i]>max){
 max=array[i]}}
 return max}
undefined
max([1, 2, 3])
3
max([1, -2, -3])
1
//Q14
function shortestString(array){
 var shortest=array[0].length;  
 for (var i=1; i<array.length;i++){
if (array[i].length<shortest) {
  shortest=array[i].length}}
return shortest; 
}
undefined
shortestString(["hi","cat", "hello"])
2
shortestString(["lol","kitty", "hey"])
3
//Q15
function longestString(array){
 var longest=array[0].length;  
 for (var i=1; i<array.length;i++){
if (array[i].length>longest) {
longest=array[i].length}}
return longest; 
}
undefined
longestString(["hi","cat", "hello"])
5
longestString(["lol","cuttie", "hey"])
6
//Q16
function minMax(array){
  var result=[];
 result[0]=Math.min(...array);
result[1]=Math.max(...array);
 return result}
undefined
minMax([1, 5, 4, 3])
(2) [1, 5]
//Q17
function shortestStringNew(array){
 var shortest=array[0].length;  
 var string=array[0];
 for (var i=1; i<array.length;i++){
  if (array[i].length<shortest) {
  shortest=array[i].length
  string=array[i]}}
return string; 
}
undefined
shortestStringNew(array)
"hi"
function longestStringNew(array){
 var longest=array[0].length;
 var string=array[0];  
  for (var i=1; i<array.length;i++){
if (array[i].length>longest) {
  longest=array[i].length
 string=array[i]}}
return string; 
}
undefined
longestStringNew(array)
"hello"
function shortestLongest(array){
 var result=[];
result[0]=shortestStringNew(array);
 result[1]=longestStringNew(array);
  return result;}
undefined
shortestLongest(['hi','cat','hello'])
(2) ["hi", "hello"]
//Q18
function multiplyBy(array, number){
  return array.map(x => x * number);}
undefined
multiplyBy([1,5,4,3],2)
(4) [2, 10, 8, 6]
//Q19
function multiplyByIndex(array){
 var newArray=[];
 for (var i=0; i< array.length;i++){
 newArray[i]=array[i]*i;}
return newArray;}
undefined
multiplyByIndex([1, 5, 4, 3])
(4) [0, 5, 8, 9]
//Q20
function lengths(array){
  var newArray=[];
for (var i=0;i<array.length;i++){
  newArray[i]=array[i].length}
 return newArray}
undefined
lengths(['hi','cat','hello'])
(3) [2, 3, 5]
//Q21
function lengths(array){
 var newArray=[];
 for (var i=0;i<array.length;i++){
 newArray[i]=array[i].length}
   return newArray}
function sum(array) { var result=0
  for( var i=0;i<array.length;i++){
    result=result+array[i]}
  return result}
undefined
function totalNumberCharacters(array){
   return sum(lengths(array));
}
undefined
totalNumberCharacters(['hi','cat','hello'])
10
//Q22
function lengths(array){
 var newArray=[];
    for (var i=0;i<array.length;i++){
newArray[i]=array[i].length}
    return newArray}
    function filterEvenLengthWords(array){ var result=lengths(array);
 var finalResult=[];
  var j=0;
   for (var i=0; i<result.length;i++){
  if (result[i]%2===0){
 finalResult[j]=array[i];
   j++}}
    return finalResult}
 //Q23
    function popLastElement(array){
for (var i=0;i<array.length;i++)
{array[i].pop()}
 return array}
  undefined
 popLastElement([[1 , 2, 3, 4], [1, 2], [3, 4, 5]])
//Q24
function pushLastElement(array, element) {
 for (var i=0;i<array.length;i++)
 {array[i].push()}
 return array}
 undefined
pushLastElement ([[2, 3], [2], [3, 4]], 1)
(3) [Array(2), Array(1), Array(2)]0: (2) [2, 3]1: [2]2: (2) [3, 4]length: 3__proto__: Array(0)
 //Q25

function sum(array) { var result=0
for( var i=0;i<array.length;i++){
result=result+array[i]}
return result}
undefined
function sumArrays(array) {var result=0
for (var i=0;i<array.length;i++)
{result=result+sum(array[i])}
return result}
undefined
sumArrays ([[1, 2, 3, 4],[1, 2],[3, 4, 5]])
25
//Q26
function multiplyBySmallest(array){return array.map(x =>x*Math.min(...array))}
undefined
multiplyBySmallest([2, 3, 4])
(3) [4, 6, 8]
//Q27
function joinArrays(array) {return array.flat()}

undefined
joinArrays ([[2, 3], [2], [3, 4]])
(5) [2, 3, 2, 3, 4]
//Q28
function sumOddEven(array){
var sumOdd=0;
 var sumEven=0;
 for (var i=0;i<array.length;i++){
  if (array[i]%2===0){
sumEven=sumEven+array[i]}
else {sumOdd=sumOdd+array[i]}}
return [sumOdd,sumEven]}

undefined
sumOddEven ([1, 3, 2, 4])
(2) [4, 6]

//Q29
function shortestOfMixed(array){
var newArray=[];
var j=0;
for (var i=0; i<array.length;i++){
 if (typeof array[i] ==='string'){
 newArray[j]=array[i];
 j++;}}
if (newArray[0]!==undefined){
 return  shortestStringNew(newArray)}
else {return ""}}
undefined
shortestOfMixed ([4, 2, 5])
""
shortestOfMixed ([4, 'two', 2, 'three'])
"two"
//Q30
function smallestOfMixed(array){
var newArray=[];
var j=0;
for (var i=0; i<array.length;i++){
     if (typeof array[i] ==='number'){
newArray[j]=array[i];
 j++;}}
if (newArray[0]!==undefined){
 return  Math.min(...newArray)}
else {return 0}}
undefined
smallestOfMixed([4,'two',2,'three'])
2
smallestOfMixed(['two','too','three'])
0
