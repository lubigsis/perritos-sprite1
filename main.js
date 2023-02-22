//referencio variable y configuro el canvas
let canvas = document.getElementById('canvasJS');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width = 600; //coloco el mismo q' en el CSS
let canvasHeight = canvas.height = 600; //coloco el mismo q' en el CSS
//---------------------------------------subo sprite------------------
let imagen = new Image();
imagen.src = 'perritos.png';

let spriteWidth = 575;/*P/acomodar la img a mi canvas, divido el ancho de la img por la cantidad q columnas/perritos -> 6876 px / 12 = 573 y tengo en consideración los márgenes blancos*/
let spriteHeight = 523;

let frameX = 0;
let frameY = 0;
//----------------------------------------------------------------------------

function animar(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(imagen, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight,
                      0, 0, spriteWidth, spriteHeight);

        if (frameX < 6){
            frameX++;
        }else{
            frameX = 0;
        }

    requestAnimationFrame(animar);
}

animar();

/*clearRect(); convierte todos los pixeles en el rectangulo definido por el punto de inicio (x, y) y tamaño 
(width, height) a negro transparente, borrando cualquier contenido dibujado anteriormente. */

/*requestAnimationFrame() informa al navegador que quieres realizar una animación y solicita que el navegador
 programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una 
 función a la que llamar antes de efectuar el repintado.*/

 /* ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); */