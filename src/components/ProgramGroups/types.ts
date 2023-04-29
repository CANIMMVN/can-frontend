import { TListContent } from "../../services/ContentGenerator";
import { Image } from "../../utils/types";

export type TProgramInfo = {
	id:string;
	title: string;
	thumbnailImage: Image;
	posterImage: Image;
	listContent: TListContent;
};

export type TProgramGeneralInfo = Omit<TProgramInfo, "listContent" | "posterImage">;