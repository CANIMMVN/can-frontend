export enum ContentType {
	SPACE,
	PLAIN,
	BOLD,
	LIST_ITEM,
	LINK,
}

export type TContentNode = {
	type: ContentType;
	content?: string;
};

export type TListContent = TContentNode[];

export const createSpaceContentNode = (): TContentNode => {
	return {
		type: ContentType.SPACE,
	};
};

export const createContentNode = (type: TContentNode["type"], content: TContentNode["content"]): TContentNode => {
	return {
		type,
		content,
	};
};

export const plain = (content: TContentNode["content"]) => {
	return createContentNode(ContentType.PLAIN, content);
};

export const bold = (content: TContentNode["content"]) => {
	return createContentNode(ContentType.BOLD, content);
};

export const listItem = (content: TContentNode["content"]) => {
	return createContentNode(ContentType.LIST_ITEM, content);
};

export const link = (content: TContentNode["content"]) => {
	return createContentNode(ContentType.LINK, content);
};

export default (listContent: TListContent) => {
	const generate = (contentNode: TContentNode, index: number) => {
		const typeNode = contentNode.type;
		if (typeNode === ContentType.SPACE) {
			return (
				<span
					key={index}
					className="flex mb-4"></span>
			);
		} else if (typeNode === ContentType.PLAIN) {
			return (
				<span
					key={index}
					className="flex text-xl font-medium mb-4">
					{contentNode.content}
				</span>
			);
		} else if (typeNode === ContentType.BOLD) {
			return (
				<span
					key={index}
					className="flex text-xl font-bold my-4">
					{contentNode.content}
				</span>
			);
		} else if (typeNode === ContentType.LIST_ITEM) {
			return (
				<span
					key={index}
					className="flex relative text-xl font-medium mb-2">
					&#8226; {contentNode.content}
				</span>
			);
		} else if (typeNode === ContentType.LINK) {
			const contentProcessed = contentNode.content?.split("=");
			return (
				contentProcessed?.length === 2 && (
					<a
						key={index}
						className="flex text-xl text-strongBlue mb-4"
						href={contentProcessed[1]}
						download>
						{contentProcessed[0]}
					</a>
				)
			);
		}
		return <></>;
	};

	return <>{listContent.map((item, index) => generate(item, index))}</>;
};
