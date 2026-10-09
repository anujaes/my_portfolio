import { MONTHS, PRESENT_LABEL } from '../constants/dates';

// "2022" -> "2022", "2022-12" -> "DEC 2022", "2022-02-07" -> "7 FEB, 2022"
export function formatDate(value) {
    const [year, month, day] = value.split('-');
    if (!month) return year;
    const mon = MONTHS[Number(month) - 1];
    return day ? `${Number(day)} ${mon}, ${year}` : `${mon} ${year}`;
}

// end: undefined -> single date, null -> "Present"
export function formatPeriod(start, end) {
    if (end === undefined) return formatDate(start);
    return `${formatDate(start)} - ${end === null ? PRESENT_LABEL : formatDate(end)}`;
}

// "2022-12", "2024-06" -> "2022 – 2024"; same year -> "2024"; end null -> "2024 – Present"
export function formatYearRange(start, end) {
    const from = start.slice(0, 4);
    const to   = end === null ? PRESENT_LABEL : end?.slice(0, 4);
    return !to || to === from ? from : `${from} – ${to}`;
}
