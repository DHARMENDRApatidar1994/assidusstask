// WatchList.js

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WatchList = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    x.domain(data.map((d) => d.account));
    y.domain([0, d3.max(data, (d) => Math.max(d.thisMonth, d.oneYear))]);

    svg
      .selectAll('.bar-this-month')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-this-month')
      .attr('x', (d) => x(d.account))
      .attr('width', x.bandwidth() / 2)
      .attr('y', (d) => y(d.thisMonth))
      .attr('height', (d) => height - y(d.thisMonth));

    svg
      .selectAll('.bar-one-year')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-one-year')
      .attr('x', (d) => x(d.account) + x.bandwidth() / 2)
      .attr('width', x.bandwidth() / 2)
      .attr('y', (d) => y(d.oneYear))
      .attr('height', (d) => height - y(d.oneYear));

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default WatchList;
