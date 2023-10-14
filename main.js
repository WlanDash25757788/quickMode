// 1. npm -v nodejs
// 2. npm install prompt-sync
// 3. open
let input = require('readline').createInterface({
 input : process.stdin,
 output: process.stdout
})
let gugel = 'archives'
var ambizi = (`${gugel}`)
input.question('masukan ID: ', gogel => {
 setTimeout(()=>{
  console.log(`${gogel} succes ${ambizi}`)
 input.close();
 },2000)
}) 

// soal inputan bisa pake atas atau yng bwah ini 


// let yangIni = require('prompt-sync')();
// var agor = yangIni('masukan ID: ')
// const intor = 'this form disconect';
// setTimeout(()=>{
//  console.log(`${intor}`)
// },6000)
// console.log('code: ',agor,'succes')