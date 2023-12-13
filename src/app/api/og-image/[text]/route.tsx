import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

// eslint-disable-next-line @typescript-eslint/require-await
export async function GET(
	_request: Request,
	{ params }: { params: { text?: string } },
) {
	const text = params.text;

	return new ImageResponse(
		<div
			style={{
				display: "flex",
				fontSize: 40,
				color: "white",
				background: "black",
				width: "100%",
				height: "100%",
				textAlign: "center",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{
					color: "white",
					height: 100,
					width: 100,
				}}
				data-name="Layer 1"
				fill="currentColor"
				viewBox="0 0 2000 2000"
			>
				<title>Logo</title>
				<path d="M529.69 518.69h226.15c-5.39 34.21-14.84 66.82-15 99.47q-1.87 386.24-.08 772.48c.13 29 9.52 58 15.26 90.67H538.09c24.11-282.12 6.22-567.06 10.33-851.49.51-35.52-11.67-71.22-18.73-111.13ZM1118.26 1481.31c44.09-106.85-38.11-161.48-91.9-226.39-60.72-73.3-126.09-142.73-187.63-215.37-7.48-8.83-10.29-32.1-4.12-40.22 32.77-43.2 69.1-83.69 108.93-130.72l526.77 612.7ZM1039.64 688.49c-6.91-53.27-14.31-110.38-22-169.8h203.5c-59.95 56.06-123.01 115.07-181.5 169.8Z" />
			</svg>
			{text && <p>{text}</p>}
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
