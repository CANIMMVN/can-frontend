import multer from "multer";
import { MAX_CONTENT_FILE_SIZE, MAX_NUMBER_FILE } from "../utils/settings/setting";
import path from "path";
import fs from "fs";

export default (fileFromName: string) => {
	const uploadDirectory = path.join(__dirname, "uploads");
	if (!fs.existsSync(uploadDirectory)) {
		fs.mkdir(uploadDirectory, (err) => {
			if (err) throw err;
			console.log("Directory created successfully!");
		});
	}
	return multer({
		limits: {
			fileSize: MAX_CONTENT_FILE_SIZE,
			files: MAX_NUMBER_FILE,
		},
		storage: multer.diskStorage({
			destination: (req, file, cb) => {
				cb(null, uploadDirectory);
			},
			filename: (req, file, cb) => {
				cb(null, file.originalname);
			},
		}),
	}).array(fileFromName);
};
