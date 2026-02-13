'use client';

import React from 'react';
import { Card } from './ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AnalystConsensusProps {
  symbol: string;
}

interface ConsensusData {
  buyPercentage: number;
  holdPercentage: number;
  sellPercentage: number;
  targetPrice: number;
  currentPrice: number;
  numberOfAnalysts: number;
  recommendation: 'Buy' | 'Hold' | 'Sell';
}

export default function AnalystConsensus({ symbol }: AnalystConsensusProps) {
  // Mock data - in production, this would come from an API
  const getAnalystConsensus = (symbol: string): ConsensusData => {
    const mockData: { [key: string]: ConsensusData } = {
      AAPL: {
        buyPercentage: 68,
        holdPercentage: 22,
        sellPercentage: 10,
        targetPrice: 210.50,
        currentPrice: 185.50,
        numberOfAnalysts: 45,
        recommendation: 'Buy',
      },
      MSFT: {
        buyPercentage: 75,
        holdPercentage: 18,
        sellPercentage: 7,
        targetPrice: 445.00,
        currentPrice: 410.25,
        numberOfAnalysts: 42,
        recommendation: 'Buy',
      },
      GOOGL: {
        buyPercentage: 65,
        holdPercentage: 28,
        sellPercentage: 7,
        targetPrice: 160.00,
        currentPrice: 140.75,
        numberOfAnalysts: 38,
        recommendation: 'Buy',
      },
      TSLA: {
        buyPercentage: 52,
        holdPercentage: 22,
        sellPercentage: 26,
        targetPrice: 280.00,
        currentPrice: 242.30,
        numberOfAnalysts: 40,
        recommendation: 'Hold',
      },
    };

    return mockData[symbol] || {
      buyPercentage: Math.floor(Math.random() * 30) + 50,
      holdPercentage: Math.floor(Math.random() * 20) + 15,
      sellPercentage: Math.floor(Math.random() * 20) + 5,
      targetPrice: 200 + Math.random() * 100,
      currentPrice: 150 + Math.random() * 100,
      numberOfAnalysts: Math.floor(Math.random() * 30) + 30,
      recommendation: Math.random() > 0.6 ? 'Buy' : 'Hold',
    };
  };

  const consensus = getAnalystConsensus(symbol);
  const upside = ((consensus.targetPrice - consensus.currentPrice) / consensus.currentPrice) * 100;

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'Buy':
        return 'bg-green-50 border-green-200 text-green-900';
      case 'Hold':
        return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      case 'Sell':
        return 'bg-red-50 border-red-200 text-red-900';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  const getRecommendationIcon = (rec: string) => {
    switch (rec) {
      case 'Buy':
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case 'Sell':
        return <TrendingDown className="w-5 h-5 text-red-600" />;
      default:
        return <Minus className="w-5 h-5 text-yellow-600" />;
    }
  };

  return (
    <Card className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-6">Analyst Consensus</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommendation Box */}
        <div className={`border-2 rounded-lg p-6 ${getRecommendationColor(consensus.recommendation)}`}>
          <div className="flex items-center gap-3 mb-3">
            {getRecommendationIcon(consensus.recommendation)}
            <span className="text-lg font-bold">Overall Recommendation</span>
          </div>
          <p className="text-3xl font-bold">{consensus.recommendation}</p>
          <p className="text-sm mt-2">{consensus.numberOfAnalysts} analysts covering this stock</p>
        </div>

        {/* Target Price Box */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="font-semibold text-gray-900 mb-4">12-Month Target Price</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Target Price</p>
              <p className="text-2xl font-bold text-gray-900">
                ${consensus.targetPrice.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Price</p>
              <p className="text-lg text-gray-700">
                ${consensus.currentPrice.toFixed(2)}
              </p>
            </div>
            <div className={`pt-3 border-t ${upside >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <p className="text-sm">Potential Upside</p>
              <p className="text-2xl font-bold">
                {upside >= 0 ? '+' : ''}{upside.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Votes Breakdown */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Analyst Votes</h3>

        {/* Buy */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Buy</span>
            <span className="text-sm font-bold text-green-600">{consensus.buyPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all"
              style={{ width: `${consensus.buyPercentage}%` }}
            />
          </div>
        </div>

        {/* Hold */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Hold</span>
            <span className="text-sm font-bold text-yellow-600">{consensus.holdPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-yellow-500 h-full transition-all"
              style={{ width: `${consensus.holdPercentage}%` }}
            />
          </div>
        </div>

        {/* Sell */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Sell</span>
            <span className="text-sm font-bold text-red-600">{consensus.sellPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-red-500 h-full transition-all"
              style={{ width: `${consensus.sellPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
