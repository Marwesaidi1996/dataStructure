const print= function(a,b){
    console.log(a,b)
}
const hashtable = new Map([
    ['name','marwen'],
    ['job', 'student'],
[93260779 , 'telephone' ],
[true, 'tis is true'],

[print,'print value']
])
console.log(hashtable.get('name'))
console.log(hashtable.get(93260779))
console.log(hashtable.get(true))
console.log(hashtable.get(print))

hashtable.set('age',20)
/*has verifier si le cle touver ou non*/
//console.log(hashtable.has('age'))
//console.log(hashtable.has('marwen'))
//console.log(hashtable)

//supprime
hashtable.delete('job')
//console.log(hashtable)
// .length
//console.log(hashtable.size)
for (let item of hashtable){
    console.log(item)
}
hashtable.clear()
console.log(hashtable)


