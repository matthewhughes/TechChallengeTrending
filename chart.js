// Generated by CoffeeScript 1.8.0
(function() {
  var ctx, data, myNewChart, myDoughnutChart, options;

  data = [
    {
      value: 300,
      color: "#F7464A",
      highlight: "#FF5A5E",
      label: "Tweets"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Facebook Shares"}
    ,
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "LinkedIn Comments"
    }
  ];

  options = {
      segmentShowStroke: false,
      animateScale: true,
      showTooltips: true,
      tooltipTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };

  ctx = document.getElementById("myChart").getContext("2d");

  myNewChart = new Chart(ctx).PolarArea(data);

  myDoughnutChart = new Chart(ctx).Doughnut(data, options);

}).call(this);
