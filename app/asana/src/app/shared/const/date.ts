const day = 24 * 60 * 60 * 1000;
export const today = new Date();
export const tomorrow = new Date(today.getTime() + day);
export const aferDaytomorrow = new Date(today.getTime() + (day * 2));
export const week = new Date(today.getTime() + (day * 7));
export const sixDay = new Date(today.getTime() + (day * 6));
export const eightDay = new Date(today.getTime() + (day * 8));