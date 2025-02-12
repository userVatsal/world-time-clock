import React from 'react';

const TimeZoneCard = ({ timeZone, datetime, abbreviation, gmtOffset }) => {
  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  return (
    <div className="time-zone-card">
      <h3>{timeZone}</h3>
      <p>{formatDateTime(datetime)}</p>
      <p>Time Zone: {abbreviation}</p>
      <p>GMT Offset: {gmtOffset}</p>
    </div>
  );
};

export default TimeZoneCard;

