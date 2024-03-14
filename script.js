//t1 = (v0*sin(angle)-root(v0**2-2gh))/g
function launchBall() {
    var angle = document.getElementById("angle").value || 45;
    var speed = document.getElementById("speed").value || 300;
    var frameSpeed = document.getElementById("frameSpeed").value || 250;
    var gravity = document.getElementById("gravity").value || 9.8;

    var field = document.getElementById("field");
    var ball = document.createElement("div");
    ball.id = "ball";
    field.appendChild(ball);

    var startPositionX = field.offsetWidth / 20;
    const width = field.offsetWidth;
    const height = field.offsetHeight;
    var startPositionY = 0;
    ball.style.left = startPositionX + 'px';
    ball.style.bottom = startPositionY + 'px';

    var x = 0;
    var y = 0;
    var isplusX = 1;
    var isplusY = 1;
    var changeX = 0;
    var changeY = 0;
    //var crash = 0;
    var plus = false;
    var startTimeY = new Date().getTime();
    //var startTimeYG = new Date().getTime();
    var startTimeX = new Date().getTime();
    angle = Math.PI / (180 / angle);
    var moveY;
    var isFalling = false;
    var Yspeed;
    //var flag = false;
    function moveBall() {
        let nowX = new Date();
        let nowY = new Date();
        //let nowYG = new Date();
        const tY = (nowY.getTime() - startTimeY) / frameSpeed;
        //const tYG = (nowYG.getTime() - startTimeYG) / frameSpeed;
        const tX = (nowX.getTime() - startTimeX) / frameSpeed;
        x = changeX + isplusX * speed * Math.cos(angle) * tX;
        if (! (isFalling)){
            moveY = speed * Math.sin(angle) * tY - 0.5 * gravity * tY ** 2;
            //flag = false;
            Yspeed = speed * Math.sin(angle) - gravity * tY;
        }/*else{
            if (!(flag)){
                Yspeed = speed * Math.sin(angle) - gravity * tY;
                flag = true;
            }
        }*/
        //console.log(isFalling, y);
        if (!(isFalling)){
            y = moveY;// - isFalling * 0.5 * gravity * tY ** 2;
        }else{
            y = changeY - Yspeed * tY - 0.5 * gravity * tY ** 2;
            //y = y - Yspeed * tY;
            //console.log(Yspeed);
        }
        //console.log(x, width);
        if (y < 0) {
            changeY = 0;
            isFalling = false;
            //startTimeYG = new Date().getTime();
            startTimeY = new Date().getTime();
            isplusY = 1;
            //field.removeChild(ball);
            //return;
        }
        //천장 꿍
        if (startPositionY + y >= height - 20){
            changeY = height - 20;
            isFalling = true;
            //startTimeYG = new Date().getTime();
            startTimeY = new Date().getTime();
            isplusY = -1;
        }
        // 오른쪽 끝에 도달했을 때 처리
        if (startPositionX + x > width - 25){//} - ball.offsetWidth) {
            changeX = x;//(width - ball.offsetWidth - startPositionX) * (crash + 1);    
            startTimeX = new Date().getTime();
            isplusX = -1;
        }
        // 왼쪽 끝에 도달했을 때 처리
        if (startPositionX + x < 0) {
            changeX = - width / 20;//-width -x;//* (crash);
            startTimeX = new Date().getTime();
            isplusX = 1;
        }

        ball.style.bottom = (startPositionY + y) + 'px';
        ball.style.left = (startPositionX + x) + 'px';
        //ball.style.right = (ball.style.left + 20) + 'px';

        requestAnimationFrame(moveBall);
    }

    moveBall();
}
function creadit(){
    alert("Maker: Nabuley & Forever.\nCalculating: Forever\nProgramming: Nabuley");
}