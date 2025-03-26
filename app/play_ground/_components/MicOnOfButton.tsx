import type React from "react";

type Props = {
	muted: boolean;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	setter: any;
	title: string;
};

export const MicOnOfButton: React.FC<Props> = ({ muted, setter, title }) => {
	const handleOnClick = () => {
		setter(!muted);
	};
	return (
		<button type="button" onClick={handleOnClick}>
			{title}
		</button>
	);
};
