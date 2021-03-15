window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2",
    animationEnabled: true,
    
		title:{
			text: "Sunset Hills"              
		},
		data: [         
           
		{
			type: "column",
			dataPoints: [
        { label: "Building #1",  y: 2 ,color: "#0000dd" },
        { label: "Building #2", y: 3 ,color: "#0000dd" },
        { label: "Building #3", y: 5 ,color: "#0000dd" },
        { label: "Building #4",  y: 7 ,color: "#0000dd" },
        { label: "Building #5",  y: 8 ,color: "#0000dd" },
        { label: "Building #6",  y: 9 ,color: "#0000dd"}
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
    if (isNaN(bar1) || isNaN(bar2) || isNaN(bar3) || isNaN(bar4) || isNaN(bar5) || isNaN(bar6) ) {
      chart.options.data[0].dataPoints[0].y = 0
      chart.options.data[0].dataPoints[1].y = 0
      chart.options.data[0].dataPoints[2].y = 0
      chart.options.data[0].dataPoints[3].y = 0
      chart.options.data[0].dataPoints[4].y = 0
      chart.options.data[0].dataPoints[5].y = 0
      chart.render();
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'You should enter into all blanks >.< !!!',
        showConfirmButton: false,
        timer: 1500
      })
    } else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'I got your result!!!',
        showConfirmButton: false,
        timer: 1500
      })  
  let have_light = [],
  temp_max = bar1,
  temp1 = 0;
  let temp2 = "";
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
      temp2 = temp2.split(",")
      for (k=0; k < my_array.length; k++){
        chart.options.data[0].dataPoints[k].y = my_array[k]
      }
      for (i=0;i<temp2.length; i++){
        let u = parseInt(temp2[i])-1
        chart.options.data[0].dataPoints[u].color = "#ff8822"
      }
    } else {
      document.getElementById("how_many").placeholder = 1
      chart.options.data[0].dataPoints[0].color = "#ff8822"
      document.getElementById("which_one").placeholder = 1
    }
  }else if (bar1 == null || bar2 == null || bar3 == null || bar4 == null || bar5 == null || bar6 == null ) {
    document.getElementById("how_many").placeholder = "You should enter number into all building"
    document.getElementById("which_one").placeholder = "You should enter number into all building"
  }else {
    document.getElementById("how_many").placeholder = "You should enter a number different that zero"
    document.getElementById("which_one").placeholder = "You should enter a number different that zero"
  }
  for (k=0; k < my_array.length; k++){
    chart.options.data[0].dataPoints[k].y = my_array[k]
  }
    chart.render();
  }
  });
  $("#advance").click(function () {
    document.getElementById("bar1").value = ''
    document.getElementById("bar2").value = ''
    document.getElementById("bar3").value = ''
    document.getElementById("bar4").value = ''
    document.getElementById("bar5").value = ''
    document.getElementById("bar6").value = ''
    document.getElementById("how_many").placeholder = "Result"
    document.getElementById("which_one").placeholder = "Result"
    for (i=0;i<6;i++){

    chart.options.data[0].dataPoints[i].color = "#0000dd"
    chart.options.data[0].dataPoints[i].y = 0
    }
    let bar1 = Math.floor(Math.random() * 100)+1,
    bar2 = Math.floor(Math.random() * 100)+1,
    bar3 = Math.floor(Math.random() * 100)+1,
    bar4 = Math.floor(Math.random() * 100)+1,
    bar5 = Math.floor(Math.random() * 100)+1,
    bar6 = Math.floor(Math.random() * 100)+1;
    document.getElementById("bar1").value = bar1
    document.getElementById("bar2").value = bar2,
    document.getElementById("bar3").value = bar3,
    document.getElementById("bar4").value = bar4,
    document.getElementById("bar5").value = bar5,
    document.getElementById("bar6").value = bar6;
        my_array =[bar1,bar2,bar3,bar4,bar5,bar6];
    for (k=0; k < my_array.length; k++){
      chart.options.data[0].dataPoints[k].y = my_array[k]
    }
    
    let have_light = [],
    temp_max = bar1,
    temp1 = 0;
    let temp2 = "";
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
        temp2 = temp2.split(",")
        for (k=0; k < my_array.length; k++){
          chart.options.data[0].dataPoints[k].y = my_array[k]
        }
        for (i=0;i<temp2.length; i++){
          let u = parseInt(temp2[i])-1
          chart.options.data[0].dataPoints[u].color = "#ff8822"
        }
      } else {
        document.getElementById("how_many").placeholder = 1
        chart.options.data[0].dataPoints[0].color = "#ff8822"
        document.getElementById("which_one").placeholder = 1
      }
    }else if (bar1 == null || bar2 == null || bar3 == null || bar4 == null || bar5 == null || bar6 == null ) {
      document.getElementById("how_many").placeholder = "You should enter number into all building"
      document.getElementById("which_one").placeholder = "You should enter number into all building"
    }else {
      document.getElementById("how_many").placeholder = "You should enter a number different that zero"
      document.getElementById("which_one").placeholder = "You should enter a number different that zero"
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'I got your result!!!',
      showConfirmButton: false,
      timer: 1500
    })  
      chart.render();
  });
  $("#clearword").click(function () {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Everything is Clearrrr!',
      showConfirmButton: false,
      timer: 1500
    })
    document.getElementById("bar1").value = ''
    document.getElementById("bar2").value = ''
    document.getElementById("bar3").value = ''
    document.getElementById("bar4").value = ''
    document.getElementById("bar5").value = ''
    document.getElementById("bar6").value = ''
    document.getElementById("how_many").placeholder = "Result"
    document.getElementById("which_one").placeholder = "Result"
    for (i=0;i<6;i++){

    chart.options.data[0].dataPoints[i].color = "#0000dd"
    chart.options.data[0].dataPoints[i].y = 0
    }
    chart.render();
  })
}


