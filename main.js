{/* <h1>Can you turn the light on</h1>
        <img src="img/lightoff.png" class="img" alt="lightoff">
        <div class="bot">
            <button class="btn">Turn on</button>
            <button class="btn">Turn off</button>
        </div>
         */}

let img = document.getElementById('img');
const imgcng = (a) => {
    if(a == 1){
        img.src='img/lighton.png';
        let btn1 = document.getElementById('btn1').style.backgroundColor = "red";
        let btn2 = document.getElementById('btn2').style.backgroundColor = "green";
        let body = document.body.style.backgroundColor = "white";
        let heding =  document.getElementById('he');
        heding.innerHTML = 'Can you turn the light Off';
    }else{
        img.src='img/lightoff.png';
        let btn2 = document.getElementById('btn1').style.backgroundColor = "green";
        let btn1 = document.getElementById('btn2').style.backgroundColor = "red";
        let body = document.body.style.backgroundColor = "black";
        let heding =  document.getElementById('he');
        heding.innerHTML = 'Can you turn the light On';
    }
}