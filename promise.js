// const getdata = new Promise((resolved,reject)=>{
//     resolved(500)
//     // resolved(50000)
//     reject('no data found')
// })

// getdata
// .then(resolved=>console.log(resolved+22))
// // .catch(err=>console.log(err))

let num = 0
const intervalId = setInterval(() => {
        console.log(++num)
        if(num===5){
            clearInterval(intervalId)
        }
}, 10);


const timeoutId = setTimeout(() => {
    console.log('lazy-dog')
}, 1000);

const interID = setInterval(() => {
    console.log('running')
}, 1000);