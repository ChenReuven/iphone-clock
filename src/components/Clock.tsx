import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  return (
    <div className="w-64 h-64 bg-white rounded-full shadow-lg relative">
      <div className="w-full h-full rounded-full bg-white relative">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full text-xl font-bold text-gray-800"
            style={{
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: '10px',
                transform: `translateX(-50%) rotate(-${i * 30}deg)`,
              }}
            >
              {i === 0 ? 12 : i}
            </span>
          </div>
        ))}
        <div
          className="absolute w-1 h-16 bg-gray-800 rounded-full left-1/2 bottom-1/2 origin-bottom transform -translate-x-1/2"
          style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
        />
        <div
          className="absolute w-1 h-24 bg-gray-800 rounded-full left-1/2 bottom-1/2 origin-bottom transform -translate-x-1/2"
          style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
        />
        <div
          className="absolute w-0.5 h-28 bg-red-500 rounded-full left-1/2 bottom-1/2 origin-bottom transform -translate-x-1/2"
          style={{ transform: `translateX(-50%) rotate(${secondDegrees}deg)` }}
        />
        <div className="absolute w-3 h-3 bg-red-500 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Clock;