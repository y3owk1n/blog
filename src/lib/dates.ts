import dayjs from "dayjs";

export const formatDateToShortOrPresent = (dateString: string | null) => {
	if (!dateString) return "PRESENT";
	const parsedDate = dayjs(dateString);

	const formattedDate = parsedDate.format("MMM YYYY");
	return formattedDate;
};

export const formatDateRange = (
	startDate: string | null,
	endDate: string | null,
) => {
	return `${formatDateToShortOrPresent(
		startDate,
	)} - ${formatDateToShortOrPresent(endDate)}`;
};
