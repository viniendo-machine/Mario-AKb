// document.addEventListener('DOMContentLoaded',()=>{

// })

const JUMP_FORCE = 36
const MOVE_SPEED = 120

kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0]

})


loadRoot('https://i.imgur.com/')
loadSprite('coin','wbKxhcd.png')
loadSprite('evil-shroom','KPO3fR9.png')
loadSprite('brick','pogC9x5.png')
loadSprite('block','M6rwarW.png')
loadSprite('mario','Wb1qfhK.png')
loadSprite('mushroom','0wMd92p.png')
loadSprite('surprise','gesQ1KP.png')
loadSprite('unboxed','bdrLpi6.png')
loadSprite('pipe-top-left','ReTPiWY.png')
loadSprite('pipe-top-right','hj2GK4n.png')
loadSprite('pipe-bottom-left','c1cYSbt.png')
loadSprite('pipe-bottom-right','nqQ79eI.png')



scene("game",() => {
    layers(['bg','obj','ui'], 'obj')
    const map = [
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '       %  =*=%=                           ',
        '                                          ',
        '                                 -+       ',
        '                      ^    ^     ()       ',
        '===================================  ======'
    ]

    const levelCfg = {
        width: 20,
        height: 20, // start at 0,0 ; mario starts at 30,180
        '=': [sprite('block', solid(),'block')],
        '$' : [sprite('coin'),'coin'],
        '%' : [sprite('surprise'), solid(), 'coin-surprise'],
        '*' : [sprite('surprise'), solid(), 'mushroom-surprise'],
        '*' : [sprite('unboxed'), solid()],
        '(' : [sprite('pipe-bottom-left'), solid(),scale(0.5)],
        ')' : [sprite('pipe-bottom-right'), solid(),scale(0.5)],
        '-' : [sprite('pipe-top-left'), solid(),scale(0.5)],
        '+' : [sprite('pipe-top-right'), solid(),scale(0.5)],
        '^' : [sprite('evil-shroom'), solid()],
        '#' : [sprite('mushroom'), solid()],
        // pos: vec2(0,0)
    }


    const gameLevel = addLevel(map, levelCfg)
    const score = 0


    const scoreLabel = add([
        text(score),
        pos(30,6),
        layer('ui',solid()),
        {
            value: score,
        }
    ])

    add([text('level ' + 'test ', pos(4,6))])

    const player = add([
        sprite('mario'), solid(),
        // body(),
        origin('bot'),
        pos(30,180),
    ])



    // player.collides('=', () => {
    //     player.move(0,-200)
    // })

    keyDown('left', ()=>{
        player.move(-MOVE_SPEED, 0)
    })

    keyDown('right', ()=>{
        player.move(MOVE_SPEED, 0)
    })

    // keyDown('right', ()=>{
    //     player.move()
    // })

    // having to deviate from Ania's tutorial 
    // because mario falls through the solid bricks
    // have to explicitly define the height of mario 
    // to ensure it's just above the brick
    keyPress('space', ()=>{
        if(player.pos.y==180){
            // player.jump(JUMP_FORCE)
            moveUp()
            wait(0.1, ()=>{
                moveDown()
            })
        }
        // if (player.grounded()){
        //     player.jump() 
        // }
})

function moveUp(){
    player.pos.y = player.pos.y - 40

}

function moveDown(){
    player.pos.y = player.pos.y + 40
}

    
    console.log(player.pos.x)

    // if (player.pos.y >200){
    //     player.pos.y +=200 
    // }
})


start("game")