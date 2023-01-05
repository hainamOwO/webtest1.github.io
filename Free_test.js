const time = document.getElementById("time");
const button = document.getElementById("end");
let second = 0;
let minute = 30;
let hour = 2;

//clock
let timeId = setInterval(()=>{
  second-=1;
  if (second<0){
    minute -= 1;
    second = 60;
  }
  if (minute<0){
    hour-=1;
    minute=60;
  }

  time.textContent = `0${hour}:${minute}:${second}`
},1000)


const ques = document.querySelectorAll("#num_ques");
const board = document.getElementById("finish_announcement");
let isDoing = true;
let key = "DDCBCDCCDCABACCCCDCBABBDADBBAB"
let ans = "";
let correctAns = 0;
let temp = 0;

//button end
button.onclick = function(){
  clearInterval(timeId);
  isDoing = false;
  const mark = document.getElementById("mark");
    if (ans.length===key.length || (hour===0&&second===0&&minute===0)|| isDoing === false){
      mark.textContent = `${temp}/${key.length}`;
      board.style.display = "block";
      // check incorrect
      const content = document.getElementById("content");
      const p = document.createElement('div');
      for (let i = 0;i<ans.length;i++){
        if (ans[i]!=key[i]){
          
          p.classList.add('QuesNum');
          p.classList.add('Your_choice');
          p.classList.add('Correct_answer');
          content.append(p);
          const QuesNum = document.querySelector('.QuesNum');
          const Choice = document.querySelector('.Your_choice');
          const Correct = document.querySelector('.Correct_answer');
          QuesNum.textContent = `${i}`;
          Choice.textContent = `${ans[i]}`;
          Correct.textContent = `${key[i]}`;
        }
      }
    }
    console.log(`correctAns:${temp}/50`);
}

//finish the test, press enter
window.addEventListener('keydown',event => {
  if (event.key==="Enter"&&isDoing===true){
    ans="";
    for (let i=0;i<ques.length;i++){
      ans+=ques[i].value;
    }
    ans = ans.toUpperCase();
    console.log(ans);
    
    for (let i = 0;i<ans.length;i++){
      if (ans[i]===key[i]){
        correctAns+=1;
      }
    }
    const mark = document.getElementById("mark");
    if (ans.length===key.length || (hour===0&&second===0&&minute===0)|| isDoing === false){
      mark.textContent = `${correctAns}/${key.length}`;
      // check incorrect
      const content = document.getElementById("content");
      const p = document.createElement('div');
      for (let i = 0;i<ans.length;i++){
        if (ans[i]!=key[i]){
          p.classList.add('QuesNum');
          p.classList.add('Your_choice');
          p.classList.add('Correct_answer');
          content.append(p);
          const QuesNum = document.querySelector('.QuesNum');
          const Choice = document.querySelector('.Your_choice');
          const Correct = document.querySelector('.Correct_answer');
          QuesNum.textContent = `${i}`;
          Choice.textContent = `${ans[i]}`;
          Correct.textContent = `${key[i]}`;
        }
      }
    }
    console.log(`correctAns:${correctAns}/50`);
    temp = correctAns;
  }
  correctAns = 0;
})



//draw the exit
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.strokeStyle = "gray";
context.lineWidth = 3;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(25,25);
context.moveTo(0,25);
context.lineTo(25,0);
context.stroke();

canvas.onclick = function(){
  board.style.display = "none";
  document.getElementById("incorrect").style.display = "none";
}

document.getElementById("detail").onclick = function(){
  document.getElementById("incorrect").style.display = "block";
}

//plusssss 

const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");
const plus4 = document.getElementById("plus4");
const plus5 = document.getElementById("plus5");
const plus6 = document.getElementById("plus6");
const plus7 = document.getElementById("plus7");
const plus8 = document.getElementById("plus8");
const plus9 = document.getElementById("plus9");
const plus10 = document.getElementById("plus10");

plus1.onclick = function(){
  plus1.textContent = "√";
}
plus2.onclick = function(){
  plus2.textContent = "√";
}
plus3.onclick = function(){
  plus3.textContent = "√";
}
plus4.onclick = function(){
  plus4.textContent = "√";
}
plus5.onclick = function(){
  plus5.textContent = "√";
}
plus6.onclick = function(){
  plus6.textContent = "√";
}
plus7.onclick = function(){
  plus7.textContent = "√";
}
plus8.onclick = function(){
  plus8.textContent = "√";
}
plus9.onclick = function(){
  plus9.textContent = "√";
}
plus10.onclick = function(){
  plus10.textContent = "√";
}

//brochure
const brochure = document.getElementById("brochure");
let cnt = 0;
brochure.onclick = function(){
  if (cnt%2==0) document.getElementById("under").style.display = "block";
  else document.getElementById("under").style.display = "none";
  cnt++;
}