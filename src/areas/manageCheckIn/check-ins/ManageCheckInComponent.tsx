import React, { useEffect, useState } from 'react';
import { getItem, setItem, storageKeys } from '../../../storageManager';
import { CheckInInfo, DailyCheckIn } from '../../../types';
import { CheckInEditComponent } from './CheckInEditComponent';
import { ManageDailyCheckInListComponent } from './ManageDailyCheckInListComponent';
import { ManageActionPayload, ManageAction } from '../ManageComponent';

export function ManageCheckInComponent(props: any) {
  const formatValue = (num: number) => num.toString().length < 2 ? '0' + num : num;
  const d = new Date();
  const dateString = `${d.getFullYear()}-${formatValue(d.getMonth() + 1)}-${formatValue(d.getDate())}`;
  const [checkInDateToFilterBy, setCheckInDateToFilterBy] = useState<string>(dateString);
  const [editing, setEditing] = useState<boolean>(false);
  const [, setShouldRefresh] = useState<any>();
  const [checkInToEdit, setCheckInToEdit] = useState<CheckInInfo | undefined>();

  const getCheckInToEdit = () => {
    const dailyCheckIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    const manageActionPayload = getItem<ManageActionPayload>(storageKeys.CHECKIN_MANAGE_ACTION);

    for (const item of dailyCheckIns) {
      const checkIn = item.checkInInfos.find(c => c.id === manageActionPayload?.id);
      if (checkIn) {
        return checkIn;
      }
    }
  };

  useEffect(() => {
    setCheckInToEdit(undefined);
  }, [checkInDateToFilterBy]);

  useEffect(() => {
    if (!checkInToEdit) {
      setEditing(false);
    }
  }, [checkInToEdit]);


  const getValuesFromStorage = () => {
    const dailyCheckIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    const manageActionPayload = getItem<ManageActionPayload>(storageKeys.CHECKIN_MANAGE_ACTION);
    return { dailyCheckIns, manageActionPayload };
  };

  const parseDate = (dateString: string) => Date
    .parse(Intl.DateTimeFormat('en-US')
      .format(new Date(dateString)));

  const getDailyCheckInByDate = () => {
    const formattedCheckInDateToFilterBy = checkInDateToFilterBy.replace('-', '/');
    const checkIns = getItem<DailyCheckIn[]>(storageKeys.DAILY_CHECKINS) ?? [];
    const foundDailyCheckIn = checkIns.find((t: DailyCheckIn) => parseDate(t.date) === parseDate(formattedCheckInDateToFilterBy)) as DailyCheckIn;
    return foundDailyCheckIn;
  };

  const deleteCheckIn = () => {
    const { dailyCheckIns, manageActionPayload } = getValuesFromStorage();

    for (const item of dailyCheckIns) {
      item.checkInInfos = item.checkInInfos.filter(c => c.id !== manageActionPayload?.id);
    }

    setItem(storageKeys.DAILY_CHECKINS, dailyCheckIns);
  };

  const handleManageAction = (payload: ManageActionPayload) => {
    setItem(storageKeys.CHECKIN_MANAGE_ACTION, payload);

    if (payload.action === ManageAction.EDIT) {
      setEditing(true);
      setCheckInToEdit(getCheckInToEdit());
    }
    if (payload.action === ManageAction.DELETE) {
      deleteCheckIn();
      setShouldRefresh(payload);
    }
  };

  return (
    <div className="">
      <div className="my-2">
        <div className="fs-4 fw-bold">
          Select Check-in Date
        </div>
        <div className="text-left">
          <input onChange={(e: any) => setCheckInDateToFilterBy(e.target.value)} className="m-2 fs-3 fw-bold border-1" type="date" id="start" name="start-date" value={checkInDateToFilterBy} min="2021-01-01" max="2050-01-01" />
        </div>
      </div>
      {editing && <CheckInEditComponent checkInInfo={checkInToEdit} setShouldRefresh={setShouldRefresh} />}
      <div className="mt-4">
        <div>
          <ManageDailyCheckInListComponent dailyCheckIn={getDailyCheckInByDate()} handleManageAction={handleManageAction} />
        </div>
      </div>
    </div>);
}
