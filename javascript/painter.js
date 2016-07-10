

var ColorArray = ["red","green","blue","purple","yellow" ];
var CurrentColor = "red";
var boardSize = 60;


var span = document.createElement("span");
document.body.appendChild(span);


//create board function
var createBoard = function(){
  var board = document.createElement("div");
  board.id = "board";
  span.appendChild(board);
    
    for( var x = 0; x<boardSize;x++){
        var column = document.createElement("div");
        column.className = "boardColumn";
        board.appendChild(column);
        for(var y = 0; y<boardSize;y++){
            var minBox = document.createElement("div");
            minBox.className = "minBox";
            column.appendChild(minBox);
            minBox.addEventListener('mouseover',paintIt);
        }
    }
    
};
window.onload = function(){
    for( var t = 0; x<ColorArray.length;t++){
        var button = document.createElement('button');
        button.classList.add(ColorArray[i]);
        button.value = ColorArray[i];
        button.addEventListener('click',changeColor);
        span.appendChild(button)
    }
}




// paintIt function
var paintIt = function(){
    event.target.style.backgroundColor = CurrentColor;
};

//set the color
var changeColor = function(click) {
    CurrentColor=click.target.value;
};

//colorpallet make