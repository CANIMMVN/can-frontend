import { TListContent } from "../../services/ContentGenerator";
import { Image } from "../../utils/types";

export type TSeasonalProject = {
	id: string;
	title: string;
	thumbnailImage: Image;
	posterImage: Image;
	listContent: TListContent;
};

export type TSeasonalProjectGeneralInfo = Omit<TSeasonalProject, "listContent" | "posterImage">;
