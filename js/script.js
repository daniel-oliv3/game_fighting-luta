const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);


/*Criando o player e o inimigo*/
class Sprite {
    constructor(position, velocity){
        this.position = position;
        this.velocity = velocity;
    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, 150);
    }
}

const player = new Sprite({
    x: 0,
    y: 0
});

player.draw();

const enemy = new Sprite({
    x: 400,
    y: 100
});

enemy.draw();

console.log(player);

function animate(){
    window.requestAnimationFrame(animate);
    console.log('go');
}