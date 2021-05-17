var line = document.querySelector(`.line`);
var blue = document.querySelector(`.blue`);
var green = document.querySelector(`.green`);
var body = document.body


green.style.opacity = '0'

green.onclick = function() {
    green.style.pointerEvents='none';
    blue.style.pointerEvents='auto';
};
blue.onclick = function() {
    blue.style.pointerEvents='none';
    green.style.pointerEvents='auto';
};

function move(color,el1,el2){

    line.style.backgroundColor = color
    anime({
        targets: line,
        duration: 1,
        opacity:"1",
        zIndex: "1"
          });
      anime({
        targets: el1,
        duration: 1,
        zIndex: "1",
        left: "50%"
      });
      anime({
        targets: el2,
        duration: 1,
        left: "50%",
        zIndex: "1"

      });
    anime({
        targets: line,
        width: `${document.documentElement.clientWidth}`,
        duration: 300,
        easing: 'easeInOutSine'
      });
    anime({
        delay: 300,
        duration: 450,
        targets: line,
        height: `${document.documentElement.clientHeight}`,
        easing: 'easeInOutQuad',
    });
    anime({
        delay: 400,
        targets: el1,
        opacity: "1",
    });
    anime({
        delay: 400,
        duration: 1,
        targets: el2,
        opacity: "0",
        zIndex: "0",
        left: "-100%"
    });
    anime({
        delay: 500,
        duration: 1,
        targets: body,
        backgroundColor: color
    });

    setTimeout(line_out, 750);
}
function line_out(){
    anime({
        duration: 1,
        targets: line,
        width: "100px",
        height: "30px",
        opacity: "0"
    });
}
