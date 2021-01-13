window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2",
    animationEnabled: true,
    
		title:{
			text: "Sunset Hills"              
		},
		data: [              
		{
      color: "#ffca67",
			type: "column",
			dataPoints: [
        { label: "Building #1",  y: 2  },
        { label: "Building #2", y: 3  },
        { label: "Building #3", y: 5  },
        { label: "Building #4",  y: 7  },
        { label: "Building #5",  y: 8  },
        { label: "Building #6",  y: 9 }
			]
		}
		]
  });
  chart.render();
  $("#checksunshine").click(function () {
    let bar1 = parseInt(document.getElementById("bar1").value),
        bar2 = parseInt(document.getElementById("bar2").value),
        bar3 = parseInt(document.getElementById("bar3").value),
        bar4 = parseInt(document.getElementById("bar4").value),
        bar5 = parseInt(document.getElementById("bar5").value),
        bar6 = parseInt(document.getElementById("bar6").value),
        my_array =[bar1,bar2,bar3,bar4,bar5,bar6];
    if (bar1 == null || bar2 == null || bar3 == null || bar4 == null || bar5 == null || bar6 == null ) {
      chart.options.data[0].dataPoints[0].y = 1
      chart.options.data[0].dataPoints[1].y = 1
      chart.options.data[0].dataPoints[2].y = 1
      chart.options.data[0].dataPoints[3].y = 1
      chart.options.data[0].dataPoints[4].y = 1
      chart.options.data[0].dataPoints[5].y = 1
      chart.render();
    } else{
    for (k=0; k < my_array.length; k++){
      chart.options.data[0].dataPoints[k].y = my_array[k]
    }
    chart.render();
  }
  })
  $("#advance").click(function () {
    let bar1 = parseInt(document.getElementById("bar1").value),
        bar2 = parseInt(document.getElementById("bar2").value),
        bar3 = parseInt(document.getElementById("bar3").value),
        bar4 = parseInt(document.getElementById("bar4").value),
        bar5 = parseInt(document.getElementById("bar5").value),
        bar6 = parseInt(document.getElementById("bar6").value),
        my_array =[bar1,bar2,bar3,bar4,bar5,bar6];
    for (k=0; k < my_array.length; k++){
      chart.options.data[0].dataPoints[k].y = my_array[k]
    }
    chart.render();
  })
}

function clearword(){
  document.getElementById("bar1").value = ''
  document.getElementById("bar2").value = ''
  document.getElementById("bar3").value = ''
  document.getElementById("bar4").value = ''
  document.getElementById("bar5").value = ''
  document.getElementById("bar6").value = ''
  document.getElementById("how_many").placeholder = "Result"
  document.getElementById("which_one").placeholder = "Result"
}
function checksunshine(){
  let bar1 = parseInt(document.getElementById("bar1").value),
      bar2 = parseInt(document.getElementById("bar2").value),
      bar3 = parseInt(document.getElementById("bar3").value),
      bar4 = parseInt(document.getElementById("bar4").value),
      bar5 = parseInt(document.getElementById("bar5").value),
      bar6 = parseInt(document.getElementById("bar6").value);
  let my_array =[bar1,bar2,bar3,bar4,bar5,bar6];
  let have_light = [],
      temp_max = bar1,
      temp1 = 0,
      temp2 = "";
  if (!my_array.includes(0) && !my_array.some(isNaN) ) {
    for (i=1; i < my_array.length; i++){
      if (my_array[i] > my_array[i-1] && my_array[i] > temp_max){
        have_light.push([i+1])
        temp_max = my_array[i]
      }
    }
    if (have_light.length > 0){
      temp1 = have_light.length + 1
      temp2 = "1";
      for (each=0; each < have_light.length; each++){
        temp2 += "," + have_light[each].toString()
      }
      document.getElementById("how_many").placeholder = temp1
      document.getElementById("which_one").placeholder = temp2
    } else {
      document.getElementById("how_many").placeholder = 1
      document.getElementById("which_one").placeholder = 1
    }
  }else if (bar1 == null || bar2 == null || bar3 == null || bar4 == null || bar5 == null || bar6 == null ) {
    document.getElementById("how_many").placeholder = "You should enter number into all building"
    document.getElementById("which_one").placeholder = "You should enter number into all building"
  }else {
    document.getElementById("how_many").placeholder = "You should enter a number different that zero"
    document.getElementById("which_one").placeholder = "You should enter a number different that zero"
  }
}
function advance(){
  let bar1 = Math.floor(Math.random() * 100),
      bar2 = Math.floor(Math.random() * 100),
      bar3 = Math.floor(Math.random() * 100),
      bar4 = Math.floor(Math.random() * 100),
      bar5 = Math.floor(Math.random() * 100),
      bar6 = Math.floor(Math.random() * 100);
      document.getElementById("bar1").value = bar1
      document.getElementById("bar2").value = bar2,
      document.getElementById("bar3").value = bar3,
      document.getElementById("bar4").value = bar4,
      document.getElementById("bar5").value = bar5,
      document.getElementById("bar6").value = bar6;
      checksunshine();
}