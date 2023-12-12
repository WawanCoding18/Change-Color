const btn = document.getElementById('changeBtn')
btn.addEventListener('click', function change(){

      document.body.classList.toggle('yellow')

});

//Ubah warna secara random
const btnRandom = document.createElement('button')
const textBtn = document.createTextNode('Acak Warna')
btnRandom.appendChild(textBtn)
btnRandom.setAttribute('type', 'button')
btn.after(btnRandom)

btnRandom.addEventListener('click', function(){
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ red +', '+ green +', '+ blue +')';
});

//membuat pengaturan warna
const sRed = document.querySelector('input[name=sRed]')
const sGreen = document.querySelector('input[name=sGreen]')
const sBlue = document.querySelector('input[name=sBlue]')

sRed.addEventListener('input', function(){

    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sGreen.addEventListener('input', function(){

    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

sBlue.addEventListener('input', function(){

    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

document.body.addEventListener('mousemove', function(e){
    //posisi mouse
    //console.log(e.clientX)
    //ukuran browser
    //console.log(window.innerWidth)
    const xPos = Math.round((e.clientX / window.innerWidth * 255 ))
    const yPos = Math.round((e.clientY / window.innerHeight * 255 ))
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';


})















