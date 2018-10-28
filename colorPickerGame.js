
//number of squares based on easy or hard mode
// default is hard
var squareNum=6;

//easy and hard difficulty booleans
var easy=false;
var hard=true;


//generate random colors
var colors = generateColors(squareNum);

//selecting the squares
var squares=document.querySelectorAll(".square");

//select the RGB part in the header
var colorDisplay= document.getElementById("colorDisplay");

//Display message after correct or wrong guessing
var message=document.querySelector("#message");

//Select the header to change its background color to the right guessed color
var header=document.querySelector("h1");

//Select the reset button
var reset=document.querySelector("#reset");

//Selecting easy and hard buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//Easy & hard Button listners
easyBtn.addEventListener("click",function(){easyMode();});
hardBtn.addEventListener("click",function(){hardMode();});


//selected color for matching
var pickedColor=colors[pickColor()];

//display the rgb values of the color in the header
colorDisplay.textContent=pickedColor;



//reset event listner
reset.addEventListener("click",function()

{
	restart();

});

//initialize coloring the squares and the event listners
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];


	squares[i].addEventListener("click",function(){


		var clickedColor=this.style.background;

		//right guess
		if (pickedColor===clickedColor)
		{
			message.textContent= "Correct";
			changeColor();
			header.style.background=pickedColor;
			reset.textContent="Play Again ?"
		}

		//wrong guess
		else
		{
			message.textContent= "Try Again";
			this.style.background="#232323";
		}


	})
}


	//change all the squares to the correct color
	function changeColor()
	{
		for(var i=0; i<squares.length;i++)
		{
			squares[i].style.background=pickedColor;
		}
	}

	//pick a random color from the squares
	function pickColor()
	{
		var color=Math.floor(Math.random()*squareNum);
		return color;
	}


	//generate random cloros for the squares

	function generateColors(num)
	{

		var colorArray=[];

		for(var i=0;i<num;i++)
		{
			colorArray.push(randomColor());
		}

		return colorArray;
	}
	
	//generate a random rgb color
	function randomColor()
	{

		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);

		return "rgb("+r+","+" "+g+","+" "+b+")";
	}


	//reseting the game
	function restart()
	{
		//reseting header background color
		header.style.background="steelblue";
		reset.textContent="New Colors";
		message.textContent= "";
		generateNew();
		
	}


	//Easy Mode Setup
	function easyMode(){

		easy=true;
		hard=false;	
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		reset.textContent="New Colors";
		squareNum = 3;
		generateNew();
	}

//HArd Mode Setup
function hardMode(){

	hard=true;
	easy=false;	
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	reset.textContent="New Colors";
	squareNum = 6;
	generateNew();
}



//Generating New Colors and squares
function generateNew(){
//generating and picking new random colors
colors=generateColors(squareNum);
pickedColor=colors[pickColor()];
colorDisplay.textContent=pickedColor;

		//displaying the new generated colors
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.background=colors[i];

			if(easy){
				if(i>squareNum-1)
				{
					squares[i].style.display = "none";

				}
			}

			if(hard){
				squares[i].style.display = "block";
			}

		}
	}