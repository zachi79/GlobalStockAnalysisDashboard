'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Info } from 'lucide-react';

interface CompanyOverviewProps {
  symbol: string;
  data?: {
    name?: string;
    sector?: string;
    industry?: string;
    description?: string;
    website?: string;
    employees?: number;
    competitors?: string[];
  };
}

export default function CompanyOverview({ symbol, data }: CompanyOverviewProps) {
  // Mock company data for demonstration
  const getMockCompanyData = (symbol: string) => {
    const companyData: { [key: string]: any } = {
      AAPL: {
        name: 'Apple Inc.',
        sector: 'Technology',
        industry: 'Consumer Electronics',
        products: [
          'iPhones - Smartphones and mobile devices',
          'Macs - Laptops and desktop computers',
          'iPads - Tablets',
          'Apple Watch - Wearables',
          'Services - App Store, iCloud, Apple Music, Apple TV+',
          'Apple Silicon - Custom processors',
        ],
        moat: 'Ecosystem lock-in, brand loyalty, App Store control, vertical integration of hardware-software, massive installed user base',
        competitors: ['Samsung', 'Microsoft', 'Google', 'Meta'],
        description:
          'Apple designs, manufactures, and markets consumer electronics, including the iPhone, Mac, iPad, and Apple Watch. The company also provides software and services through its ecosystem.',
        website: 'www.apple.com',
        employees: 161000,
      },
      MSFT: {
        name: 'Microsoft Corporation',
        sector: 'Technology',
        industry: 'Software & Services',
        products: [
          'Windows - Operating System',
          'Microsoft 365 - Office productivity suite',
          'Azure - Cloud computing platform',
          'Xbox - Gaming console',
          'LinkedIn - Professional networking',
          'AI Services - Copilot, Azure AI',
        ],
        moat: 'Enterprise software lock-in, cloud infrastructure, network effects, AI leadership',
        competitors: ['Apple', 'Google', 'Amazon Web Services', 'IBM'],
        description:
          'Microsoft develops software, services, and solutions including operating systems, productivity applications, cloud computing, gaming, and professional networking.',
        website: 'www.microsoft.com',
        employees: 221000,
      },
      GOOGL: {
        name: 'Alphabet Inc.',
        sector: 'Technology',
        industry: 'Internet Services',
        products: [
          'Google Search - Search engine',
          'Google Ads - Advertising platform',
          'YouTube - Video streaming',
          'Google Cloud - Cloud services',
          'Android - Mobile OS',
          'Gmail - Email service',
          'Chrome - Web browser',
        ],
        moat: 'Search dominance, advertising network, Android ecosystem, data advantage',
        competitors: ['Meta', 'Amazon', 'Microsoft', 'Apple'],
        description:
          'Alphabet is a holding company that owns Google, a leader in search, advertising, and cloud services, and other companies in autonomous vehicles, healthcare, and technology.',
        website: 'www.google.com',
        employees: 190234,
      },
    };

    return companyData[symbol] || {
      name: `${symbol} Corporation`,
      sector: 'Technology',
      industry: 'Software & Services',
      products: [
        `${symbol} Product Line 1 - Core offering`,
        `${symbol} Product Line 2 - Secondary offering`,
        `${symbol} Services - Support and cloud services`,
      ],
      moat: 'Strong brand, customer loyalty, technological advantage',
      competitors: ['Competitor A', 'Competitor B', 'Competitor C'],
      description: `${symbol} is a leading company in its industry providing innovative solutions and services.`,
      website: `www.${symbol.toLowerCase()}.com`,
      employees: 50000,
    };
  };

  const companyData = data || getMockCompanyData(symbol);

  return (
    <div className="space-y-6">
      {/* Main Company Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{companyData.name || symbol}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sector & Industry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Sector</p>
              <p className="text-lg font-semibold text-gray-900">{companyData.sector}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Industry</p>
              <p className="text-lg font-semibold text-gray-900">{companyData.industry}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Employees</p>
              <p className="text-lg font-semibold text-gray-900">
                {companyData.employees ? `${(companyData.employees / 1000).toFixed(1)}K` : 'N/A'}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">About the Company</h3>
            <p className="text-gray-700 leading-relaxed">{companyData.description}</p>
            {companyData.website && (
              <p className="text-sm text-blue-600 mt-2">
                <a href={`https://${companyData.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {companyData.website} →
                </a>
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Products & Services */}
      <Card>
        <CardHeader>
          <CardTitle>Products & Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {companyData.products?.map((product: string, idx: number) => (
              <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{idx + 1}</span>
                </div>
                <p className="text-gray-700 flex-1">{product}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Advantage */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Advantage (Moat)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-green-900">{companyData.moat}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Competitors */}
      <Card>
        <CardHeader>
          <CardTitle>Main Competitors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {companyData.competitors?.map((competitor: string, idx: number) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900">{competitor}</p>
                <p className="text-xs text-gray-500 mt-1">Competitor</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
