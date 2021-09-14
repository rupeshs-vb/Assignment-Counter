var countervalue=document.getElementById("disp_val")
var orgvalue=0
// This function is for increament the value by 1 
function increament(){
    orgvalue+=1
    console.log(orgvalue)
    countervalue.innerText=orgvalue
}
// this function reset the value or change it to 0
function reset(){
    orgvalue=0
    console.log(orgvalue)
    countervalue.innerText=orgvalue
}
// This function decreament the value by 1 and ensure it will always positive
function decreament(){
    /* in this if-else condition it wil check wehter it is positive or not if it
    if it is positive so it will decrement otherwise 0*/ 
    if(orgvalue>0){
        orgvalue-=1
        console.log(orgvalue)
        countervalue.innerText=orgvalue
    }else{
        // it call reset() function to make vale 0 
        alert("Cannot go below 0")
        reset()
    }
}