import CategoryGroup from "../CategoryGroup/CategoryGroup";

type Feature = {
	id: number;
	title: string;
	description: string;
	category: string;
	component: React.ComponentType;
	created?: string;
};

type Category = {
	id: string;
	name: string;
};

type PlaygroundSectionProps = {
	categories: Category[];
	features: Feature[];
};

const PlaygroundSection = ({ categories, features }: PlaygroundSectionProps) => {
	return (
		<>
			{categories.map((category) => {
				const categoryFeatures = features.filter((feature) => feature.category === category.id);
				return (
					<CategoryGroup
						key={category.id}
						categoryId={category.id}
						categoryName={category.name}
						features={categoryFeatures}
					/>
				);
			})}
		</>
	);
};

export default PlaygroundSection;
