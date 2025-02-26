import React from 'react';
import './StatusSyslog.css';
import { StatusData } from './StatusData';
const StatusSyslog = () => {
  return (
    <div className="syslog-status md:flex  w-full items-center justify-center">
      <div className="status-sys-container">
        <ul className="status-sys-list w-full  block md:flex md:flex-wrap md:justify-center flex-col items-start md:flex-row md:gap-10  lg:flex-nowrap">
          {StatusData.map((item, index) => (
            <li
              className="status-sys-item flex items-center text-white font-semibold rounded px-4 py-3  basis-1/3 min-w-48"
              key={index}
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className="status-sys-icon  h-3 mr-2">{item.icon}</div>
              <div className="status-sys-text flex flex-col items-start">
                <p className="status-sys-title uppercase text-sm">
                  {item.title}
                </p>
                <p className="status-sys-data">{item.data}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default StatusSyslog;
