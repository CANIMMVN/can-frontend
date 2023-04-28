import { createSpaceContentNode } from "../../services/ContentGenerator";
import { TProgramGeneralInfo, TProgramInfo } from "./types";

const space = createSpaceContentNode();

export const LIST_PROGRAM_INFO: TProgramInfo[] = [
	{
		id: "",
		title: "Trại hè",
		thumbnailImage: {
			imgSrc: "assets/programGroups/traihe.jpg",
			imgAlt: "traihe.jpg",
		},
		posterImage: {
			imgSrc: "#",
			imgAlt: "#",
		},
		listContent: [],
	},
	{
		id: "",
		title: "Việc làm",
		thumbnailImage: {
			imgSrc: "assets/programGroups/vieclam.jpg",
			imgAlt: "vieclam.jpg",
		},
		posterImage: {
			imgSrc: "#",
			imgAlt: "#",
		},
		listContent: [],
	},
	{
		id: "",
		title: "Du lịch",
		thumbnailImage: {
			imgSrc: "assets/programGroups/dulich.jpg",
			imgAlt: "dulich.jpg",
		},
		posterImage: {
			imgSrc: "#",
			imgAlt: "#",
		},
		listContent: [],
	},
	{
		id: "",
		title: "Định cư",
		thumbnailImage: {
			imgSrc: "assets/programGroups/dinhcu.jpg",
			imgAlt: "dinhcu.jpg",
		},
		posterImage: {
			imgSrc: "#",
			imgAlt: "#",
		},
		listContent: [],
	},
	{
		id: "",
		title: "Du học",
		thumbnailImage: {
			imgSrc: "assets/programGroups/duhoc.jpg",
			imgAlt: "duhoc.jpg",
		},
		posterImage: {
			imgSrc: "#",
			imgAlt: "#",
		},
		listContent: [],
	},
	{
		id: "",
		title: "Pathway",
		thumbnailImage: {
			imgSrc: "assets/programGroups/pathway.jpg",
			imgAlt: "pathway.jpg",
		},
		posterImage: {
			imgSrc: "#",
			imgAlt: "#",
		},
		listContent: [],
	},
];

export const LIST_GENERAL_INFO_PROJECT: TProgramGeneralInfo[] = LIST_PROGRAM_INFO.map<TProgramGeneralInfo>((item) => {
	return { 
		id: item.id,
		thumbnailImage: { ...item.thumbnailImage },
		title: item.title,
	};
});
