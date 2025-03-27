import { fcfs } from '../algorithms/fcfs';

test.each([
    [[0, 1, 3], [5, 3, 8], {
        solvedProcessesInfo: [
            { job: 0, at: 0, bt: 5, ft: 5, tat: 5, wat: 0 },
            { job: 1, at: 1, bt: 3, ft: 8, tat: 7, wat: 4 },
            { job: 2, at: 3, bt: 8, ft: 16, tat: 13, wat: 5 }
        ],
        ganttChartInfo: [
            { job: 0, start: 0, stop: 5 },
            { job: 1, start: 5, stop: 8 },
            { job: 2, start: 8, stop: 16 }
        ]
    }],
    [[2, 4, 6], [3, 6, 1], {
        solvedProcessesInfo: [
            { job: 0, at: 2, bt: 3, ft: 5, tat: 3, wat: 0 },
            { job: 1, at: 4, bt: 6, ft: 11, tat: 7, wat: 1 },
            { job: 2, at: 6, bt: 1, ft: 12, tat: 6, wat: 5 }
        ],
        ganttChartInfo: [
            { job: 0, start: 2, stop: 5 },
            { job: 1, start: 5, stop: 11 },
            { job: 2, start: 11, stop: 12 }
        ]
    }]
])('FCFS test %#', (arrivalTime, burstTime, expected) => {
    expect(fcfs(arrivalTime, burstTime)).toEqual(expected);
});

