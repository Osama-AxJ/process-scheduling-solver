import { GanttChartInfoType } from '.';

export const fcfs = (arrivalTime: number[], burstTime: number[]) => {
    const processesInfo = arrivalTime
        .map((item, index) => ({
            job: index,
            at: item,
            bt: burstTime[index],
        }))
        .sort((obj1, obj2) => {
            if (obj1.at > obj2.at) {
                return 1;
            }
            if (obj1.at < obj2.at) {
                return -1;
            }
            return 0;
        });

    const startTime: number[] = [];
    const finishTime: number[] = [];
    const ganttChartInfo: GanttChartInfoType = [];

    const solvedProcessesInfo = processesInfo.map((process, index) => {
        if (index === 0 || process.at > finishTime[index - 1]) {
            startTime[index] = process.at,
            finishTime[index] = process.at + process.bt;     

            ganttChartInfo.push({
                job: process.job,
                start: startTime[index],
                stop: finishTime[index],
            });
        } else {
            startTime[index] = finishTime[index - 1];
            finishTime[index] = finishTime[index - 1] + process.bt;

            ganttChartInfo.push({
                job: process.job,
                start: finishTime[index - 1],
                stop: finishTime[index],
            });
        }

        return {
            ...process,
            ft: finishTime[index],
            tat: finishTime[index] - process.at,
            wat: finishTime[index] - process.at - process.bt,
            rt: startTime[index] - process.at,
        };
    });

    return { solvedProcessesInfo, ganttChartInfo };
};
