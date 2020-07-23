var button=document.querySelector('button');
let datas[];
button.onclick=function(ev)
{
    alert("submitted");
    this.style.color="green";
   ev.preventDefault();
     var data={
         id:Date.now(),
          name:document.getElementById("email").value,
          email:document.getElementById("email").value,
         contact:document.getElementById("contact").value
    
};
    datas.push(data);
    document.forms[0].reset;
    localStorage.setItem('data',JSON.stringify(data));
}