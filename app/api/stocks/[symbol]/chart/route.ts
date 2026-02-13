import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route: GET /api/stocks/[symbol]/chart
 * 
 * Fetches historical price data for a stock
 * 
 * Query params:
 * - timeframe: '1D' | '1W' | '1M' | '6M' | '1Y' | '3Y' | '5Y'
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { symbol: string } }
) {
  try {
    const symbol = params.symbol.toUpperCase();
    const timeframe = request.nextUrl.searchParams.get('timeframe') || '1M';

    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol is required' },
        { status: 400 }
      );
    }

    // TODO: Integrate with real data source (Yahoo Finance or similar)
    // For now, return mock historical data
    const chartData = generateHistoricalData(symbol, timeframe);

    return NextResponse.json(chartData);
  } catch (error: any) {
    console.error(`Error fetching chart data for ${params.symbol}:`, error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch chart data' },
      { status: 500 }
    );
  }
}

interface ChartDataPoint {
  date: string;
  price: number;
  volume: number;
}

function generateHistoricalData(symbol: string, timeframe: string): ChartDataPoint[] {
  const mockPrices: { [key: string]: number } = {
    AAPL: 238.45,
    MSFT: 445.80,
    GOOGL: 306.57,
    TSLA: 285.60,
    AMZN: 215.75,
    NVDA: 925.50,
    META: 585.20,
    NFLX: 310.45,
  };

  const basePrice = mockPrices[symbol] || 150;
  const dataPoints: { [key: string]: number } = {
    '1D': 24,    // 24 hourly points
    '1W': 7,     // 7 daily points
    '1M': 22,    // ~22 trading days
    '6M': 26,    // ~26 weeks
    '1Y': 52,    // 52 weeks
    '3Y': 156,   // ~156 weeks
    '5Y': 260,   // ~260 weeks
  };

  const points = dataPoints[timeframe] || 22;
  const data: ChartDataPoint[] = [];
  let currentPrice = basePrice;

  for (let i = 0; i < points; i++) {
    // Add random volatility with slight trend
    const volatility = (Math.random() - 0.48) * (basePrice * 0.02);
    currentPrice = Math.max(currentPrice + volatility, basePrice * 0.5);

    data.push({
      date: getDateLabel(timeframe, i, points),
      price: Number(currentPrice.toFixed(2)),
      volume: Math.floor(Math.random() * 50000000) + 10000000,
    });
  }

  return data;
}

function getDateLabel(timeframe: string, index: number, total: number): string {
  const now = new Date();
  let date = new Date(now);

  switch (timeframe) {
    case '1D':
      // Current time minus hours
      date.setHours(date.getHours() - (total - index));
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit'
      });

    case '1W':
      // Daily over a week
      date.setDate(date.getDate() - (total - index));
      return date.toLocaleDateString('en-US', { weekday: 'short' });

    case '1M':
      // Trading days over a month
      date.setDate(date.getDate() - Math.floor((total - index) * 1.2));
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    case '6M':
      // Weekly
      date.setDate(date.getDate() - (total - index) * 7);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    case '1Y':
      // Weekly
      date.setDate(date.getDate() - (total - index) * 7);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    case '3Y':
      // Monthly
      date.setMonth(date.getMonth() - (total - index));
      return date.toLocaleDateString('en-US', { year: '2-digit', month: 'short' });

    case '5Y':
      // Monthly
      date.setMonth(date.getMonth() - (total - index));
      return date.toLocaleDateString('en-US', { year: '2-digit', month: 'short' });

    default:
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}
