
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
            this.vy = 0;
            // need to keep player from flying off the display screen
            this.gravity = 1;

        }
        draw(context){
            context.fillStyle = 'white'
            context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height,
                 this.width, this.height, this.x, this.y, this.width, this.height);
            // draw image context would be more used if i uploaded the entire sprite sheet of the png files for player as well as enemies 
            // for now for the project deadlines sake its going to be kept super simple since i chose to crop one sprite from the sheet 
        }
        update(input){
            // input is taken from line 10 and passed here and then to player update in animate function
            if (input.keys.indexOf('ArrowRight') > -1){
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1){
                this.speed = -5;
                // jumping animation will be handled relatively the same way
            } else if (input.keys.indexOf('ArrowUp') > -1){
                // velocity y
                this.vy -= 5;

            } else {
                // brings player speed back to zero after initial key movement
                this.speed = 0;
            }
            this.x += this.speed;

            if (this.x < 0) this.x = 0;
            else if (this.x > this.playerWidth - this.width) this.x = this.playerWidth - this.width
        //    comment to break horizontal and vertical 
            this.y += this.vy;
            if (!this.onFloor()) {
                this.vy += this.gravity;
            } else {
                this.vy = 0;
            }
            if (this.y > this.playerHeight - this.height) this.y = this.playerHeight - this.height

        }
        // need to tell when player is or is on the ground
        onFloor(){
            return this.y >= this.playerHeight - this.height;
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