var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;

var player_object = "";
var block_image_object = "";

function player_update()
{
   fabric.Image.fromURL("player.png" , function(Img)
   {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set(
        {
            top:player_y , 
            left:player_x
        }
    );
    canvas.add(player_object);
   }
   );
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image , function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set(
            {
                top:player_y , 
                left:player_x
            }
        );
        canvas.add(block_image_object);
    }
    );
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log("keyPressed");

    if(keyPressed=='37')
    {
        left();
        console.log("Left key is Pressed");
    }

    if(keyPressed=='38')
    {
        up();
        console.log("Up Key is Pressed");
    }

    if(keyPressed=='39')
    {
        right();
        console.log("Right key is Pressed");
    }

    if(keyPressed=='40')
    {
        down();
        console.log("Down key is pressed");
    }

    if(keyPressed=='84')
    {
       new_image('trunk.jpg');
        console.log("T letter is Pressed");
    }

    if(keyPressed=='68')
    {
        new_image('dark_green.png');
        console.log("D Letter is Pressed");
    }

    if(keyPressed=='76')
    {
        new_image('light_green.png');
        console.log("L letter is Pressed")
    }

    if(keyPressed=='71')
    {
        new_image('ground.png');
        console.log("G Key is Pressed");
    }

    if(keyPressed=='87')
    {
        new_image('wall.jpg');
        console.log("W Key is Pressed");
    }

    if(keyPressed=='89')
    {
        new_image('yellow_wall.png');
        console.log("Y Key is Pressed");
    }

    if(keyPressed=='82')
    {
        new_image('roof.jpg');
        console.log("R Key is Pressed");
    }

    if(keyPressed=='67')
    {
        new_image('cloud.jpg');
        console.log("C Key is Pressed");
    }

    if(keyPressed=='85')
    {
        new_image('unique.png');
        console.log("U Key is Pressed");
    }

    if(e.shiftKey==true && keyPressed=='80')
    {
        console.log("shift and p are pressed");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && keyPressed=='77')
    {
        console.log("shift and m are Pressed");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("cureent_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
}

function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_image_height;
        console.log("The Height of the Block is "+block_image_height);
        console.log("Up arrow has been Clicked");
        console.log("X = "+player_x);
        console.log("Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y = player_y + block_image_height;
        console.log("The Height of the Block is"+block_image_height);
        console.log("Down Arrow has Been Clicked");
        console.log("X = "+player_x);
        console.log("Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x>=0)
    {
        player_x = player_x - block_image_width;
        console.log("The Width of the block is"+block_image_width);
        console.log("Left Arrow has been Clicked");
        console.log("X = "+player_x);
        console.log("Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x<=850)
    {
        player_x = player_x + block_image_width;
        console.log("The WIdth of the block is"+block_image_width);
        console.log("Right Arrow has been Clicked");
        console.log("X = "+player_x);
        console.log("Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}