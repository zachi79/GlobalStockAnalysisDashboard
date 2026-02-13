'use client';

import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  summary: string;
  url?: string;
}

interface NewsFeedProps {
  symbol: string;
}

export default function NewsFeed({ symbol }: NewsFeedProps) {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // TODO: Integrate with real news API (NewsAPI, Financial Modeling Prep, etc.)
        // For now, use mock data
        const mockNews = generateMockNews(symbol);
        setNews(mockNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews(generateMockNews(symbol));
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [symbol]);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-50 border-green-200 text-green-900';
      case 'negative':
        return 'bg-red-50 border-red-200 text-red-900';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <Card className="p-6 w-full">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All →
          </button>
        </div>

        {loading ? (
          <div className="py-8 text-center text-gray-500">
            Loading news...
          </div>
        ) : news.length > 0 ? (
          <div className="space-y-4">
            {news.map((article) => (
              <article
                key={article.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 line-clamp-2">
                        {article.url ? (
                          <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {article.title}
                          </a>
                        ) : (
                          article.title
                        )}
                      </h3>
                    </div>
                    {article.url && (
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">{article.source}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{getTimeAgo(article.date)}</span>
                    </div>

                    {/* Sentiment Badge */}
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getSentimentColor(
                        article.sentiment
                      )}`}
                    >
                      {getSentimentIcon(article.sentiment)}
                      <span className="capitalize">{article.sentiment}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-700 text-sm line-clamp-2">{article.summary}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-gray-500">
            No news available for this stock
          </div>
        )}
      </div>
    </Card>
  );
}

function generateMockNews(symbol: string): NewsArticle[] {
  const mockNewsData: { [key: string]: NewsArticle[] } = {
    AAPL: [
      {
        id: '1',
        title: 'Apple Plans Major Expansion in India Manufacturing, Targeting $10B Investment',
        source: 'Reuters',
        date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        sentiment: 'positive',
        summary:
          'Apple has announced plans to significantly increase manufacturing capacity in India, pledging a $10 billion investment over the next five years.',
      },
      {
        id: '2',
        title: 'iPhone 15 Pro Sales Exceed Expectations, Buoying Q4 Outlook',
        source: 'Bloomberg',
        date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        sentiment: 'positive',
        summary:
          'Strong demand for the latest iPhone models has led to higher-than-expected sales in early quarter, improving revenue forecasts.',
      },
      {
        id: '3',
        title: 'Regulatory Scrutiny Increases Over App Store Practices',
        source: 'CNBC',
        date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        sentiment: 'negative',
        summary:
          'European and US regulators continue to investigate Apple\'s App Store commission policies and exclusionary practices.',
      },
      {
        id: '4',
        title: 'Services Revenue Growth Accelerates, Offsetting iPhone Decline Concerns',
        source: 'Financial Times',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        sentiment: 'positive',
        summary:
          'Apple\'s services segment, including iCloud and Apple Music, continues to grow at double-digit rates.',
      },
    ],
    MSFT: [
      {
        id: '1',
        title: 'Microsoft Accelerates AI Integration into Office 365 Products',
        source: 'Verge',
        date: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        sentiment: 'positive',
        summary:
          'New AI-powered features for Word, Excel, and Teams aim to boost productivity and drive adoption of cloud services.',
      },
      {
        id: '2',
        title: 'Azure Cloud Revenue Growth Continues to Outpace Competition',
        source: 'ZDNet',
        date: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        sentiment: 'positive',
        summary:
          'Microsoft\'s cloud platform continues to gain market share, with enterprise customers migrating workloads at accelerating rates.',
      },
    ],
  };

  return mockNewsData[symbol] || generateRandomNews(symbol);
}

function generateRandomNews(symbol: string): NewsArticle[] {
  const headlines = [
    `${symbol} Reports Strong Quarterly Earnings`,
    `Analysts Maintain Positive Outlook on ${symbol}`,
    `${symbol} Announces New Product Launch`,
    `${symbol} Expands International Operations`,
    `Market Sentiment Shifts for ${symbol}`,
  ];

  const sources = ['Reuters', 'Bloomberg', 'CNBC', 'Financial Times', 'WSJ', 'MarketWatch'];
  const sentiments = ['positive', 'neutral', 'negative'] as const;

  return Array.from({ length: 3 }).map((_, i) => ({
    id: `mock-${i}`,
    title: headlines[Math.floor(Math.random() * headlines.length)],
    source: sources[Math.floor(Math.random() * sources.length)],
    date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
    summary: `Latest developments regarding ${symbol} stock and market performance...`,
  }));
}
