//* ============header Start===========>>
const sideBar = document.querySelector('.sider-bar');
const hamburgur = document.querySelector('.hamburgur');
const closeBtn = document.querySelector('.close');

function sideBarFunc() {
    hamburgur.addEventListener('click', () =>{
        sideBar.style.transform = 'translateX(0)';
    });
    closeBtn.addEventListener('click', () =>{
        sideBar.style.transform = 'translateX(100%)';
        
    });

    
}
sideBarFunc();

//* ============Counter Start===========>>
const number = document.querySelectorAll('.number');
let interval = 12;

number.forEach((num) =>{
  const counterNumber = () =>{
    const targetNumber = parseInt(num.getAttribute('data-number'));
    const initialNumber = parseInt(num.textContent);
    const duration = Math.floor(targetNumber / interval);
    if (initialNumber < targetNumber) {
       num.textContent = duration + initialNumber;
       setTimeout(counterNumber, 45);
    }
  }
  counterNumber();

    
})


