// document.addEventListener('DOMContentLoaded',()=>{

// })

kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    background: [0,0,0]

})

loadRoot('https://i.imgur.com/')
loadSprite('coin','wbKxhcd.png')
loadSprite('evil-shroom','KP03fR9.png')
loadSprite('brick','pogC9x5.png')
loadSprite('block','bdrLpi6.png')
loadSprite('mario','Wb1qfhK.png')
loadSprite('mushroom','0wMd92p.png')
loadSprite('surprise','gesQ1KP.png')
loadSprite('unboxed','bdrLpi6.png')
loadSprite('pipe-topple-left','ReTPiWY.png')
loadSprite('pipe-topple-right','hj2GK4n.png')
loadSprite('pipe-topple-bottom-left','c1cYSbt.png')
loadSprite('pipe-topple-bottom-right','nqQ79eI.png')



screen("game",()=>{
    layers(['bg','obj','ui'], 'obj')
    const map = [
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '                                          ',
        '=================================== ======'
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block', solid())]
    }

    const gameLevel = addLevel(map, levelCfg)


})

start("game")