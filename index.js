var countervalue=document.getElementById("disp_val")
var orgvalue=0
function increament(){
    orgvalue+=1
    console.log(orgvalue)
    countervalue.innerText=orgvalue
}
function reset(){
    orgvalue=0
    console.log(orgvalue)
    countervalue.innerText=orgvalue
}
function decreament(){
    if(orgvalue>0){
        orgvalue-=1
        console.log(orgvalue)
        countervalue.innerText=orgvalue
    }else{
        alert("Cannot go below 0")
        reset()
    }
}