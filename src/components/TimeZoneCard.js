import React from 'react';

const TimeZoneCard = ({ timeZone, datetime, abbreviation, gmtOffset }) => {
  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  return (
    <div className="time-zone-card bg-white p-6 m-4 text-center">
      <h3 className="text-xl font-semibold mb-2">{timeZone}</h3>
      <p className="text-gray-700 text-lg mb-1">{formatDateTime(datetime)}</p>
      <p className="text-gray-500">Time Zone: {abbreviation}</p>
      <p className="text-gray-500">GMT Offset: {gmtOffset}</p>
    </div>
  );
};

export default TimeZoneCard;
