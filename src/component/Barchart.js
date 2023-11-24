// BarChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // D3 code to create the bar chart
    const svg = d3.select(chartRef.current);

    // Set up the scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, 400])
      .padding(0.7);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([200, 0]);

    // Create the bars
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.label))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => 200 - yScale(d.value))
      .attr('fill', 'green');
  }, [data]);

  return (
    <div className='  rounded p-2' style={{backgroundColor:"white"}}>
    <svg className='  '  ref={chartRef} width={400} height={200}>
     
    </svg>
    <div className='d-flex justify-content-evenly mt-3' style={{fontSize:"10px"}}>
      <p>Janurary</p>
      <p style={{marginLeft:"-17px"}}>Feburary</p>
      <p style={{marginLeft:"-13px"}}>March</p>
      <p>April</p>
      <p>May</p>
      <p>June</p>
    </div>
    
  </div>
  );
};

export default BarChart;
