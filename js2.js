let nextt = document.querySelector('.nextt')
let prevv = document.querySelector('.prevv')

nextt.addEventListener('click', function(){
    let items = document.querySelectorAll('.itemm')
    document.querySelector('.slidee').appendChild(items[0])
})


prevv.addEventListener('click', function(){
    let items = document.querySelectorAll('.itemm')
    document.querySelector('.slidee').prepend(items[items.length- 1])
})