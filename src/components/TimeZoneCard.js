import React from 'react';

const TimeZoneCard = ({ countryName, flagUrl, timeZone, datetime }) => {
  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  return (
    <div className="glass-box p-6 m-4 flex flex-col items-center text-center">
      <img src={flagUrl} alt={`${countryName} flag`} className="w-16 h-16 mb-2" />
      <h3 className="text-xl font-semibold mb-2">{countryName}</h3>
      <p className="text-gray-700 text-lg mb-1">{timeZone}</p>
      <p className="text-gray-700 text-lg mb-1">{formatDateTime(datetime)}</p>
    </div>
  );
};

export default TimeZoneCard;
