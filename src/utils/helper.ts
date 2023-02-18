// formatBytes credit goes to the community "https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript"
export const formatBytes = (bytes: number, decimals = 2) => {
	if (!bytes) return "0 Bytes";

	const k = 1000;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const totalFileSize = (listFile: FileList): number => {
	let total = 0;
	Array.from(listFile).forEach((file) => {
		total += file.size;
	});
	return total;
};

export const renameFile = (originalFile: File, newName: string) => {
	return new File([originalFile], newName, {
		type: originalFile.type,
		lastModified: originalFile.lastModified,
	});
};