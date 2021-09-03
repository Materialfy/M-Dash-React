import DoughnutChart from "./donut";
import BarChart from './barchart';
import PieChart from "./piechart";

import React from 'react'

export default function index() {
    return (
        <div className='flex justify-center flex-wrap gap-2'>
            <div className='   bg-yellow-200 rounded-lg '>
                <DoughnutChart />
            </div>
            <div className=' bg-blue-200 rounded-lg'>
                <BarChart />
            </div>
            <div className=' bg-red-200 rounded-lg'>
                <PieChart />
            </div>
            <div className=' bg-green-200 rounded-lg '>
                <DoughnutChart />
            </div>
            <div className=' bg-purple-200 rounded-lg'>
                <BarChart />
            </div>
            <div className=' bg-gray-200 rounded-lg'>
                <PieChart />
            </div>
        </div>
    )
}
