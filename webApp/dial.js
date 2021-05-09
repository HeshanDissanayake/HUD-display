





let arm = document.getElementById("dial_arm")
let x = 0  
function run(){
    
    arm.style.transform = "rotate(" + String(x) +"deg)"
    x += 3;
    console.log(x)
    window.requestAnimationFrame(run)
}

run();
