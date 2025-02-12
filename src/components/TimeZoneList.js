import React, { useEffect, useState } from 'react';
import { fetchTimeForZone } from '../services/timeZoneService';
import TimeZoneCard from './TimeZoneCard';

const TimeZoneList = () => {
  const [timeData, setTimeData] = useState({});

  const timeZones = [
    { countryName: 'United Kingdom', flagUrl: 'https://flagcdn.com/w320/gb.png', timeZone: 'Europe/London' },
    { countryName: 'India', flagUrl: 'https://flagcdn.com/w320/in.png', timeZone: 'Asia/Kolkata' },
  ];

  useEffect(() => {
    const loadTimeForZones = async () => {
      const timeData = {};
      for (const zone of timeZones) {
        const data = await fetchTimeForZone(zone.timeZone);
        timeData[zone.timeZone] = data.formatted;
      }
      setTimeData(timeData);
    };

    loadTimeForZones();
  }, []);

  return (
    <div className="time-zone-list grid grid-cols-1 sm:grid-cols-2 gap-4">
      {timeZones.map((zone) => (
        <TimeZoneCard
          key={zone.timeZone}
          countryName={zone.countryName}
          flagUrl={zone.flagUrl}
          timeZone={zone.timeZone}
          datetime={timeData[zone.timeZone]}
        />
      ))}
    </div>
  );
};

export default TimeZoneList;
