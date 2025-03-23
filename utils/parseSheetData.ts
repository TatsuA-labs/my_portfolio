export const parseProject = (text: string) => {
	if (!text) return [];

	return text.split(",").map((s) => s.trim());
};

export const parseAdditional = (text: string) => {
	if (!text) return [];

	return text.split("\n").map((line) => {
		const [title, linkUrl = ""] = line.split(",").map((s) => s.trim());
		return { title, linkUrl };
	});
};
