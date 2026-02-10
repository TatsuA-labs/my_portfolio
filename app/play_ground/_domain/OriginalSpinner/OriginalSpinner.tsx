"use client";
import ContentCard from "@/components/atoms/Card/ContentCard";
import Spinner from "@/components/atoms/Spinner/Spinner";

const OriginalSpinner = () => {
	return (
		<ContentCard created="2025-03-31" title="自作スピナー" height={100}>
			<Spinner />
		</ContentCard>
	);
};

export default OriginalSpinner;
