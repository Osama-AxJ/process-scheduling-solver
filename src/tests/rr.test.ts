import { rr } from '../algorithms/rr';

test.each([
    [[0, 1, 2, 3], [5, 4, 2, 1], 2, {
        solvedProcessesInfo: [
            { job: 0, at: 0, bt: 5, ft: 10, tat: 10, wat: 5 },
            { job: 1, at: 1, bt: 4, ft: 9, tat: 8, wat: 4 },
            { job: 2, at: 2, bt: 2, ft: 6, tat: 4, wat: 2 },
            { job: 3, at: 3, bt: 1, ft: 4, tat: 1, wat: 0 }
        ],
        ganttChartInfo: [
            { job: 0, start: 0, stop: 2 },
            { job: 1, start: 2, stop: 4 },
            { job: 2, start: 4, stop: 6 },
            { job: 3, start: 6, stop: 7 },
            { job: 0, start: 7, stop: 9 },
            { job: 1, start: 9, stop: 10 }
        ]
    }]
])('RR test %#', (arrivalTime, burstTime, timeQuantum, expected) => {
    expect(rr(arrivalTime, burstTime, timeQuantum)).toEqual(expected);
});
