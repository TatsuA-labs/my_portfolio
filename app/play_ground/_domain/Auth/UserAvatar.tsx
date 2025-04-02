import Image from "next/image";

type UserAvatarProps = {
	image: string;
};

const UserAvatar = async ({ image }: UserAvatarProps) => {
	const avatar = image !== "" ? image : "/user_avatar.png";

	return (
		<div>
			<Image src={avatar} width={40} height={40} alt="user avatar" />
		</div>
	);
};

export default UserAvatar;
