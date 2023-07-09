
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 1800;
    canvas.height = 820;



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
            this.image = document.getElementById('playerCharacter');
            this.frameX = 0;
            this.frameY = 0;
            // speed on its own controls player movement with <1 moving us right and >1(negatives) moving us left
            //attaching key functions to speed will allow user to control player
            this.speed = 0;
        }
        draw(context){
            context.fillStyle = 'white'
            context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x, this.y);
            // draw image context would be more used if i uploaded the entire sprite sheet of the png files for player as well as enemies 
            // for now for the project deadlines sake its going to be kept super simple since i chose to crop one sprite from the sheet 
        }
        update(input){
            // input is taken from line 10 and passed here and then to player update in animate function
            this.x += this.speed;
            if (input.keys.indexOf('ArrowRight') > -1){
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1){
                this.speed= -5;
            } else {
                // brings player speed back to zero after initial key movement
                this.speed = 0;
            }
            if (this.x < 0) this.x = 0;
            else if (this.x > this.playerWidth - this.width) this.x = this.playerWidth - this.width
        }

    }

    const player = new Player(canvas.width, canvas.height);



    class Background {

    }

    class Enemy {

    }
    
    function handleEnemy(){

    }

    function displayStatus(){

    }

    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        player.draw(ctx);
        player.update(input);
        requestAnimationFrame(animate);

    }
    animate();
});