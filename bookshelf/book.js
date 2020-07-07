var x=document.querySelector('ul')
// console.log(x)
x.addEventListener('click' ,function(e){
   console.log(e.target.id=="delete")
   {
       var y=e.target.parentNode.parentNode;
       x.removeChild(y);
   }
})
var btn=document.querySelector('#submit')
btn.addEventListener('click',function(e){
    var addform=document.querySelector("#add_book")
    var input="";
    input=addform.querySelector('input[type="text"]');
    var a=input.value;
    input.value="";
    if(a!="")
    {
    var list=document.querySelector('li')
    var res=list.cloneNode(true);
    // res.childNodes[0].textContent=a
    console.log(res)
    res.childNodes[0].textContent=a;
    var m=document.querySelector('ul')
    m.appendChild(res)
    }
    else {
        alert("Name is empty")
    }
})

list_book=document.querySelectorAll('li')
var search=document.querySelector('#search_book')
search.addEventListener('keyup',function(e){
    var term=e.target.value.toLowerCase();
    console.log(term);
    Array.from(list_book).forEach((book)=>{
        var title=book.childNodes[0].textContent.toLowerCase();
        if(title.indexOf(term)>=0)
        {
            book.style.display="flex";
        }
        else{
            book.style.display="none";
        }
    })
})
