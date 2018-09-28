function Hover(b, n){
    if(n == 1){
        if(b == "true"){  
            project1.style.display = "block";
            c1.style.backgroundColor = 'rgb(161,157,161)';
        }else{  
            project1.style.display = "none";
            c1.style.backgroundColor = 'rgb(124,119,124)';
        }
    }else if(n == 2){
        if(b == "true"){  
            project2.style.display = "block";
            c2.style.backgroundColor = 'rgb(161,157,161)';
        }else{  
            project2.style.display = "none";
            c2.style.backgroundColor = 'rgb(124,119,124)';
        }
    }else if(n == 3){
        if(b == "true"){  
            project3.style.display = "block";
            c3.style.backgroundColor = 'rgb(161,157,161)';
        }else{  
            project3.style.display = "none";
            c3.style.backgroundColor = 'rgb(124,119,124)';
        }
    }else if(n == 4){
        if(b == "true"){  
            project4.style.display = "block";
            c4.style.backgroundColor = 'rgb(161,157,161)';
        }else{  
            project4.style.display = "none";
            c4.style.backgroundColor = 'rgb(124,119,124)';
        }
    }else if(n == 5){
        if(b == "true"){  
            project5.style.display = "block";
            c5.style.backgroundColor = 'rgb(161,157,161)';
        }else{  
            project5.style.display = "none";
            c5.style.backgroundColor = 'rgb(124,119,124)';
        }
    }
}
var arr = [];
var cont = 1;


function detectswipe(el) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20;  //min x swipe for horizontal swipe
  var max_x = 40;  //max x difference for vertical swipe
  var min_y = 40;  //min y swipe for vertical swipe
  var max_y = 50;  //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX; 
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX; 
    swipe_det.eY = t.screenY;    
  },false);
  ele.addEventListener('touchend',function(e){
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
      if(swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    //vertical detection
    if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
      if(swipe_det.eY > swipe_det.sY) direc = "d";
      else direc = "u";
    }

    if (direc != "") {
      if(direc == "r"){
        

        if(cont == 5){
            cont = 1;
        }else{
            cont++;
        }
        var id = "titlePj" + cont;
        console.log(id, document.getElementById(id).textContent);

        document.getElementById("textTitle").textContent = document.getElementById(id).textContent;
        document.getElementById("textTitle").href = document.getElementById(id).href;
        
        if(cont == 1){
            Hover("false", 5);
        }else{
            Hover("false", cont-1);
        }
        Hover("true", cont);

        c1.style.animationDirection = "reverse";
        c2.style.animationDirection = "reverse";
        c3.style.animationDirection = "reverse";
        c4.style.animationDirection = "reverse";
        c5.style.animationDirection = "reverse";

        c1.style.animationPlayState="running";
        c2.style.animationPlayState="running";
        c3.style.animationPlayState="running";
        c4.style.animationPlayState="running";
        c5.style.animationPlayState="running";
        

        setTimeout(function() {
        c1.style.animation = 'none';
        c2.style.animation = 'none';
        c3.style.animation = 'none';
        c4.style.animation = 'none';
        c5.style.animation = 'none';
        setTimeout(function() {
          c1.style.animation = '';
          c2.style.animation = '';
          c3.style.animation = '';
          c4.style.animation = '';
          c5.style.animation = '';
        }, 10);},400);
      }else{

        if(cont == 1){
            cont = 5;
        }else{
            cont--;
        }
        var id = "titlePj" + cont;
        console.log(id, document.getElementById(id).textContent);

        document.getElementById("textTitle").textContent = document.getElementById(id).textContent;
        document.getElementById("textTitle").href = document.getElementById(id).href;
        
        if(cont == 5){
            Hover("false", 1);
        }else{
            Hover("false", cont+1);
        }
        Hover("true", cont);

        c1.style.animationPlayState="running";
        c2.style.animationPlayState="running";
        c3.style.animationPlayState="running";
        c4.style.animationPlayState="running";
        c5.style.animationPlayState="running";
        

        setTimeout(function() {
        c1.style.animation = 'none';
        c2.style.animation = 'none';
        c3.style.animation = 'none';
        c4.style.animation = 'none';
        c5.style.animation = 'none';
        setTimeout(function() {
          c1.style.animation = '';
          c2.style.animation = '';
          c3.style.animation = '';
          c4.style.animation = '';
          c5.style.animation = '';
        }, 10);},400);
       
      }
      
    }
    direc = "";
  },false);  
}

if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
  //The DOMContentLoaded event has already fired. Just run the code.
  afterLoaded();
}

function afterLoaded(){
  detectswipe("menu");
}
