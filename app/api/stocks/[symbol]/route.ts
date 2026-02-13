import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

/**
 * API Route: GET /api/stocks/[symbol]
 * 
 * Fetches stock data for a given symbol from Yahoo Finance via a public API
 * 
 * Usage:
 * GET /api/stocks/AAPL
 * GET /api/stocks/AAPL?detailed=true
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { symbol: string } }
) {
  try {
    const symbol = params.symbol.toUpperCase();
    const searchParams = request.nextUrl.searchParams;
    const detailed = searchParams.get('detailed') === 'true';

    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol is required' },
        { status: 400 }
      );
    }

    // Fetch quote data from Yahoo Finance API (rapid-api endpoint)
    const result = await axios.get(`https://yh-finance.p.rapidapi.com/stock/v2/get-summary`, {
      params: { symbol },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY || 'demo',
        'x-rapidapi-host': 'yh-finance.p.rapidapi.com'
      }
    }).catch(() => {
      // Fallback: Return mock data if API fails
      return { data: getMockStockData(symbol) };
    });

    const quoteData = result.data.quoteSummary?.result?.[0]?.price || {};
    const profileData = result.data.quoteSummary?.result?.[0]?.summaryProfile || {};
    const financialData = result.data.quoteSummary?.result?.[0]?.financialData || {};
    
    if (!quoteData || !quoteData.regularMarketPrice) {
      return NextResponse.json(
        { error: 'Stock not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      symbol: quoteData.symbol || symbol,
      name: quoteData.longName || quoteData.shortName || symbol,
      price: quoteData.regularMarketPrice,
      currency: quoteData.currency || 'USD',
      marketCap: financialData.marketCap,
      peRatio: quoteData.trailingPE || quoteData.forwardPE,
      pegRatio: quoteData.pegRatio,
      eps: financialData.operatingCashflow,
      dividend: quoteData.trailingAnnualDividendYield,
      beta: quoteData.beta,
      fiftyTwoWeekHigh: quoteData.fiftyTwoWeekHigh,
      fiftyTwoWeekLow: quoteData.fiftyTwoWeekLow,
      
      ...(detailed && {
        // Additional detailed fields
        sector: profileData.sector || 'N/A',
        industry: profileData.industry || 'N/A',
        website: profileData.website || '',
        description: profileData.longBusinessSummary || 'No description available',
        employees: profileData.fullTimeEmployees,
        revenue: financialData.totalRevenue,
        grossProfit: financialData.grossProfits,
        operatingCashFlow: financialData.operatingCashflow,
        freeCashFlow: financialData.freeCashflow,
        currentRatio: financialData.currentRatio,
        debtToEquity: financialData.debtToEquity,
        roe: financialData.returnOnEquity,
        roa: financialData.returnOnAssets,
        roic: financialData.returnOnCapital,
        dividendYield: quoteData.dividendYield,
        fiftyDayAverage: quoteData.fiftyDayAverage,
        twoHundredDayAverage: quoteData.twoHundredDayAverage,
        currentPrice: quoteData.regularMarketPrice,
      }),
    });
  } catch (error: any) {
    console.error(`Error fetching stock ${params.symbol}:`, error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch stock data' },
      { status: 500 }
    );
  }
}

// Mock data function for fallback
function getMockStockData(symbol: string) {
  const mockPrices: { [key: string]: number } = {
    AAPL: 238.45,
    MSFT: 445.80,
    GOOGL: 306.57,
    TSLA: 285.60,
    AMZN: 215.75,
    NVDA: 925.50,
    META: 585.20,
    NFLX: 310.45,
    TCEHY: 98.75,
    BABA: 110.25,
    SNP500: 5845.00,
    TLV: 1625.00,
    TOMUSD: 32150.50,
    FTSE100: 8250.25,
    DAX: 19485.75,
  };

  const price = mockPrices[symbol] || Math.random() * 500 + 50;

  // Stock-specific metrics
  const stockMetrics: { [key: string]: any } = {
    AAPL: {
      trailingPE: 32.5,
      forwardPE: 28.4,
      pegRatio: 2.1,
      eps: 7.34,
      dividendYield: 0.0042,
    },
    MSFT: {
      trailingPE: 38.2,
      forwardPE: 33.1,
      pegRatio: 2.4,
      eps: 11.67,
      dividendYield: 0.0068,
    },
    GOOGL: {
      trailingPE: 28.3,
      forwardPE: 25.8,
      pegRatio: 1.9,
      eps: 10.80,
      dividendYield: 0.0,
    },
    TSLA: {
      trailingPE: 62.1,
      forwardPE: 54.3,
      pegRatio: 2.8,
      eps: 4.59,
      dividendYield: 0.0,
    },
    AMZN: {
      trailingPE: 41.8,
      forwardPE: 37.2,
      pegRatio: 2.2,
      eps: 5.15,
      dividendYield: 0.0,
    },
    NVDA: {
      trailingPE: 58.4,
      forwardPE: 48.2,
      pegRatio: 2.6,
      eps: 15.84,
      dividendYield: 0.0028,
    },
    META: {
      trailingPE: 28.9,
      forwardPE: 24.1,
      pegRatio: 1.85,
      eps: 20.26,
      dividendYield: 0.0,
    },
    NFLX: {
      trailingPE: 45.3,
      forwardPE: 39.7,
      pegRatio: 2.35,
      eps: 6.84,
      dividendYield: 0.0,
    },
  };

  const metrics = stockMetrics[symbol] || {
    trailingPE: 25.5,
    forwardPE: 22.3,
    pegRatio: 1.8,
    eps: 12.0,
    dividendYield: 0.015,
  };

  return {
    quoteSummary: {
      result: [
        {
          price: {
            symbol,
            shortName: symbol,
            longName: `${symbol} Corporation`,
            regularMarketPrice: price,
            currency: 'USD',
            trailingPE: metrics.trailingPE,
            forwardPE: metrics.forwardPE,
            pegRatio: metrics.pegRatio,
            beta: 1.2,
            fiftyTwoWeekHigh: price * 1.3,
            fiftyTwoWeekLow: price * 0.7,
            fiftyDayAverage: price * 1.05,
            twoHundredDayAverage: price * 1.02,
            trailingAnnualDividendYield: metrics.dividendYield,
            dividendYield: metrics.dividendYield,
          },
          summaryProfile: {
            sector: 'Technology',
            industry: 'Software Infrastructure',
            website: `https://www.${symbol.toLowerCase()}.com`,
            longBusinessSummary: `${symbol} is a leading company in the technology sector.`,
            fullTimeEmployees: 180000,
          },
          financialData: {
            marketCap: price * 1000000000,
            totalRevenue: 394328000000,
            grossProfits: 198987000000,
            operatingCashflow: 110543000000,
            freeCashflow: 95735000000,
            currentRatio: 1.35,
            debtToEquity: 0.12,
            returnOnEquity: 0.78,
            returnOnAssets: 0.25,
            returnOnCapital: 0.45,
          },
        },
      ],
    },
  };
}
