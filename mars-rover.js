function outputFirst(){
			
			var input1 = document.getElementById("size").value;
			var input2 = document.getElementById("start1").value;
			var input3 = document.getElementById("command1").value;
			document.getElementById("out1").innerHTML = "your first output is " + output(input2,input3);
		}
		function outputSecond(){
			var input4 = document.getElementById("start2").value;
			var input5 = document.getElementById("command2").value;
			document.getElementById("out2").innerHTML = "your second output is " + output(input4,input5);
		}
			
				
				
				
				
		function output(initialPoint, command) {
			var x = Number( initialPoint[0] );
			var y = Number( initialPoint[2] );
			var direction = initialPoint.charAt( initialPoint.length -1 );
			var steps = command.split('');

			steps.forEach( function(step){
				 if ( step === 'L' || step === 'R' ) {
						return direction = turn(direction, step);
					}
						return action(direction);
					});

			function action(eachCommand){
				switch (eachCommand) {
					case 'N':
						y =y + 1
						 break;
					case 'E':
						x =x + 1
						 break;
					case 'S':
						y =y - 1
						 break;
					case 'W':
						x =x - 1
						 break;
					  }
					}

					return [x, y, direction].join(',');
		}

				  
				  
				  
				  
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
			