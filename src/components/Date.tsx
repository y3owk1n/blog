import dayjs from "dayjs";

type Props = {
    dateString: string;
};

const Date = ({ dateString }: Props) => {
    const date = dayjs(dateString);

    const formattedDate = date.format("MMMM D, YYYY");

    return <time dateTime={dateString}>{formattedDate}</time>;
};

export default Date;
