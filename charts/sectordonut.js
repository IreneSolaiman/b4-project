    var donut = donutChart()
        .width(960)
        .height(500)
        .cornerRadius(3) // sets how rounded the corners are on each slice
        .padAngle(0.015) // effectively dictates the gap between slices
        .variable('Percent')
        .category('Sector');

    d3.csv('charts/donut.csv', function(Records, data) {
        if (Records) throw Records;
        d3.select('#chart')
            .datum(data) // bind data to the div
            .call(donut); // draw chart in div
    });
