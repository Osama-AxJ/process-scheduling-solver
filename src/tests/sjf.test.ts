import { sjf } from '../algorithms/sjf';

test.each([
    [
        [0, 1, 2, 3], // Arrival times
        [5, 4, 2, 1], // Burst times
        {
            solvedProcessesInfo: [
                { job: 3, at: 3, bt: 1, ft: 4, tat: 1, wat: 0 },
                { job: 2, at: 2, bt: 2, ft: 6, tat: 4, wat: 2 },
                { job: 1, at: 1, bt: 4, ft: 10, tat: 9, wat: 5 },
                { job: 0, at: 0, bt: 5, ft: 15, tat: 15, wat: 10 }
            ],
            ganttChartInfo: [
                { job: 3, start: 3, stop: 4 },
                { job: 2, start: 4, stop: 6 },
                { job: 1, start: 6, stop: 10 },
                { job: 0, start: 10, stop: 15 }
            ]
        }
    ]
])('SJF test %#', (arrivalTime, burstTime, expected) => {
    expect(sjf(arrivalTime, burstTime)).toEqual(expected);
});

