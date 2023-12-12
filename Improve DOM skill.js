//DOM selectio

//element = kek <p></p> <h1></h1> <body></body> <div></div> intine ada kek tag nya <> gini lah

//text = kek 'paragraf1' 'intine yang ada tanda petik dah '

//atribute = kek a href itu atribute beri id/ class itu juga salah satu atribute

//node = terdiri dari 1 element

//nodelist = terdiri lebih dari 1 element dan text

//HTMLCollection = kumpulan para element








//document.getElementById() -> element
/*const judul = document.getElementById("judul")
judul.style.color = 'blue'
judul.style.background = 'silver'
judul.innerHTML = "Dzakwan Al iman"

//document.getElementByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p")

//pengulangan
for( let x = 0; x < p.length; x++){
    p[x].style.backgroundColor = "purple"
    p[x].style.color = 'pink'
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = '50px'

//document.getElementByClassName() -> HTMLCollection
const p2 = document.getElementsByClassName("p2")[0]
p2.innerHTML = "Harus mengedepankan Akhlak!!"

//document.querySelector() -> element
const p4 = document.querySelector('#b p')
p4.style.color = "yellow:"
p4.style.fontSize = '32px'

const li1 = document.querySelector('section#b ul li:nth-child(1)')
li1.style.backgroundColor = 'orange'

//document.querySelectorAll()
const P = document.querySelectorAll('p');
for(i= 0; i <P.length; i++){
    P[i].style.backgroundColor = 'green'

}
*/

// const judul = document.getElementById('judul')
// judul.innerHTML = 'Wawan Al iman'

// const sectionA = document.querySelector("section.a")
// sectionA.innerHTML = 'hello dunia!'

// const judul = document.querySelector('#judul');
// judul.innerHTML = 'Wawannobb!'
// judul.style.color = "red"
// judul.style.backgroundColor = 'purple'

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Wawan')

// const a = document.querySelector('a')

const p2 = document.querySelector('.p2');

//MANIPULASI ELEMENT
//Element.setAttribute -> untuk menambah item ke attribute

//Element.removeAttribute -> untuk menghapus item ke attribute

//Element.gettAttribute -> untuk mengecek element berasal dari attribute mana


//CLASSLIST

//Element.classList.add() -> untuk menambah item ke class

//Element.classList.remove() -> untuk mengurangi item ke class

//Element.classList.toggle() -> untuk jika belum punya class tertentu maka akan ditambahkan, jika dah punya maka akan menghilangkan class tersebut

//Element.classList.item() -> untuk mengetahui item class tertentu

//Element.classList.contains() -> untuk mengecek punya tidak class tertentu/ buat ngecek lah

//Element.classList.replace() -> untuk mengganti class yang ada dengan class yang baru

//MANIPULASI NODE
const pNew = document.createElement("p");
const textNew = document.createTextNode("New Paragraf")

//simpan tulisan ke dalam paragraf
pNew.appendChild(textNew)

//simpan pNew di akhir Section a
const sectionA = document.getElementById('a')
sectionA.appendChild(pNew);



// //insertBefore()
// const liNew = document.createElement('li')
// const textliNew = document.createTextNode('New Item')
// //buat membungkus teks ke element
// liNew.appendChild(textliNew)

// const ul = document.querySelector('section#b ul');
// const li3 = ul.querySelector('li:nth-child(3)')

// ul.insertBefore(liNew, li3)

// //removeChild()
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link)

// //replaceChild()
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p')

// const h2New = document.createElement('h2');
// const texth2New = document.createTextNode("New Tittle!")
// h2New.appendChild(texth2New)
// sectionB.replaceChild(h2New, p4)


// h2New.style.backgroundColor = 'yellow'
// pNew.style.backgroundColor = 'yellow'
// liNew.style.backgroundColor = 'yellow'



//DOM EVENT
// const p3 = document.querySelector('.p3')

// function changeColor(){

// p2.style.backgroundColor = 'red'
// }

// function changeColor1(){
// p3.style.backgroundColor = 'red'
// }

// const p5 = document.querySelector('.p2')
// p5.onclick = changeColor;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//    const ul = document.querySelector('section#b ul');
//    const liNew = document.createElement('li')
//    const teksLi = document.createTextNode("New Item")
//    liNew.appendChild(teksLi)
//    ul.appendChild(liNew)
// });

//kalo pakai event Handler ketimpa ke yang baru
const p3 = document.querySelector('.p3')
// p3.onclick = function () {
//     p3.style.backgroundColor = 'red'
// }

// p3.onclick = function(){
//     p3.style.color = 'blue'
// }

p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'red'
    p3.style.color = 'blue'
})

p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'white'
    p3.style.color = 'black'
})

//wawanCoding@gmail.com
//wawansudahdewasa123























