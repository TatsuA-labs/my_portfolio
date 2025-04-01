"use client";
import type React from "react";
import ContentCard from "@/components/base/Card1/ContentCard";
import Spinner from "@/components/base/Spinner/Spinner";

const OriginalSpinner = () => {
	return (
		<ContentCard created="2025-03-31" title="自作スピナー" height={300}>
			<Spinner />
		</ContentCard>
	);
};

export default OriginalSpinner;
