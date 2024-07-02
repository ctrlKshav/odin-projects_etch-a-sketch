btn=document.createElement('button')
btn.textContent='Set Grid Size'
btn.setAttribute('class','btn')
document.body.appendChild(btn)

container=document.createElement('div')
container.setAttribute('class','container')
document.body.appendChild(container)

function createGrid(size){
    container.innerHTML=''

    for(let i=0;i<size;i++){
        row=document.createElement('div')
        row.classList.add('row','row'+(i+1))
        container.appendChild(row)
        for(let j=0;j<size;j++){
            column=document.createElement('div')
            column.classList.add('column','column'+(j+1))

            column.addEventListener('mouseover',(e)=>{
                e.target.style['background-color']='blue'
            })

            column.addEventListener('mouseout',(e)=>{
                e.target.style['background-color']='white'
            })

            row.appendChild(column)
        }
    }
}

createGrid(16)


btn.addEventListener('click',()=>{
    user=prompt("Enter Grid Size")
    createGrid(user)
})