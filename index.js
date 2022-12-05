function countDown(){
    let countDown=0
    while(countDown<11)
    console.log(countDown++)
}
const names =["Guadalupe","Ollie","Aki"]

function writeCards(names,event){
    return names.map(name=>`Thank you, ${name}, for the wonderful ${event} gift!`)
}
console.log(writeCards(names,"surprise"))    
