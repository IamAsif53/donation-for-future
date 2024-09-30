function history(){
    window.location.href='home.html';
}

document.getElementById('blog').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='home.html';
})
document.getElementById('donate-noakhali').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("iftakhar alam");
    const addmoney = document.getElementById('give-noakhali').value;
    const tot = document.getElementById('total').innerText;
     const tota = parseFloat(tot) - parseFloat(addmoney);
    if(tota<0||addmoney<0){
        alert('Failed to add the money.');
    }else{
        const tota = parseFloat(tot) - parseFloat(addmoney);
        const allreadymoney = document.getElementById('have-noakhali').innerText;
        const totalMoney = parseFloat(allreadymoney) + parseFloat(addmoney);
        document.getElementById('have-noakhali').innerText = totalMoney.toFixed(2);
        document.getElementById('total').innerText=tota.toFixed(2);
    }
});
document.getElementById('donate-feni').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("iftakhar alam");
    const addmoney = document.getElementById('give-feni').value;
    const tot = document.getElementById('total').innerText;
    // const tota = parseFloat(tot);
    const tota = parseFloat(tot) - parseFloat(addmoney);
      console.log(tota,addmoney);
    if(tota<addmoney||addmoney<0){
        alert('Failed to add the money.');
    }else{
        const tota = parseFloat(tot) - parseFloat(addmoney);
        const allreadymoney = document.getElementById('have-feni').innerText;
        const totalMoney = parseFloat(allreadymoney) + parseFloat(addmoney);
        document.getElementById('have-feni').innerText = totalMoney.toFixed(2);
        document.getElementById('total').innerText=tota.toFixed(2);
    }
});
document.getElementById('donate-quota').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("iftakhar alam");
    const addmoney = document.getElementById('give-quota').value;
    const tot = document.getElementById('total').innerText;
     const tota = parseFloat(tot) - parseFloat(addmoney);
    if(tota<0||addmoney<0){
        alert('Failed to add the money.');
    }else{
        const tota = parseFloat(tot) - parseFloat(addmoney);
        const allreadymoney = document.getElementById('have-quota').innerText;
        const totalMoney = parseFloat(allreadymoney) + parseFloat(addmoney);
        document.getElementById('have-quota').innerText = totalMoney.toFixed(2);
        document.getElementById('total').innerText=tota.toFixed(2);
    }
});
document.getElementById('donation')
    .addEventListener('click', function () {
        this.style.backgroundColor = 'green'; 
        document.getElementById('history').style.backgroundColor='white';
        console.log('show add money button clicked');
        showSectionById('donation-1');
});


document.getElementById('history')
    .addEventListener('click', function () {
        this.style.backgroundColor = 'green'; 
        document.getElementById('donation').style.backgroundColor='white';
        console.log('show history button clicked');
        showSectionById('history-1');
});
function showSectionById(id){
     document.getElementById('donation-1').classList.add('hidden');
    document.getElementById('history-1').classList.add('hidden');    
    document.getElementById(id).classList.remove('hidden');
}
document.getElementById('donate-feni').addEventListener('click', function(event) {
    event.preventDefault();
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    let addmoney = document.getElementById('give-feni').value;
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    newDiv.innerHTML =`<div class="text-black text-2xl container mx-auto border-[var(--ass)] rounded-xl border-2">${addmoney} Taka donate for Flood Relief in Feni,Bangladesh <br> Date : ${timeString}</div>`
    document.getElementById('container').appendChild(newDiv);
});
document.getElementById('donate-noakhali').addEventListener('click', function(event) {
    event.preventDefault();
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    let addmoney = document.getElementById('give-noakhali').value;
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    newDiv.innerHTML =`<div class="text-black text-2xl container mx-auto border-[var(--ass)] rounded-xl border-2">${addmoney} Taka donate for Flood at Noakhali, Bangladesh <br> Date : ${timeString}</div>`
    document.getElementById('container').appendChild(newDiv);
});
document.getElementById('donate-quota').addEventListener('click', function(event) {
    event.preventDefault();
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    let addmoney = document.getElementById('give-quota').value;
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    newDiv.innerHTML =`<div class="text-black text-2xl container mx-auto border-[var(--ass)] rounded-xl border-2">${addmoney} Taka aid for Injured in the Quota Movement <br> Date : ${timeString}</div>`
    document.getElementById('container').appendChild(newDiv);
});