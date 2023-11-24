import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarGraph = ({ barData }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    // Set the dimensions of the SVG container
    const width = 400;
    const height = 200;

    // Set the scale for x and y axes
    const xScale = d3
      .scaleBand()
      .domain(barData.map((d, i) => i))
      .range([0, width])
      .padding(0.7);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(barData)])
      .range([height, 0]);

    // Add bars to the graph with two colors
    svg
      .selectAll('.bar')
      .data(barData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      // .attr('fill', (d, i) => (i % 2 === 0 ? 'green' : 'green'));
      .attr('fill',  'green');

    // Add a second set of bars for the second color
    svg
      .selectAll('.bar2')
      .data(barData)
      .enter()
      .append('rect')
      .attr('class', 'bar2')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => (height - yScale(d)) / 2)
      .attr('fill', 'aqua');

    // Add x-axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append('g').call(d3.axisLeft(yScale));
  }, [barData]);

  return(
    <div className='  rounded p-2' style={{backgroundColor:"white"}}>
   <svg ref={svgRef} width={400} height={200}></svg>
   <div className='d-flex justify-content-evenly mt-3' style={{fontSize:"10px"}}>
      <p style={{marginLeft:"30px"}}>July</p>
      <p style={{marginLeft:"20px"}}>Agust</p>
      <p style={{marginLeft:"10px"}}>September</p>
      <p>October</p>
      <p>November</p>
      <p>December</p>
    </div>
   </div>
  )
};

export default BarGraph;
