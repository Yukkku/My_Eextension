Array.from(document.getElementsByClassName('postfootright')).forEach(a=>{
  let e=document.createElement('li')
  e.innerHTML='| <a href="#reply">返信</a>'
  e.firstElementChild.addEventListener('click',b=>{
    let c=b.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling
    document.getElementById('id_body').value+=`>> [url ${c.lastElementChild.href}]${c.firstElementChild.innerHTML}[/url]`
  })
  a.firstElementChild.appendChild(e)
})