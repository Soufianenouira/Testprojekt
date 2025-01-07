let imgId = 0;
let srcContainer = [];

function renderAll(){ 
    let album = document.getElementById("album");
    for(let i = 0; i < 13; i++){
        let string = "./img/"+ i +".jpg";
        srcContainer.push(string);
    }
    for(let i = 1; i < 13; i++){
        let srcStr = '<img onclick="openImg(' + i +')" class="album-img" src="' + srcContainer[i] + '" >'
        album.innerHTML+= srcStr;
    }
}

function openImg(x){
        let dialog = document.getElementById('my-dialog');
        let theImg = document.getElementById("the-img");
        let str = "./img/"+ x +".jpg"
        console.log(str);
        theImg.src = str;
        dialog.style.display = "flex";
        imgId = x;   
}
function next(){
    if(imgId==12){imgId=0;}
    openImg(Number(imgId) +1);
}
function prev(){
    if(imgId==1){imgId=13;}
    openImg(Number(imgId)-1);
}
function closeDialog(event){
    let dialog = document.getElementById('my-dialog');
    if(event.target === document.getElementById('my-dialog')){
        dialog.style.display = "none";
    }
}
