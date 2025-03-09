const PEIZASH = document.getElementById('THRAX');
const D2 = PEIZASH.getContext('2d'); 
const lineWidth = document.getElementById('FAT-line')
const EVERYTHING = document.querySelector('.background')
let USR = document.querySelector('.touch_IT');
let draw = false;
D2.lineWidth = lineWidth.value;
lineWidth.addEventListener('change',() => D2.lineWidth = lineWidth.value);

PEIZASH.onmousedown = ({offsetX,offsetY}) => {
    draw = true;
    D2.beginPath();
    D2.moveTo(offsetX,offsetY);
};

PEIZASH.onmousemove = ({offsetX,offsetY}) => {
    if (draw) {
        D2.lineTo(offsetX,offsetY);
        D2.stroke();
    } 
};

PEIZASH.onmouseup = () => {
    draw = false;
    
    
};



function page_inst(){
    let inst = document.querySelector('.instruments');
    inst.style.display = 'block';
    
};
function pageClose(){
    let inst = document.querySelector('.instruments');
    inst.style.display = 'none';
}

USR.addEventListener('click', page_inst);
EVERYTHING.addEventListener('click', pageClose)