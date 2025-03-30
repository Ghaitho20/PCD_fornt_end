import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { year: '1998', nbAllogreffe: 8, nbAutogreffe: 0 },
  { year: '1999', nbAllogreffe: 20, nbAutogreffe: 11 },
  { year: '2000', nbAllogreffe: 28, nbAutogreffe: 7 },
  { year: '2001', nbAllogreffe: 32, nbAutogreffe: 23 },
  { year: '2002', nbAllogreffe: 34, nbAutogreffe: 26 },
  { year: '2003', nbAllogreffe: 35, nbAutogreffe: 39 },
  { year: '2004', nbAllogreffe: 27, nbAutogreffe: 63 },
  { year: '2005', nbAllogreffe: 47, nbAutogreffe: 61 },
  { year: '2006', nbAllogreffe: 48, nbAutogreffe: 68 },
  { year: '2007', nbAllogreffe: 48, nbAutogreffe: 69 },
  { year: '2008', nbAllogreffe: 51, nbAutogreffe: 42 },
  { year: '2009', nbAllogreffe: 55, nbAutogreffe: 67 },
  { year: '2010', nbAllogreffe: 47, nbAutogreffe: 54 },
  { year: '2011', nbAllogreffe: 53, nbAutogreffe: 55 },
  { year: '2012', nbAllogreffe: 46, nbAutogreffe: 53 },
  { year: '2013', nbAllogreffe: 45, nbAutogreffe: 66 },
  { year: '2014', nbAllogreffe: 43, nbAutogreffe: 66 },
  { year: '2015', nbAllogreffe: 37, nbAutogreffe: 53 },
  { year: '2016', nbAllogreffe: 46, nbAutogreffe: 69 },
  { year: '2017', nbAllogreffe: 38, nbAutogreffe: 71 },
  { year: '2018', nbAllogreffe: 46, nbAutogreffe: 61 },
  { year: '2019', nbAllogreffe: 42, nbAutogreffe: 45 },
  { year: '2020', nbAllogreffe: 36, nbAutogreffe: 43 },
  { year: '2021', nbAllogreffe: 49, nbAutogreffe: 56 },

];

const TransActChart = () => {
  return (
    <div style={{ width: "80%", display: 'flex', flexDirection: 'column', alignItems: 'center', margin: "50px auto" }}>
      {/* Title */}
      <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }}>
        Evolution de l'activité de greffe au fil des années
      </h2>

      {/* Subtitles */}
      <p style={{ margin: '5px 0', fontSize: '18px' }}>N= 2176</p>
      <p style={{ margin: '5px 0', fontSize: '16px' }}>
        Allogreffes (n=984) | Autogreffes (n=1192)
      </p>

      {/* Chart (Centered with Flex) */}
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart width={100} height={250} data={data}>
            <XAxis
              dataKey="year"
              label={{
                value: 'Année',
                position: 'insideBottom',
                offset: -5,
              }}
            />
            <YAxis
              label={{
                value: 'Nombre de greffe',
                position: 'insideLeft',
                angle: -90,
                offset: 15,
              }}
            />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />

            {/* Bars */}
            <Bar dataKey="nbAllogreffe" barSize={20} fill="#6495ED" />
            <Bar dataKey="nbAutogreffe" barSize={20} fill="#CD5C5C" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransActChart;