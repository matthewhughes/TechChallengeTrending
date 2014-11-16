data = [

        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Tweets"
        ,

        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Facebook Shares"
        ,

        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "LinkedIn Comments"
]

options = [
  segmentShowStroke : false,
  animateScale : true
]

ctx = document.getElementById("myChart").getContext("2d")
myNewChart = new Chart(ctx).PolarArea(data)
myPieChart = new Chart(ctx[0]).Pie(data, options)
