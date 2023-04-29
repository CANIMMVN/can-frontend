import { TListContent } from "../../services/ContentGenerator";
import { Image } from "../../utils/types";

export type TProgramInfo = {
	id:string;
	thumbnailTitle: string;
	thumbnailImage: Image;
	posterTitle: string;
	posterImage: Image;
	listContent: TListContent;
};

export type TProgramGeneralInfo = Omit<TProgramInfo, "listContent" | "posterImage" | "posterTitle">;