import dayjs from "dayjs";

interface PublishedDateProps {
	dateString: string;
}

function PublishedDate({ dateString }: PublishedDateProps): JSX.Element {
	const date = dayjs(dateString);

	const formattedDate = date.format("MMMM D, YYYY");

	return <time dateTime={dateString}>{formattedDate}</time>;
}

export default PublishedDate;
