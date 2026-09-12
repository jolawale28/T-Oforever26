import { WEDDING_DATE } from "./constants";

export function getCountdown() {
    const target = new Date(WEDDING_DATE).getTime();
    const diff = Math.max(0, target - Date.now());

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        minutes: Math.floor(diff / (1000 * 60)) % 60,
        seconds: Math.floor(diff / 1000) % 60,
    };
}