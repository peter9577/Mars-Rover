	function outputFirst(){
			
			var input1 = document.getElementById("size").value;
			var input2 = document.getElementById("start1").value;
			var input3 = document.getElementById("command1").value;
			document.getElementById("out1").innerHTML = "your first output is " + output(input2,input3);
		}
		function outputSecond(){
			var input1 = document.getElementById("size").value;
			var input4 = document.getElementById("start2").value;
			var input5 = document.getElementById("command2").value;
			document.getElementById("out2").innerHTML = "your second output is " + output(input4,input5);
		}
			
				
				
		
				
		function output(initialPoint, command) {
			
			var initial = initialPoint.split(" ");
			var x = Number(initial[0]);
			var y = Number(initial[1]);
			var direction = initial[2];
			var steps = command.split('');

			steps.forEach( function(step){
				 if ( step == 'L' || step == 'R' ) {
						return direction = turn(direction, step);
					}
						return action(direction);
					});

			function action(eachCommand){
				switch (eachCommand) {
					case 'N':
						y +=1
						 break;
					case 'E':
						x +=1
						 break;
					case 'S':
						y -=1
						 break;
					case 'W':
						x -=1
						 break;
					  }
					}

					return [x, y, direction].join(',');
					
			function turn(initialDirection, eachCommand) {
				var compassDirection= ['N', 'E', 'S', 'W'];
				var index = compassDirection.indexOf(initialDirection);

					if (eachCommand === 'R') {
					  index = (index + 1 > 3) ? 0 : index + 1

					  return compassDirection[index];
					}

					if (eachCommand === 'L') {
					  index = (index - 1 < 0) ? 3 : index - 1

					  return compassDirection[index];
					}
		}			  
		}

		
				  
				  
				  
		
			