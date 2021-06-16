import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart=props=>{ // props because we need data from another component i.e, we need data from chartbar component in chart componrnt
   const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
   
    const  totalMaximum=Math.max(...dataPointValues);                 
  return(
  <div className="chart">
     {props.dataPoints.map((dataPoint) => (
         <ChartBar 
         key={dataPoint.label}
         value={dataPoint.value}
         maxValue={totalMaximum}
         label={dataPoint.label}
         />
         ))}
  </div>
  
  );
};
export default Chart;