export type dayType = 'today' | 'tomorrow' | 'day after tomorrow' | 'in week' | 'later' | 'no deadline';

export const deadlineSort: Record<dayType, number> = {
    "today": 0,
    "tomorrow": 1,
    "day after tomorrow": 2,
    "in week": 3,
    "later": 4,
    "no deadline": 5
}