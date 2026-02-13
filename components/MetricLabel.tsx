'use client';

import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { useHebrewTooltip } from '@/lib/hebrew-tooltips';

interface MetricLabelProps {
  label: string;
  metricId?: string; // Use to auto-fetch Hebrew tooltip
  hebrewTooltip?: string; // Or provide directly
  className?: string;
  showTooltipIcon?: boolean;
}

/**
 * MetricLabel Component
 * 
 * Displays a metric label with an optional Hebrew tooltip.
 * 
 * Two ways to use:
 * 1. Auto-fetch from config:
 *    <MetricLabel label="P/E Ratio" metricId="peRatio" />
 * 
 * 2. Provide directly:
 *    <MetricLabel label="P/E Ratio" hebrewTooltip="יחס מחיר להכנסה" />
 * 
 * If hebrewTooltip is provided, shows an info icon that reveals the translation on hover.
 */
export const MetricLabel: React.FC<MetricLabelProps> = ({
  label,
  metricId,
  hebrewTooltip: directTooltip,
  className = '',
  showTooltipIcon = true,
}) => {
  // Get Hebrew tooltip from hook if metricId is provided
  const autoTooltip = metricId ? useHebrewTooltip(metricId) : undefined;
  const tooltip = directTooltip || autoTooltip;

  // If no Hebrew tooltip, just display the label
  if (!tooltip) {
    return <span className={`text-sm font-medium ${className}`}>{label}</span>;
  }

  // If Hebrew tooltip exists, wrap with tooltip component
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`flex items-center gap-2 cursor-help ${className}`}>
            <span className="text-sm font-medium">{label}</span>
            {showTooltipIcon && (
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors" />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-slate-900 text-white max-w-xs">
          <p className="text-sm">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
