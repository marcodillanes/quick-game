
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;



    class InputHandle {
        constructor(){
            this.keys = [];
            window.addEventListener('keydown', e => {
                if ((e.key === 'ArrowDown' || 
                    e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowRight') 
                    && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
                // console.log(e.key, this.keys);
            });
            window.addEventListener('keyup', e => {
                if (e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight'){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
                // console.log(e.key, this.keys);
            });
        }

    }
    const input = new InputHandle();


    class Player {
        constructor(playerWidth, playerHeight){
            this.playerWidth = playerWidth;
            this.playerHeight = playerHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.playerHeight - this.height;
        }
        draw(context){
            context.fillStyle = 'white'
            context.fillRect(this.x, this.y, this.width, this.height);
        }
        update(){
            this.x++;
        }

    }

    const player = new Player(canvas.width, canvas.height);
    player.draw(ctx);
    player.update();


    class Background {

    }

    class Enemy {

    }
    
    function handleEnemy(){

    }

    function displayStatus(){

    }

    function animate(){
        player.draw(ctx);
        player.update();
        requestAnimationFrame(animate);

    }
    animate();
});