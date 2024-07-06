var arr=[[],[],[],[],[]]
        
function startBingo(event){
    // <button onclick="getRandomArbitrary()">Next Number</button>
    event.preventDefault(); 
    let inputfield= document.getElementById("nickname")
    let nick= inputfield.value
    nick = nick.trim()
    if(nick==""){
        document.getElementById("incaseError").innerHTML="Please enter a name"
        return 
    }
    document.getElementById("printnickname").innerHTML="Welcome to the game: " + nick
    const element=document.getElementById("form")
    element.remove();
    const element2=document.getElementById("incaseError")
    element2.remove();
    document.getElementById("heading").innerHTML="Welcome To Bingo!"
    
    let uni=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            let index=getRandomArbitrary(0,uni.length)
            console.log(index)
            arr[i][j]=(uni[index])
            uni.splice(index,1)  
        }
    }
    console.log(arr)

    let html = "<table><tbody>";
    for(let i=0;i<5;i++){
        html += '<tr>';

        for(let j=0;j<5;j++){
            html += `<td style="border: 1px solid black">`;
            let str=String(arr[i][j])
            html += `<p id="${i}x${j}" onclick="clickFunc(${i},${j})">${str}</p>`;
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table></tbody>";

    document.getElementById("printtable").innerHTML = html;

}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function clickFunc(i,j,player){
    const element=arr[i][j]
    string= document.getElementById("${i}x${j}").innerHTML
    string = "<s>"+sting+"<s>"
    document.getElementById("${i}x${j}").innerHTML=string
}
function printRandomNumber(){
    let num=getRandomArbitrary()
    document.getElementById("RandomNumber").innerHTML= String(num)

}