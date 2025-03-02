import { useState } from 'react';

// Define types for our data
export interface WeatherData {
  highTemp: number;
  lowTemp: number;
  sol: number;
  unit: string;
}

export interface DistanceData {
  mars: number;
  earth: number;
  unit: string;
}

export interface NewsItem {
  date: string;
  title: string;
}

export interface MarsData {
  weather: WeatherData;
  distances: DistanceData;
  news: NewsItem[];
}

export const useMarsData = () => {
  // Weather data state
  const [weatherData, setWeatherData] = useState<WeatherData>({
    highTemp: -4,
    lowTemp: -98,
    sol: 3039,
    unit: '°F'
  });

  // Distance data state
  const [distanceData, setDistanceData] = useState<DistanceData>({
    mars: 142,
    earth: 93,
    unit: 'million miles avg.'
  });

  // News data state
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      date: 'November 18, 2021',
      title: 'NASA\'s Perseverance Captures Challenging Flight by Mars Helicopter'
    },
    {
      date: 'December 5, 2021',
      title: 'Perseverance Rover Discovers Ancient Lake Deposits'
    },
    {
      date: 'January 12, 2022',
      title: 'New Study Reveals Potential for Ancient Microbial Life'
    },
    {
      date: 'February 28, 2022',
      title: 'New Rover Instruments Detect Organic Compounds'
    }
  ]);

  // Function to update weather data
  const updateWeatherData = (newData: Partial<WeatherData>) => {
    setWeatherData(prev => ({ ...prev, ...newData }));
  };

  // Function to update distance data
  const updateDistanceData = (newData: Partial<DistanceData>) => {
    setDistanceData(prev => ({ ...prev, ...newData }));
  };

  // Function to add a news item
  const addNewsItem = (newsItem: NewsItem) => {
    setNewsItems(prev => [newsItem, ...prev]);
  };

  // Function to update a news item
  const updateNewsItem = (index: number, updatedItem: Partial<NewsItem>) => {
    setNewsItems(prev => 
      prev.map((item, i) => 
        i === index ? { ...item, ...updatedItem } : item
      )
    );
  };

  // Function to remove a news item
  const removeNewsItem = (index: number) => {
    setNewsItems(prev => prev.filter((_, i) => i !== index));
  };

  return {
    weatherData,
    distanceData,
    newsItems,
    updateWeatherData,
    updateDistanceData,
    addNewsItem,
    updateNewsItem,
    removeNewsItem
  };
}; 