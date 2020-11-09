const btn = document.getElementById("search");
const wi = document.getElementById("width");
const hi = document.getElementById("height");


btn.addEventListener('click',e=>{
    e.preventDefault();
    const w = wi.value;
    const h = hi.value;

    const url = 'https://picsum.photos/'+w+'/'+h;
 
    fetch(url,{
        method:'GET',
        credentials:'same-origin',
    })
    .then(res=>res)
    .then(res=>{
       document.getElementById('om').src=res.url;
    })
});