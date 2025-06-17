var a= 10;
var b=20;
console.log(a+b);

function area(l,b)
{
    console.log(l*b);
}
area(10,20)

function multiply(c,d){
    return c*d;
}
var total=multiply(2,3);
console.log(total);


function praisy(){
    console.log("HI praisy");
}
function viji(){
    console.log("Hi viji")
}
viji()
praisy()

function add()
{
    console.log(a+b);
}
add()
 var fplayer="Ronaldo";
 var fage="100";
 var fgame="cricket";
function favourite(){
    console.log( "Favourite player:"+fplayer)
    console.log( "Favourite Age :"+fage)
     console.log("Favourite Game:"+fgame);
}
favourite()

var homework=false;
if(homework){
    console.log("Great Job")
}
else{
    console.log("finish your homework before playing")
}
var cookies=true;
if(cookies){
    console.log("Would you like to eat cookies?");
}
else{
    console.log("Time to bake cookies")
}
var birthday=true;
if(birthday){
    console.log("It's your day HAPPY BIRTHDAY!!")
}
else{
    console.log("Have a great day")
}
var season = "winter";
if(season == "spring"){
    console.log("Enjoy the blooming summer");
}
if(season == "summer")
{
    console.log("Have fun in the sun");
}
if(season == "fall"){
    console.log("Enjoy the colorful leaves");
}
if(season == "winter"){
    console.log("Bundle up and stay warm");
}
var score=100;
if( score >= 50)
{
    console.log("study well");
}
if(score >= 70)
{
    console.log("good");

}
if(score>=100)
{
    console.log("Excellent");
}
var num=11;
if(num%2){
    console.log("This is odd");
}
else{
    console.log("This is even");
}
var char='b';
if( char == 'a'|| char== 'e' ||char== 'i' || char=='o' ||char=='u' ){
    console.log("Vowels")
}
else{
    console.log("consonents")
}

for(count=1;count<=10;count++){
    console.log(count);
}
for(count=10;count>=1;count--)
{
    console.log(count);
}
for(count=0;count<=10;count+=2)
{
    console.log(count)
}
for(i=2;i<=10;i++){
    console.log(i+"x2="+(i*2))
}