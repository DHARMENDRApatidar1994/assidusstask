// LineChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ chartData }) => {
  const chartRef = useRef();

  useEffect(() => {
    // D3 code to create the line chart
    const svg = d3.select(chartRef.current);

    // Set up the scales
    const xScale = d3
      .scaleLinear()
      .domain([0, chartData.length - 1])
      .range([0, 400]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.value)])
      .range([200, 0]);

    // Define the line function
    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.value))
      .curve(d3.curveCardinal); // You can choose a different curve type

    // Create the line path
    svg
      .append('path')
      .data([chartData])
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'green');

    // Add labels for each data point
    svg
      .selectAll('text')
      .data(chartData)
      .enter()
      .append('text')
      .attr('x', (d, i) => xScale(i))
      .attr('y', (d) => yScale(d.value) - 5) // Adjust the vertical position
      .text((d) => d.value)
      .attr('text-anchor', 'middle') // Center the text on the x-coordinate
      .attr('font-size', '10px')
      .attr('fill', 'black');
  }, [chartData]);

  return (
    <div className='  rounded p-2' style={{backgroundColor:"white"}}>
    <svg ref={chartRef} width={400} height={200}>
      {/* SVG contents will be rendered here */}
    </svg>
    <div className='d-flex justify-content-between mt-3' style={{fontSize:"10px"}}>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
          </div>
    </div>
  );
};

export default LineChart;





// // LineChart.js
// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const LineChart = ({ chartData }) => {
//   const chartRef = useRef();

//   useEffect(() => {
//     // D3 code to create the line chart
//     const svg = d3.select(chartRef.current);

//     // Set up the scales
//     const xScale = d3
//       .scaleLinear()
//       .domain([0, chartData.length - 1])
//       .range([0, 400]);

//     const yScale = d3
//       .scaleLinear()
//       .domain([0, d3.max(chartData, (d) => d.value)])
//       .range([200, 0]);

//     // Define the line function
//     const line = d3
//       .line()
//       .x((d, i) => xScale(i))
//       .y((d) => yScale(d.value))
//       .curve(d3.curveCardinal); // You can choose a different curve type

//     // Create the line path
//     svg
//       .append('path')
//       .data([chartData])
//       .attr('d', line)
//       .attr('fill', 'none')
//       .attr('stroke', 'blue');
//   }, [chartData]);

//   return (
//     <svg ref={chartRef} width={400} height={200}>
//       {/* SVG contents will be rendered here */}
//     </svg>
//   );
// };

// export default LineChart;
