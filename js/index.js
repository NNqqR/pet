/**
 * Created by Administrator on 2018/5/5.
 */
window.onload =function(){
    let lunbodian=document.getElementsByClassName("lunbodian")
    //console.log(lunbodian);
    let a=lunbodian[0].getElementsByTagName("a")
    let lunbo=document.getElementsByClassName("lunbo")
    let box=lunbo[0].getElementsByClassName("box")
    console.log(a);
    for(let i=0;i<a.length;i++){
        a[i].onclick=function(){
            for(let j=0;j<a.length;j++) {
                a[j].className="li"
                box[j].style.zIndex=0
            }
            a[i].className="li change"
            box[i].style.zIndex=100
        }
    }


    //second开始
    //let animal=document.querySelector(".animal")
    let lis=document.querySelectorAll(".animal>li")

    console.log(lis);
    let li=document.querySelector("li")
    //console.log(li);
   let lw= parseInt(getComputedStyle(li, null).width)+ parseInt(getComputedStyle(li, null).marginRight);
    //console.log(lw);
    let current= 0,next=0;
    //console.log(animal);
    setInterval(move,200)
    function  move(){
        next++;

        console.log(next);
        animate( lis[current],{left:-lw})
        console.log(lis[next]);
        animate( lis[next],{left:0})
        if(next>16){
            clearInterval(setInterval(move,200))
        }
    }
    current=next
}