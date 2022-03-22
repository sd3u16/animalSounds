const music = new Audio('Löwe.mp3');
const musicEleph = new Audio('Elefant.mp3')
const monkeyS = new Audio('Kapuzineraffe.mp3')


const girafS = new Audio('Giraffe Sound Animal Ringtone (toneswall.com).mp3');
const hippS= new Audio('hippo3.mp3')
const zebraS= new Audio('zebra4.mp3')


music.preload = "auto";
music.controls = false;




function playSound() {
    music.muted = false;

    music.play();

}

function StopSound() {
    music.pause();
    music.currentTime = 0;
}

var meto = document.getElementById('lion')
var eleph = document.getElementById('elep')
var monkey = document.getElementById('monkey')
var hippo = document.getElementById('hipp')
var giraf = document.getElementById('giraf')
var zebra = document.getElementById('zebra')



meto.addEventListener('mousemove', function() {
    music.play();
    console.log(btn)
}, false)
meto.addEventListener('mouseout', StopSound)


eleph.addEventListener('mousemove', function (){
    musicEleph.play()
}, false)

eleph.addEventListener('mouseout', function () {
    musicEleph.pause();
    musicEleph.currentTime = 0;
})



monkey.addEventListener('mousemove', function (){
    monkeyS.play()
}, false)

monkey.addEventListener('mouseout', function () {
    monkeyS.pause();
    monkeyS.currentTime = 0;
})



hippo.addEventListener('mousemove', function (){
    hippS.play()
}, false)

hippo.addEventListener('mouseout', function () {
    hippS.pause();
    hippS.currentTime = 0;
})

zebra.addEventListener('mousemove', function (){
    zebraS.play()
}, false)

zebra.addEventListener('mouseout', function () {
    zebraS.pause();
    zebraS.currentTime = 0;
})

giraf.addEventListener('mousemove', function (){
    girafS.play()
}, false)

giraf.addEventListener('mouseout', function () {
    girafS.pause();
    girafS.currentTime = 0;
})
