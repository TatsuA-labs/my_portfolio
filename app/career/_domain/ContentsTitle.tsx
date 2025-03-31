import LinkWithIcon from "@/components/base/Link/LinkWithIcon";

type ContentsTitleProps = {
	term: string;
	name: string;
	linkUrl?: string;
};
const ContentsTitle = ({ term, name, linkUrl }: ContentsTitleProps) => {
	return (
		<>
			<small>{term}</small>
			{linkUrl ? (
				<LinkWithIcon href={linkUrl}>
					<h3>{name}</h3>
				</LinkWithIcon>
			) : (
				<h3>{name}</h3>
			)}
		</>
	);
};

export default ContentsTitle;
