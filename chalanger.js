
  //SPLIT()
//perhuruf membuat array baru                        //fungsi split: untuk memis
let nama = "How are you doing today?"
const char = nama.split('') // h,o,w

console.log(char)


//MAP()

const number = [2,4,6,8]

const kelipatanDua = number.map(function(number){
    return number * 2
})


//COMBO SPLIT() DAN MAP()
console.log(kelipatanDua)
//per 1kata membuat array baru
let a = "Dzakwan Al iman";
const words = a.split(' '); //how, are

const result = words.map(function(words){
    return words+ " "+ words.length
})

console.log(result);

//CODE WARS CHALANGE RONDE1

//membuat fungsi untuk array
function addLength(str) {
    
    //menambahkan split
    const text = str.split(" ")

    //menambahkan map()
    const hasil = text.map(function(text){
        return text+ ' '+ text.length
    })
   
    //mengembalikan nilai hasil
    return hasil
}

//untuk menampilkan arraynya
console.log(addLength("apple ban")) // Output: ["apple 5", "ban 3"]
console.log(addLength("you will win"))

//cara orang lain

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }

//CODE WARS CHALANGE RONDE2

function greet(name){
    return "Hello, "+ name + " how are you doing today?"
}

console.log(greet("Dzakwan"))

//cara orang lain
function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

  //CODE WARS CHALANGE RONDE3



// Membuat DOM dari dasar

//cara 1
const newElement = document.createElement('h1')
//nambah text
newElement.textContent = "HTML"
//styling dom
newElement.style.color = "red"
//menampilkan teks
document.getElementById("HTML").appendChild(newElement)


//cara 2
const newElement1 = document.getElementById("HEAD");
document.getElementById("HEAD").textContent = 'HEADER'+ newElement1.textContent
newElement1.style.color = 'blue'

//cara3
const newElement3 = document.createElement("h1")

newElement3.textContent = "BODY"

document.getElementById("BODY").appendChild(newElement3)

console.log(document)

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
const e = document.getElementsByClassName("intro")
const e1 = document.querySelectorAll("p.quesry")

//getElementsByTagName
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[1].innerHTML;
y[1].style.backgroundColor = "blue"


//getElementsByClassName
document.getElementById("demon").innerHTML = 
'Aku cinta DOM:  ' + e[0].innerHTML

//querySelectorAll
document.getElementById("demo1").innerHTML = "The first paragraph (index 0) with class='quesrty' is: " + e1[0].innerHTML

// anchors
document.getElementById("mabar").innerHTML = "Number of anchors are: "+ document.anchors.length

//











  












  