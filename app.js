
function getName(){
    fetch('names.txt')
    .then(response => response.text())
    .then(text => {
        let names = []
        let tempArr=[]
        let str=''
        for (let i = 0; i < 9; i++) {
            str += `${text.split('\n')[Math.floor(Math.random()*18239)]}`
            str += ` ${text.split('\n')[Math.floor(Math.random()*18239)]}`
            names.push(str)
            tempArr.push(`n${i+1}`)
            str = ''
        }
        for (let i = 0; i < 9; i++) {
            document.querySelector(`#${tempArr[i]}`).innerHTML = names[i]
        }
        
        //console.log(text.split('\n'))
        //console.log(tempArr)
        //console.log(names)
    })
    //console.log(text)
}

//let likes = Math.floor(Math.pow(Math.random()*50,(Math.random()*10)));
let month = Math.floor(Math.random()*12)+1;
let day = Math.floor(Math.random()*30)+1;
let likes1 = Math.floor(Math.pow(Math.random()*1000,(Math.random()*2.58)));
let likes2 = Math.floor(Math.pow(Math.random()*1000,(Math.random()*3.12)));
let likes3 = Math.floor(Math.pow(Math.random()*1000,(Math.random()*2.97)));

document.querySelector("#date1").innerHTML = ` ${Math.floor(Math.random()*12)+1}/${Math.floor(Math.random()*30)+1}`
document.querySelector("#date2").innerHTML = ` ${Math.floor(Math.random()*12)+1}/${Math.floor(Math.random()*30)+1}`
document.querySelector("#date3").innerHTML = ` ${Math.floor(Math.random()*12)+1}/${Math.floor(Math.random()*30)+1}`

document.querySelector("#likes1").innerHTML = likes1.toLocaleString("en-US")
document.querySelector("#likes2").innerHTML = likes2.toLocaleString("en-US")
document.querySelector("#likes3").innerHTML = likes3.toLocaleString("en-US")

// function pickName(arr) {
//     let tempArr=[]
//     let str=''
//     for (let i = 0; i < 9; i++) {
//         str += `${arr[Math.floor(Math.random()*18239)]}`
//         str += ` ${arr[Math.floor(Math.random()*18239)]}`
//         tempArr.push(str)
//         str = ''
//     }
//     return tempArr;
//}
getName();