import React from 'react';

export interface ReportItem {
  item: string;
  total: number;
}

export interface ReportData {
  title: string;
  reportItems: ReportItem[];
}

interface ReportListComponentProps {
  reportData: ReportData[];
}

export function ReportListComponent(props: ReportListComponentProps) {
  return (
    <div className="row fade-in px-3">
      {props.reportData.map((data, i) => (
        <div className="border">
          <h5 className="fs-6 border-bottom my-2">{data.title}</h5>
          <table className="table table-borderless">
            <thead className="bg-secondary">
              <tr>
                <th className="py-0" scope="col">Report Item</th>
                <th className="py-0" scope="col">Count</th>
              </tr>
            </thead>
            <tbody>
              {data.reportItems.map(({ item, total }, i) => (
                <tr key={i} className="border-bottom rounded table-row-color">
                  <td className="py-0">{item}</td>
                  <td className="py-0 col-2 text-right">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
