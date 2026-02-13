'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users } from 'lucide-react';

interface ManagementMember {
  name: string;
  title: string;
  background: string;
  yearsInRole?: number;
}

interface ManagementTeamProps {
  symbol: string;
}

export default function ManagementTeam({ symbol }: ManagementTeamProps) {
  // Mock management data
  const getMockManagement = (symbol: string) => {
    const managementData: { [key: string]: { vision: string; team: ManagementMember[] } } = {
      AAPL: {
        vision:
          'To create products that enrich lives by combining innovative hardware, software, and services. Apple believes technology should be intuitive, sustainable, and accessible to everyone. The company focuses on creating experiences that delight customers, not just features.',
        team: [
          {
            name: 'Tim Cook',
            title: 'Chief Executive Officer',
            background: 'Former Chief Operating Officer at Apple, overseeing operations and supply chain.',
            yearsInRole: 13,
          },
          {
            name: 'Craig Federighi',
            title: 'Senior Vice President, Software Engineering',
            background: 'Leads macOS, iOS, watchOS, and tvOS development. Joined Apple in 2009.',
            yearsInRole: 15,
          },
          {
            name: 'Katherine L. Adams',
            title: 'Chief Financial Officer',
            background: 'Former Vice President of Finance. Expert in financial planning and M&A.',
            yearsInRole: 7,
          },
          {
            name: 'Eddy Cue',
            title: 'Senior Vice President, Services',
            background: 'Leads iTunes, Apple Music, Apple TV+, and other services. Joined in 2009.',
            yearsInRole: 15,
          },
          {
            name: 'Jennifer Bailey',
            title: 'Vice President, Apple Pay & Services',
            background: 'Leads payment strategy and digital services. Joined Apple in 2016.',
            yearsInRole: 8,
          },
        ],
      },
      MSFT: {
        vision:
          "To empower every person and every organization on the planet to achieve more. Microsoft believes technology should be a catalyst for positive change, emphasizing cloud computing, AI, and accessibility.",
        team: [
          {
            name: 'Satya Nadella',
            title: 'Chief Executive Officer',
            background: 'Former president of cloud and enterprise at Microsoft. Transformed MSFT into cloud leader.',
            yearsInRole: 11,
          },
          {
            name: 'Amy Hood',
            title: 'Executive Vice President, Chief Financial Officer',
            background: 'Led financial strategy and investor relations. Joined in 1996.',
            yearsInRole: 10,
          },
          {
            name: 'Judson Althoff',
            title: 'Executive Vice President, Worldwide Commercial',
            background: 'Leads global enterprise relationships and commercial strategies.',
            yearsInRole: 6,
          },
          {
            name: 'Michelle Gill',
            title: 'Chief People Officer',
            background: 'Leads human resources and organizational development strategies.',
            yearsInRole: 5,
          },
        ],
      },
      GOOGL: {
        vision:
          "To organize the world's information and make it universally accessible and useful. Google aims to push technology forward while maintaining its commitment to do no evil and advance social good.",
        team: [
          {
            name: 'Sundar Pichai',
            title: 'CEO of Google and Alphabet',
            background: 'Former Senior Vice President of Products. Led Chrome and other key initiatives.',
            yearsInRole: 3,
          },
          {
            name: 'Ruth Porat',
            title: 'Chief Financial Officer',
            background: 'Former CFO at Morgan Stanley. Leads financial strategy for Alphabet.',
            yearsInRole: 9,
          },
          {
            name: 'Philipp Schindler',
            title: 'Chief Business Officer',
            background: 'Manages Google ads and commercial partnerships. Joined in 1998.',
            yearsInRole: 20,
          },
          {
            name: 'Lorraine Twohill',
            title: 'Chief Marketing Officer',
            background: 'Leads global marketing strategy and brand initiatives.',
            yearsInRole: 11,
          },
        ],
      },
    };

    return managementData[symbol] || {
      vision: `${symbol} is committed to innovation and delivering value to customers, employees, and shareholders. The company focuses on sustainable growth and technological advancement.`,
      team: [
        {
          name: 'Chief Executive Officer',
          title: 'CEO',
          background: 'Leads overall strategy and operations',
        },
        {
          name: 'Chief Financial Officer',
          title: 'CFO',
          background: 'Manages financial planning and capital allocation',
        },
        {
          name: 'Chief Technology Officer',
          title: 'CTO',
          background: 'Oversees technology strategy and innovation',
        },
      ],
    };
  };

  const { vision, team } = getMockManagement(symbol);

  return (
    <div className="space-y-6">
      {/* Company Vision */}
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl">Company Vision & Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-900 leading-relaxed font-medium">{vision}</p>
        </CardContent>
      </Card>

      {/* Management Team */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" />
            <CardTitle>Management Team</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {team.map((member: ManagementMember, idx: number) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-4 py-3">
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{member.title}</p>
                <p className="text-gray-700 text-sm">{member.background}</p>
                {member.yearsInRole && (
                  <p className="text-xs text-gray-500 mt-2">In role for {member.yearsInRole} years</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
