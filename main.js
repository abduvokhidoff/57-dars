let arr = ['Olma', 'Gilos', 'Nok', 'Shaftoli']

console.log(arr)

alert(`Arrayingizni uzunligi ${arr.length}!`)

let result = confirm(`Siz Arrayingizdan ma'lumot olib tashlamoqchimisiz?`)

if(result){
    arr.shift()
    alert(`Arrayingizni uzunligi ${arr.length}`)
    console.log(arr)
}
else{
    alert(`Arreyingizni uzunligi ${arr.length}`)
    console.log(arr)
}