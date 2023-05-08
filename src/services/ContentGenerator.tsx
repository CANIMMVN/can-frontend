// CONTENT TYPE DECLARE

import { DistributiveOmit, _Assert } from "../utils/types";

// Normal
export type TNormalContentNode = {
	type: "PLAIN" | "PLAIN_CLOSE" | "BOLD" | "LIST_ITEM";
	content: string;
};

// Special
export type TSpaceContentNode = {
	type: "SPACE";
};

export type TLinkContentNode = {
	type: "LINK";
	link: string;
	displayText: string;
};

// Utility
export type TContentNode = TNormalContentNode | TSpaceContentNode | TLinkContentNode;

export type TListContent = TContentNode[];

// FUNCTION DECLARE
// NORMAL
export const createNormalContentNode = (type: TNormalContentNode["type"], content: TNormalContentNode["content"]): TContentNode => {
	return {
		type,
		content,
	} as TNormalContentNode;
};

export const plain = (content: TNormalContentNode["content"]) => createNormalContentNode("PLAIN", content);

export const plainClose = (content: TNormalContentNode["content"]) => createNormalContentNode("PLAIN_CLOSE", content);

export const bold = (content: TNormalContentNode["content"]) => createNormalContentNode("BOLD", content);

export const listItem = (content: TNormalContentNode["content"]) => createNormalContentNode("LIST_ITEM", content);

// SPECIAL
export const createSpecialContentNode = <T extends Exclude<TContentNode, TNormalContentNode>>(type: T["type"], content: DistributiveOmit<T, "type">): TContentNode => {
	switch (type) {
		case "SPACE":
			return {
				type,
			} as TSpaceContentNode;
			break;
		case "LINK":
			_Assert<DistributiveOmit<TLinkContentNode, "type">>(content);
			return {
				type,
				...content
			} as TLinkContentNode;
		default:
			return {
				type,
			} as TSpaceContentNode;
			break;
	}
};

export const space = createSpecialContentNode<TSpaceContentNode>("SPACE", {});

export const link = (link: TLinkContentNode["link"], displayText: TLinkContentNode["displayText"]) =>
	createSpecialContentNode<TLinkContentNode>("LINK", {
		link,
		displayText,
	});

/**
 * Support Tailwind import classes`
 * Tailwind only processes classes in static or was existed in the component' UI - render()
 * @returns JSX.Element
 */

export const ContentGeneratorToolkit = () => {
	return <div className="hidden flex relative text-xl text-strongBlue font-medium font-bold my-2 my-4 h-4"></div>;
};

const ContentGenerator = (listContent: TListContent) => {
	const generate = (contentNode: TContentNode, index: number) => {
		const typeNode = contentNode.type;
		switch (typeNode) {
			case "PLAIN":
				return (
					<span
						key={index}
						className="flex text-xl font-medium my-2">
						{contentNode.content}
					</span>
				);
			case "PLAIN_CLOSE":
				return (
					<span
						key={index}
						className="flex text-xl font-medium">
						{contentNode.content}
					</span>
				);
			case "BOLD":
				return (
					<span
						key={index}
						className="flex text-xl font-bold my-4">
						{contentNode.content}
					</span>
				);
			case "LIST_ITEM":
				return (
					<span
						key={index}
						className="flex relative text-xl font-medium">
						&#8226; {contentNode.content}
					</span>
				);
			case "SPACE":
				return (
					<span
						key={index}
						className="flex h-4"></span>
				);
			case "LINK":
				console.log(contentNode);
				console.log(contentNode.link);

				console.log(contentNode.displayText);
				console.log("---------------");
				return (
					<a
						key={index}
						className="flex text-xl text-strongBlue my-2"
						href={contentNode.link}
						download>
						{contentNode.displayText}
					</a>
				);
			default:
				return <></>;
		}
	};

	return <>{listContent.map((item, index) => generate(item, index))}</>;
};
export default ContentGenerator;
