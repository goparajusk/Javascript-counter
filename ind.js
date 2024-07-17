const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const labelId = document.getElementById("labelId");
let count=0;
increaseBtn.onclick= function(){
    count++;
    labelId.textContent = count;
    
}
decreaseBtn.onclick= function(){
    count--;
    labelId.textContent = count;
    
}
resetBtn.onclick= function(){
    count=0;
    labelId.textContent = count;
    
}