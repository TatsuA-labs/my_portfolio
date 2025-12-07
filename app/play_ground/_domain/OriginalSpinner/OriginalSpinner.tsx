"use client";
import ContentCard from "@/components/base/Card/ContentCard";
import Spinner from "@/components/base/Spinner/Spinner";

const OriginalSpinner = () => {
	return (
		<ContentCard created="2025-03-31" title="自作スピナー" height={100}>
			<Spinner />
		</ContentCard>
	);
};

export default OriginalSpinner;
