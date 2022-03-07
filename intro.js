console.log("swagat hai sabka");
console.log("FOR LOOP");
for(let i=0;i<3;i++){
    console.log(i);
}
console.log("WHILE LOOP");
let j=2;
while(j>=0){
    console.log(j);
    j--;
}
console.log("QUESTION IS PRIME ?");
let m=32;
let count=0;
for(let k=2;k*k<=m;k++){
    if(m%k==0){
        count++;
    }
}
if(count==0){
console.log("Prime");
}else{
    console.log("Not Prime");
}