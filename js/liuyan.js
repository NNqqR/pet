/**
 * Created by Administrator on 2018/5/15.
 */
window.addEventListener("load", function (){
    //获取标签
    let input=document.querySelector("input")
    let text=document.querySelector("textarea")
    let span=document.querySelector(".tips>span")

    let button=document.querySelector("button")
    let message=document.querySelector(".message")


    let list =document.querySelectorAll(".list")


    text.onkeyup= function () {
        //获取输入内容的长度
        let value=this.value

        //第二种限制输入长度的方法
        //if(value.length>100){
        //    this.value=this.value.substr()
        //}
        span.innerText=value.length

    }

    //单击标签时,将文本标签的内容赋给两个变量
    button.onclick=function(){
        let title =input.value
        let con =text.value

     //提交之后，让右侧区域内容为空
        input.value=""
        text.value=""
        let str=` <div class="list">
            <div class="img">
                <img src="2.jpg" alt="">
            </div>
            <div class="info">
                <h3>${title}</h3>
                <p>
                    ${con}
                </p>
            </div>
        </div>`
        //设置的内容插入到列表中，而不是覆盖,将当前所编辑的内容插入到原内容前面,即插入到一楼二楼类似情况
        message.innerHTML=str+message.innerHTML
        //放入下一层
        //message.innerHTML+=str
    }

//使用事件委派，为后面添加的内容增加新的触发事件
    message.onmouseover=function (e) {
        let element=e.target
        if(element.nodeName=="DIV"&& element.classList.contains("list")){
        element.classList.add("active")
        }
    }

    list.forEach(element=>{
        element.onmouseenter= function () {
            this.classList.toggle("active")
            //this.style.background="#cccccc"
            console.log(this.className);
        }
        element.onmouseleave= function () {
            this.classList.toggle("active")
        }
    })

  //let list=document.querySelector("div")
    //list.classList.add("list")
})

