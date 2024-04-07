import dayjs from "dayjs";

export function formatDateToShortOrPresent(dateString: string | null): string {
	if (!dateString) return "PRESENT";
	const parsedDate = dayjs(dateString);

	const formattedDate = parsedDate.format("MMM YYYY");
	return formattedDate;
}

export function formatDateRange(
	startDate: string | null,
	endDate: string | null,
): string {
	return `${formatDateToShortOrPresent(
		startDate,
	)} - ${formatDateToShortOrPresent(endDate)}`;
}
