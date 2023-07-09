
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;



    class InputHandle {
        constructor(){
            this.keys = [];
            window.addEventListener('keydown', function(e){
                console.log(e.key);
            });
        }

    }
    const input = new InputHandle();


    class Player {

    }

    class Background {

    }

    class Enemy {

    }
    
    function handleEnemy(){

    }

    function displayStatus(){

    }

    function animate(){

    }
});