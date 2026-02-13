'use client';

import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from './ui/card';

interface PriceChartProps {
  symbol: string;
  timeframe?: '1D' | '1W' | '1M' | '6M' | '1Y' | '3Y' | '5Y';
}

interface ChartDataPoint {
  date: string;
  price: number;
  volume?: number;
}

export default function PriceChart({ symbol, timeframe = '1M' }: PriceChartProps) {
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>(timeframe);

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/stocks/${symbol}/chart?timeframe=${selectedTimeframe}`);
        const chartData = await response.json();
        setData(chartData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
        // Fallback to mock data
        setData(generateMockChartData(selectedTimeframe));
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [symbol, selectedTimeframe]);

  const timeframes = ['1D', '1W', '1M', '6M', '1Y', '3Y', '5Y'];

  return (
    <Card className="p-6 w-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Price History</h2>
          <div className="flex gap-2 flex-wrap">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  selectedTimeframe === tf
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="h-96 flex items-center justify-center text-gray-500">
            Loading chart data...
          </div>
        ) : data.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                stroke="#9ca3af"
              />
              <YAxis
                tick={{ fontSize: 12 }}
                stroke="#9ca3af"
                domain={['dataMin - 5', 'dataMax + 5']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
                formatter={(value) => {
                  if (typeof value === 'number') {
                    return `$${value.toFixed(2)}`;
                  }
                  return value;
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                dot={false}
                strokeWidth={2}
                name="Price"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-96 flex items-center justify-center text-gray-500">
            No data available
          </div>
        )}

        <div className="text-sm text-gray-600">
          <p>Timeframe: {selectedTimeframe}</p>
          {data.length > 0 && (
            <>
              <p>Current: ${data[data.length - 1].price.toFixed(2)}</p>
              <p>
                Change:{' '}
                {(
                  data[data.length - 1].price - data[0].price >= 0
                    ? '+'
                    : ''
                )}
                ${(data[data.length - 1].price - data[0].price).toFixed(2)} (
                {(
                  ((data[data.length - 1].price - data[0].price) / data[0].price) *
                  100
                ).toFixed(2)}
                %)
              </p>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}

// Generate mock chart data for different timeframes
function generateMockChartData(timeframe: string): ChartDataPoint[] {
  const dataPoints: { [key: string]: number } = {
    '1D': 24,
    '1W': 7,
    '1M': 22,
    '6M': 26,
    '1Y': 52,
    '3Y': 156,
    '5Y': 260,
  };

  const points = dataPoints[timeframe] || 22;
  const data: ChartDataPoint[] = [];
  let basePrice = 100;

  for (let i = 0; i < points; i++) {
    const volatility = (Math.random() - 0.5) * 10;
    basePrice += volatility;
    
    data.push({
      date: getDateLabel(timeframe, i),
      price: Math.max(basePrice, 50),
      volume: Math.floor(Math.random() * 1000000),
    });
  }

  return data;
}

function getDateLabel(timeframe: string, index: number): string {
  const now = new Date();
  let date = new Date(now);

  switch (timeframe) {
    case '1D':
      date.setHours(date.getHours() - (24 - index));
      return date.toLocaleTimeString('en-US', { hour: '2-digit' });
    case '1W':
      date.setDate(date.getDate() - (7 - index));
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    case '1M':
      date.setDate(date.getDate() - (22 - index));
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    case '6M':
      date.setDate(date.getDate() - (26 * 7 - index * 7));
      return date.toLocaleDateString('en-US', { month: 'short' });
    case '1Y':
      date.setDate(date.getDate() - (52 * 7 - index * 7));
      return date.toLocaleDateString('en-US', { month: 'short' });
    case '3Y':
      date.setMonth(date.getMonth() - (36 - Math.floor(index / 4)));
      return date.toLocaleDateString('en-US', { year: '2-digit', month: 'short' });
    case '5Y':
      date.setMonth(date.getMonth() - (60 - Math.floor(index / 4)));
      return date.toLocaleDateString('en-US', { year: '2-digit', month: 'short' });
    default:
      return date.toLocaleDateString();
  }
}
