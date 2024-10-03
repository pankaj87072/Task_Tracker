import React, { useState } from 'react';
import { Divider } from '@mui/material';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const ProjectGraph = () => {
  const [completedPercentage, setCompletedPercentage] = useState(71);
  const remainingPercentage = 100 - completedPercentage;

  const data = [
    { name: 'Completed Task', value: completedPercentage, color: '#4CAF50' },
    { name: 'Remaining Task', value: remainingPercentage, color: '#2196F3' },
    { name: 'Deadline', value: 0, color: '#F44336' },
  ];

  return (
    <div className='border border-gray-200 rounded-md bg-white w-full h-fit m-2 shadow-md'>
      <div className='m-2 text-sm sm:text-base font-semibold'>Project Completion</div>
      <Divider />
      <div className='graph w-full h-48 sm:h-64'>
      <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius='50%'
              outerRadius='80%'
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <Divider />
      <div className='graph flex flex-col sm:flex-row sm:flex-wrap justify-center items-start sm:items-center p-2 text-xs sm:text-sm'>
        <div className='text-green-600 flex flex-row items-center m-1 sm:m-2'>
          <div className='w-2 h-2 rounded-full bg-green-600 mr-1 sm:mr-2'></div>
          Completed Task: {completedPercentage}%
        </div>
        <div className='text-blue-600 flex flex-row items-center m-1 sm:m-2'>
          <div className='w-2 h-2 rounded-full bg-blue-600 mr-1 sm:mr-2'></div>
          Remaining Task: {remainingPercentage}%
        </div>
        <div className='text-red-600 flex flex-row items-center m-1 sm:m-2'>
          <div className='w-2 h-2 rounded-full bg-red-600 mr-1 sm:mr-2'></div>
          Deadline: 0%
        </div>
      </div>
    </div>
  );
};

export default ProjectGraph;