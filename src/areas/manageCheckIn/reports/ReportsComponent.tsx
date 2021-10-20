import React, { useState } from 'react';
import { getItem, storageKeys } from '../../../storageManager';
import { CheckInInfo, DailyCheckIn, ServiceStatus } from '../../../types';
import { ReportData, ReportListComponent } from './ReportListComponent';

enum ReportKey {
  barber = 'barber',
  appointmentType = 'appointmentType',
  service = 'service'
};

export function ReportsComponent() {
  const [selection, setSelection] = useState<ReportKey | string>("Select Report View");

  const filterBy = (title: ReportKey, item: ReportKey) => {
    const dailyCheckIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    const checkInInfos = dailyCheckIns
      .reduce((results: CheckInInfo[], each: DailyCheckIn) => ([...results, ...each.checkInInfos]), [])
      .filter(c => c.status === ServiceStatus.COMPLETED);
    return checkInInfos.reduce((results: ReportData[], checkin: CheckInInfo) => {
      const titleIndx = results.findIndex(r => r.title === checkin[title]);

      if (titleIndx > -1) {
        const itemIndex = results[titleIndx].reportItems.findIndex(i => i.item === checkin[item]);
        if (itemIndex > -1) {
          results[titleIndx].reportItems[itemIndex].total++;
        } else {
          results[titleIndx].reportItems.push({
            item: checkin[item],
            total: 1
          })
        }
      } else {
        results.push({
          title: checkin[title],
          reportItems: [{
            item: checkin[item],
            total: 1
          }]
        })
      }

      return results;
    }, []);
  }

  const buttonTextMapping = {
    [ReportKey.barber]: 'By Barbers',
    [ReportKey.service]: 'By Services',
    [ReportKey.appointmentType]: 'By Appointment'
  }

  return (
    <>
      <div className="dropdown">
        <button className="btn navi-color dropdown-toggle w-25 mb-2 fs-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {buttonTextMapping[selection as ReportKey] ?? selection}
        </button>
        <ul className="dropdown-menu w-25" aria-labelledby="dropdownMenuButton1">
          <li><span onClick={() => setSelection(ReportKey.barber)} className="dropdown-item w-100">Barbers</span></li>
          <li><span onClick={() => setSelection(ReportKey.service)} className="dropdown-item">Services</span></li>
          <li><span onClick={() => setSelection(ReportKey.appointmentType)} className="dropdown-item">Appointment</span></li>
        </ul>
      </div>
      <>
        {selection === ReportKey.barber && <div >
          <div className="fs-4 navi-color p-2 mb-2">Services</div>
          <ReportListComponent reportData={filterBy(ReportKey.barber, ReportKey.service)} />
          <div className="fs-4 navi-color p-2 my-2">Appointment Types</div>
          <ReportListComponent reportData={filterBy(ReportKey.barber, ReportKey.appointmentType)} />
        </div>}
        {selection === ReportKey.service && <div >
          <div className="fs-4 navi-color p-2 mb-2">Barbers</div>
          <ReportListComponent reportData={filterBy(ReportKey.service, ReportKey.barber)} />
          <div className="fs-4 navi-color p-2 my-2">Appointment Types</div>
          <ReportListComponent reportData={filterBy(ReportKey.service, ReportKey.appointmentType)} />
        </div>}
        {selection === ReportKey.appointmentType && <div >
          <div className="fs-4 navi-color p-2 mb-2">Barbers</div>
          <ReportListComponent reportData={filterBy(ReportKey.appointmentType, ReportKey.barber)} />
          <div className="fs-4 navi-color p-2 my-2">Services</div>
          <ReportListComponent reportData={filterBy(ReportKey.appointmentType, ReportKey.service)} />
        </div>}
      </>
    </>
  );
}

