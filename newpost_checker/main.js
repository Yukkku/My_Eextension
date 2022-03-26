let b = document.querySelector('[name=AddPostForm]')
let c = document.createElement('input')
c.class = "grey button"
c.type = "button"
c.value = "送信"
b.after(c)
b.style="display:none"
c.onclick=()=>{
  fetch(location.href.replace(/\/t/,"/feeds/t")).then(a=>a.text()).then(a=>{
    if(new DOMParser().parseFromString(a,'text/xml').querySelector('entry id').innerHTML==document.querySelector('.firstpost:nth-last-child(4) a').name.match(/\d+/)[0]　|| confirm('新しい投稿があります。それでも投稿しますか?')){
      b.click()
    }
  })
}