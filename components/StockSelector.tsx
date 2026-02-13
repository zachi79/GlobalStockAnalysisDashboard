'use client';

import React, { useState, useEffect } from 'react';
import { getAllIndices, getIndexById } from '@/config/indices';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, Loader2 } from 'lucide-react';

export interface StockOption {
  symbol: string;
  name?: string;
  price?: number;
}

interface StockSelectorProps {
  onStockSelected?: (stock: StockOption) => void;
  onIndexChanged?: (indexId: string) => void;
}

/**
 * Fetches quote data for a single stock from API
 */
async function fetchStockQuote(symbol: string): Promise<StockOption | null> {
  try {
    const response = await fetch(`/api/stocks/${symbol}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    return {
      symbol: data.symbol,
      name: data.name,
      price: data.price,
    };
  } catch (error) {
    console.error(`Error fetching quote for ${symbol}:`, error);
    return null;
  }
}

/**
 * StockSelector Component
 * 
 * A dropdown-based stock selector that:
 * 1. Lets you choose an index (S&P 500, TA-125, Nikkei, Europe)
 * 2. Loads stocks from that index from Yahoo Finance
 * 3. Displays them in a dropdown
 * 4. Triggers callback when a stock is selected
 * 
 * Usage:
 * <StockSelector 
 *   onStockSelected={(stock) => console.log(stock)}
 *   onIndexChanged={(indexId) => console.log(indexId)}
 * />
 */
export const StockSelector: React.FC<StockSelectorProps> = ({
  onStockSelected,
  onIndexChanged,
}) => {
  const [selectedIndexId, setSelectedIndexId] = useState<string>('sp500');
  const [selectedStock, setSelectedStock] = useState<StockOption | null>(null);
  const [stocks, setStocks] = useState<StockOption[]>([]);
  const [loadingStocks, setLoadingStocks] = useState(false);
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [showIndexDropdown, setShowIndexDropdown] = useState(false);
  const [showStockDropdown, setShowStockDropdown] = useState(false);

  const indices = getAllIndices();
  const selectedIndex = getIndexById(selectedIndexId);

  // Load stocks when index changes
  useEffect(() => {
    if (!selectedIndex) return;

    const loadStocks = async () => {
      setLoadingStocks(true);
      setSelectedStock(null);
      setStocks([]);

      try {
        const promises = selectedIndex.topStocks.map((symbol) =>
          fetchStockQuote(symbol).then((quote) => 
            quote 
              ? { symbol: quote.symbol, name: quote.name, price: quote.price }
              : { symbol, name: undefined, price: undefined }
          )
        );

        const loadedStocks = await Promise.all(promises);
        // Filter out failed requests but keep the symbols
        setStocks(loadedStocks.filter(s => s.symbol));
      } catch (error) {
        console.error('Error loading stocks:', error);
      } finally {
        setLoadingStocks(false);
      }
    };

    loadStocks();
    onIndexChanged?.(selectedIndexId);
  }, [selectedIndexId, selectedIndex, onIndexChanged]);

  const handleIndexChange = (indexId: string) => {
    setSelectedIndexId(indexId);
    setShowIndexDropdown(false);
  };

  const handleStockSelect = async (stock: StockOption) => {
    setSelectedStock(stock);
    setShowStockDropdown(false);

    // Fetch additional quote data if needed
    if (!stock.price) {
      setLoadingQuote(true);
      try {
        const quote = await fetchStockQuote(stock.symbol);
        if (quote) {
          setSelectedStock((prev) =>
            prev ? { ...prev, price: quote.price } : stock
          );
        }
      } finally {
        setLoadingQuote(false);
      }
    }

    onStockSelected?.(stock);
  };

  return (
    <div className="w-full space-y-6">
      {/* Index Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Select Index</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full">
            <button
              onClick={() => setShowIndexDropdown(!showIndexDropdown)}
              className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <div>
                <p className="font-semibold text-gray-900">
                  {selectedIndex?.label}
                </p>
                <p className="text-sm text-gray-600">{selectedIndex?.description}</p>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  showIndexDropdown ? 'transform rotate-180' : ''
                }`}
              />
            </button>

            {/* Index Dropdown */}
            {showIndexDropdown && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {indices.map((index) => (
                  <button
                    key={index.id}
                    onClick={() => handleIndexChange(index.id)}
                    className={`w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-gray-200 last:border-b-0 transition-colors ${
                      selectedIndexId === index.id ? 'bg-blue-100' : ''
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{index.label}</p>
                    <p className="text-sm text-gray-600">{index.description}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stock Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Select Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Loading State */}
            {loadingStocks && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-5 w-5 animate-spin text-blue-600 mr-2" />
                <p className="text-gray-600">Loading stocks from {selectedIndex?.name}...</p>
              </div>
            )}

            {/* Stock Dropdown */}
            {!loadingStocks && stocks.length > 0 && (
              <div className="relative w-full">
                <button
                  onClick={() => setShowStockDropdown(!showStockDropdown)}
                  className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold text-gray-900">
                      {selectedStock?.symbol || 'Choose a stock...'}
                    </p>
                    {selectedStock?.name && (
                      <p className="text-sm text-gray-600">{selectedStock.name}</p>
                    )}
                    {selectedStock?.price && (
                      <p className="text-sm font-semibold text-blue-600">
                        ${selectedStock.price.toFixed(2)}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      showStockDropdown ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Stock List Dropdown */}
                {showStockDropdown && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
                    {stocks.map((stock) => (
                      <button
                        key={stock.symbol}
                        onClick={() => handleStockSelect(stock)}
                        className={`w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-gray-200 last:border-b-0 transition-colors flex justify-between items-center ${
                          selectedStock?.symbol === stock.symbol ? 'bg-blue-100' : ''
                        }`}
                      >
                        <div>
                          <p className="font-semibold text-gray-900">
                            {stock.symbol}
                          </p>
                          {stock.name && (
                            <p className="text-sm text-gray-600">{stock.name}</p>
                          )}
                        </div>
                        {stock.price && (
                          <div className="text-right">
                            <p className="font-semibold text-blue-600">
                              ${stock.price.toFixed(2)}
                            </p>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* No Stocks Found */}
            {!loadingStocks && stocks.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>No stocks found for this index. Please try another index.</p>
              </div>
            )}

            {/* Loading Quote Data */}
            {loadingQuote && (
              <div className="text-sm text-gray-600 flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Fetching latest price...
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Selected Stock Summary */}
      {selectedStock && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <p className="text-sm text-green-900">
              <span className="font-semibold">Selected:</span> {selectedStock.symbol}
              {selectedStock.name && ` - ${selectedStock.name}`}
            </p>
            {selectedStock.price && (
              <p className="text-lg font-bold text-green-700 mt-2">
                Price: ${selectedStock.price.toFixed(2)}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
