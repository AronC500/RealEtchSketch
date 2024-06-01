let box = document.querySelector('#container');
let boot = document.querySelector('#BOOTY');
boot.addEventListener('click',clicker);
let PREVIOUSMINE = 16;


for (let i = 0; i < PREVIOUSMINE*PREVIOUSMINE; i++) {
    let smoll = document.createElement('div');
    smoll.classList.add('gridpieces');
    smoll.style.width = `${(960/PREVIOUSMINE)-2}px`;
    smoll.style.height = `${(540/PREVIOUSMINE)-2}px`;
    box.appendChild(smoll);

    function changeColor() {
        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);

        smoll.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    }
    
        
    smoll.addEventListener('mouseover',changeColor);

    
}

function grid(MINEMINEMINEMINE) {
    for (let i = 0; i < MINEMINEMINEMINE*MINEMINEMINEMINE;i++) {
    let smoll2 = document.createElement('div');
    smoll2.classList.add('gridpieces2');
    smoll2.style.width = `${(960/MINEMINEMINEMINE)-2}px`;
    smoll2.style.height = `${(540/MINEMINEMINEMINE)-2}px`;
    box.appendChild(smoll2);
    function changeColor2() {
        let d = Math.floor(Math.random() * 256);
        let e = Math.floor(Math.random() * 256);
        let f = Math.floor(Math.random() * 256);

        smoll2.style.backgroundColor = `rgb(${d}, ${e}, ${f})`;
    }

    smoll2.addEventListener('mouseover',changeColor2);
    }

 }

 function clicker(){
    let MINEMINEMINEMINE;
    do{

        MINEMINEMINEMINE = prompt("Enter one number, N , between 1 to 100 for N*N Grid.")

        if (MINEMINEMINEMINE >= 1 && MINEMINEMINEMINE <= 100){
            for (let i = 0; i < PREVIOUSMINE*PREVIOUSMINE;i++) {
                box.removeChild(box.lastChild);
            }

            PREVIOUSMINE = MINEMINEMINEMINE;
            break;
        }

    } while (MINEMINEMINEMINE > 100 || MINEMINEMINEMINE < 1);
    grid(MINEMINEMINEMINE);

}