import React, { useEffect, useState } from 'react';
import { fetchTimeZones, fetchTimeForZone } from '../services/timeZoneService';
import TimeZoneCard from './TimeZoneCard';

const TimeZoneList = () => {
  const [timeZones, setTimeZones] = useState([]);
  const [timeData, setTimeData] = useState({});

  useEffect(() => {
    const loadTimeZones = async () => {
      const zones = await fetchTimeZones();
      setTimeZones(zones);
    };

    loadTimeZones();
  }, []);

  useEffect(() => {
    const loadTimeForZones = async () => {
      const timeData = {};
      for (const zone of timeZones) {
        const data = await fetchTimeForZone(zone.zoneName);
        timeData[zone.zoneName] = {
          datetime: data.formatted,
          abbreviation: data.abbreviation,
          gmtOffset: data.gmtOffset,
        };
      }
      setTimeData(timeData);
    };

    if (timeZones.length > 0) {
      loadTimeForZones();
    }
  }, [timeZones]);

  return (
    <div className="time-zone-list">
      {timeZones.map((zone) => (
        <TimeZoneCard
          key={zone.zoneName}
          timeZone={zone.zoneName}
          datetime={timeData[zone.zoneName]?.datetime}
          abbreviation={timeData[zone.zoneName]?.abbreviation}
          gmtOffset={timeData[zone.zoneName]?.gmtOffset}
        />
      ))}
    </div>
  );
};

export default TimeZoneList;

