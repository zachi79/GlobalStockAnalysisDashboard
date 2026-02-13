'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp, TrendingDown, Target, AlertCircle } from 'lucide-react';

interface SWOTData {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

interface SWOTAnalysisProps {
  symbol: string;
}

export default function SWOTAnalysis({ symbol }: SWOTAnalysisProps) {
  // Mock SWOT data
  const getMockSWOT = (symbol: string): SWOTData => {
    const swotData: { [key: string]: SWOTData } = {
      AAPL: {
        strengths: [
          'Powerful brand with exceptional loyalty and premium positioning',
          'Vertical integration: control over hardware, software, and services',
          'Strong ecosystem creating customer lock-in',
          'Consistent profitability and strong cash generation',
          'Innovation track record in consumer electronics',
          'Premium pricing power with high margins',
        ],
        weaknesses: [
          'Limited product portfolio focusing mainly on premium segment',
          'High dependency on iPhone revenue (>50% of sales)',
          'Closed ecosystem limits third-party integrations',
          'Supply chain concentration risks',
          'Limited presence in emerging market segments',
        ],
        opportunities: [
          'Expansion of services revenue (Apple Music, iCloud, fitness+)',
          'Growth in wearables and smart home devices',
          'Expansion into India and emerging markets',
          'Potential entry into automotive/EV market',
          'AR/VR technologies and spatial computing',
          'Healthcare-focused wearables and services',
        ],
        threats: [
          'Intense competition from Samsung, Google, and Chinese manufacturers',
          'Regulatory pressures on App Store commission practices',
          'Supply chain disruptions and component shortages',
          'Currency fluctuations impacting international sales',
          'Increasing competition in services sector',
          'Changing consumer preferences toward budget devices',
        ],
      },
      MSFT: {
        strengths: [
          'Dominant enterprise software portfolio (Microsoft 365)',
          'Leading cloud platform (Azure) with strong growth',
          'Deep enterprise relationships and customer lock-in',
          'Strong financial position with consistent cash generation',
          'Diverse revenue streams across software, cloud, and gaming',
          'AI leadership with OpenAI partnership',
        ],
        weaknesses: [
          'Limited consumer brand presence compared to competitors',
          'Gaming division (Xbox) has smaller market share',
          'Dependence on PC market for revenue',
          'Legacy systems integration challenges',
          'Cloud market share lower than AWS',
        ],
        opportunities: [
          'AI and machine learning market expansion',
          'Cloud migration acceleration for enterprises',
          'Gaming industry growth and streaming services',
          'Digital transformation in developing markets',
          'Enterprise AI assistant adoption (Copilot)',
          'Expansion of subscription-based services',
        ],
        threats: [
          'Intense competition from Amazon Web Services (AWS)',
          'Growing Google Cloud competition',
          'Regulatory scrutiny on market dominance',
          'Cybersecurity threats and data breaches',
          'Changing technology stacks and open-source alternatives',
          'Economic downturn reducing enterprise IT spending',
        ],
      },
    };

    return swotData[symbol] || {
      strengths: [
        'Strong market position and brand recognition',
        'Established customer base and distribution',
        'Consistent financial performance',
      ],
      weaknesses: [
        'Limited product diversification',
        'High operational costs',
        'Competition in core markets',
      ],
      opportunities: [
        'International market expansion',
        'New technology adoption',
        'Strategic partnerships and M&A',
      ],
      threats: [
        'Market competition and disruption',
        'Economic cyclicality',
        'Regulatory changes',
      ],
    };
  };

  const swot = getMockSWOT(symbol);

  const SWOTSection = ({
    title,
    icon: Icon,
    color,
    bgColor,
    items,
  }: {
    title: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    items: string[];
  }) => (
    <Card className={`${bgColor} border-${color}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          {Icon}
          <CardTitle className={color}>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className={`flex gap-3 text-sm ${color}`}>
              <span className="font-bold flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">SWOT Analysis</h2>
        <p className="text-gray-700">
          Strategic assessment of {symbol}'s internal Strengths & Weaknesses and external Opportunities & Threats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <SWOTSection
          title="Strengths"
          icon={<TrendingUp className="w-6 h-6 text-green-600" />}
          color="text-green-900"
          bgColor="bg-green-50 border-green-200"
          items={swot.strengths}
        />

        {/* Weaknesses */}
        <SWOTSection
          title="Weaknesses"
          icon={<TrendingDown className="w-6 h-6 text-red-600" />}
          color="text-red-900"
          bgColor="bg-red-50 border-red-200"
          items={swot.weaknesses}
        />

        {/* Opportunities */}
        <SWOTSection
          title="Opportunities"
          icon={<Target className="w-6 h-6 text-blue-600" />}
          color="text-blue-900"
          bgColor="bg-blue-50 border-blue-200"
          items={swot.opportunities}
        />

        {/* Threats */}
        <SWOTSection
          title="Threats"
          icon={<AlertCircle className="w-6 h-6 text-yellow-600" />}
          color="text-yellow-900"
          bgColor="bg-yellow-50 border-yellow-200"
          items={swot.threats}
        />
      </div>
    </div>
  );
}
