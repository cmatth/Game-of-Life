Speed = 75;

StartingGrid = [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,
				 0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,	
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



function FillFrame()
{
	for (i = 0; i < 1600; i++)
    {
		var div = document.createElement("div");
		//div.className = "deadCell";
		
		if(StartingGrid[i] == 1) div.className = "aliveCell";
		else div.className = "deadCell";
		
		div.id = "cell-" + i;
		div.setAttribute("onclick", "InvertState(this);")
		document.querySelector(".appFrame").appendChild(div);
	}
	
	
	// Initialize Gosper glider gun
	for(i=0; i<1600; i++)
	{
		
	}
}

function InvertState(div)
{
	if (div.className == "deadCell")
	{
		div.className = "aliveCell";
	}
	else
	{
		div.className = "deadCell";
	}
}

function StartStop(button)
{
	ButtonFlip(button);
}

function ButtonFlip(button)
{	
	if(button.className == "start")
	{
		button.className = "stop";
		button.textContent = "Stop";
		StartGame();
	}
	else
	{
		button.className = "start";
		button.textContent = "Start";
		StopGame();
	}
}

function ClearFrame()
{
	//if(Running) Running = false;
	
	aliveCells = document.getElementsByClassName("aliveCell");
	n = aliveCells.length;
	
	for(i=0; i < n; i++)
	{
		aliveCells[0].className = "deadCell";
	}
	
	var state = document.getElementById("startNstop");
	
	if(state.className == "stop")
	{
		ButtonFlip(document.getElementById("startNstop"));
		StopGame();
	}
	
	
}

function StartGame()
{

  var cells = document.querySelector(".appFrame").children;
  //console.log(typeof(cells));
  
  //var i=0x100000
  function func() {
    timer = setTimeout(func, Speed);
    
	//for(i=0; i < 1601; i++)
	//{
	//	InvertState(cells[i]);
	//}
	Automaton(cells);
  }
  timer = setTimeout(func, 0)
}

function StopGame()
{
	clearInterval(timer);
}

function Automaton(cells)
{
	var neighbors = 0;
	var updateLog = new Array(1600);
	var above;
	var below;
	var left;
	var right;
	
	//for(i=0; i<1600; i++)
	//{
	//	if(cells[i+1].className == "aliveCell")
	//	{
	//		updateLog[i] = 1;
	//	}
	//	else
	//	{
	//		updateLog[i] = 0;
	//	}
	//}
	
	//TESTING
	//console.log(cells[1].id);
	//console.log(updateLog[0]);
	
	for(i = 0; i < 1600; i++)
	{
		if(i % 40 == 0) left = false;
		else left = true;
		
		if(i > 39) above = true;
		else above = false;
		
		if(i < 1560) below = true;
		else below = false;
		
		if((i + 1) % 40 == 0) right = false;
		else right = true;
		
		if(left)
		{
			if(cells[i-1 + 1].className == "aliveCell")
			{
				 neighbors++;
			}
		}
		
		if(right)
		{
			//console.log("Cell: " + cells[(i+2)].id);
			if(cells[i+1 + 1].className == "aliveCell")
			{
				 neighbors++;
			}
		}
		
		if(above)
		{
			if(cells[i-40 + 1].className == "aliveCell")
			{
				 neighbors++;
			}
		}
		
		if(below)
		{
			if(cells[i+40 + 1].className == "aliveCell")
			{
				 neighbors++;
			}
		}
		
		if(left && above)
		{
			if(cells[i-41 + 1].className == "aliveCell")
			{
					neighbors++;
			}
		}
		
		if(left && below)
		{
			if(cells[i+39 + 1].className == "aliveCell")
			{
				neighbors++;
			}
		}
		
		if(right && below)
		{
			if(cells[i+41 + 1].className == "aliveCell")
			{
				neighbors++;
			}
		}
		
		if(right && above)
		{
			if(cells[i-39 + 1].className == "aliveCell")
			{
				neighbors++;
			}
		}
		
		if(neighbors < 2) updateLog[i] = 0;
		if(neighbors == 2) updateLog[i] = 2;
		if(neighbors > 3) updateLog[i] = 0;
		if(neighbors == 3) updateLog[i] = 1;
		
		//DEBUGGING
		//console.log("ID: " + cells[i+1].id);
		//console.log("Cell#: " + i);
		//console.log("Neighbors: " + neighbors);
		//console.log("Update: " + updateLog[i]);
		//console.log("Right: " + right);
		//console.log("Left: " + left);
		//console.log("Above: " + above);
		//console.log("Below: " + below);
		neighbors = 0;
	}
	
	for(i=0; i < 1600; i++)
	{
		if(updateLog[i] == 0) cells[i+1].className = "deadCell";
		else if(updateLog[i] == 2);
		else cells[i+1].className = "aliveCell";
	}
	
}


