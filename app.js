document.addEventListener('DOMContentLoaded',()=>{
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const width = 30
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
    1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
    1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,
    1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,
    1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,
    1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,
    3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
    1,0,1,0,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,0,0,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,2,2,2,2,2,2,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,
    1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,
    1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,
    1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
    1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]
    const squares = []
    let s = 0
    let count = 303
    createboard = () =>{
        for(let i = 0;i<900;i++){
            const square = document.createElement('box')
            grid.appendChild(square)
            squares[i] = square
            if(layout[i]===0){
                squares[i].classList.add('pac-dot')
            }
            else if (layout[i]===1){
                squares[i].classList.add('wall')
            }
            else if(layout[i] === 3){
                squares[i].classList.add('power-pellet')
            }
        }
        }

    createboard();
    let pac_current_index = 555;
    squares[pac_current_index].classList.add('pac-man')
    movepacman = (e) =>{
        previndex = pac_current_index
    switch(e.keyCode){
        case 37 : if(pac_current_index%width !==0 && !squares[pac_current_index-1].classList.contains('wall')){
                pac_current_index-=1}
                if(pac_current_index -1 === 299){
                    pac_current_index = 329
                }
        break
        case 38 : if(pac_current_index-width>=0 && !squares[pac_current_index-width].classList.contains('wall')){
            pac_current_index-=width}
        break
        case 39 : if(pac_current_index%width<width-1 &&!squares[pac_current_index+1].classList.contains('wall')){
            pac_current_index+=1
        }
        if(pac_current_index +1 === 329){
            pac_current_index = 300
        }
        break
        case 40:
            if(pac_current_index+width<width*width && !squares[pac_current_index+width].classList.contains('wall')){
                pac_current_index+=width
            }
        break
    }
    squares[previndex].classList.remove('pac-man')
    squares[pac_current_index].classList.add('pac-man')
    foodeaten()
}

        
    document.addEventListener('keydown',movepacman)
    foodeaten = ()=>{
        if (squares[pac_current_index].classList.contains('pac-dot')){
            squares[pac_current_index].classList.remove('pac-dot')
            count -= 1
            s = s + 10
            scoreDisplay.innerHTML = s
        }
        if (squares[pac_current_index].classList.contains('power-pellet')){
            squares[pac_current_index].classList.remove('power-pellet')  
            s = s + 50
            scoreDisplay.innerHTML = s
            ghosts.forEach(ghost=>ghost.isScared=true)
            setTimeout(UnscareGhost,10000)
        }
        if(count === 0){
            alert("You Win")
        }
    }
    function UnscareGhost (){
        ghosts.forEach(ghost=>ghost.isScared=false)
    }
    class Ghost{
        constructor(className,position,speed){
        this.className = className
        this.position = position
        this.currentPosition = position
        this.speed = speed
        this.timerId = NaN
        this.isScared = false
    }
    }
    ghosts = [new Ghost ('g1',467,100),
    new Ghost ('g2',462,100),
    new Ghost ('g3',347,100),
    new Ghost ('g4',342,100)]

    ghosts.forEach(ghost => {
        squares[ghost.currentPosition].classList.add(ghost.className)
        squares[ghost.currentPosition].classList.add('ghost')
    });

    ghosts.forEach(ghost=>{
        console.log("runing")
         moveghost(ghost)
    })

    function moveghost(ghost){
        const directions = [-1,+1,width,-width]
        let direction = directions[Math.floor(Math.random()*directions.length)]
        ghost.timerId = setInterval(function(){ 
            if(!squares[ghost.currentPosition+direction].classList.contains('wall')&&!squares[ghost.currentPosition+direction].classList.contains('ghost')){
                squares[ghost.currentPosition].classList.remove(ghost.className, 'ghost','scared')
                ghost.currentPosition += direction
                squares[ghost.currentPosition].classList.add(ghost.className,'ghost')
            }
            else{
                direction = directions[Math.floor(Math.random()*directions.length)]
            }
            
        if (squares[pac_current_index] === squares[ghost.currentPosition] && ghost.isScared === false){
            document.removeEventListener('keydown',movepacman)
            alert("Game Over")   
        }
        if (ghost.isScared){
            squares[ghost.currentPosition].classList.add('scared')
        }
        else{
            squares[ghost.currentPosition].classList.remove('scared')
        }
        
        if (squares[pac_current_index].classList.contains('scared')){
            s = s+100
            scoreDisplay.innerHTML = s
            squares[ghost.currentPosition].classList.remove(ghost.className, 'ghost','scared')
            ghost.currentPosition = ghost.position
            squares[ghost.currentPosition].classList.add(ghost.className,'ghost')
        }
        },ghost.speed)
    }
})

