import { bold, createSpaceContentNode, link, listItem, plain } from "../../services/ContentGenerator";
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
		id: "settled",
		title: "Định cư",
		thumbnailImage: {
			imgSrc: "/contents/program/settled/Thumbnail-Settled.jpg",
			imgAlt: "Thumbnail-Settled.jpg",
		},
		posterImage: {
			imgSrc: "/contents/program/settled/Poster-Settled.jpg",
			imgAlt: "Poster-Settled.jpg",
		},
		listContent: [
			bold("I) CHƯƠNG TRÌNH ĐỊNH CƯ LIÊN BANG EXPRESS ENTRY"),
			plain("Express Entry là chương trình nhập cư của Chính phủ Liên Bang Canada, được chính thức đi vào hoạt động từ năm 2016. Đây là chương trình nhập cư sử dụng hệ thống chấm điểm định cư để quản lý đơn ứng tuyển thường trú tại Canada. Những ứng viên tiềm năng hoàn thành hồ sơ Express Entry bằng cách cung cấp tất cả thông tin dựa theo kỹ năng, kinh nghiệm, học vấn, khả năng ngôn ngữ cùng những thông tin khác sẽ được hệ thống tính điểm một cách minh bạch, chặt chẽ. Chính phủ Liên Bang sẽ gửi thư mời đăng ký thường trú nhân (ITA) đến các ứng viên có điểm số cao."),
			bold("II) CHƯƠNG TRÌNH ĐỀ CỬ CẤP TỈNH"),
			plain("Chương trình đề cử tỉnh bang (Provincial Nominee Program), viết tắt là PNP, đây là một trong những chương trình nhập cư chủ lực của Chính phủ Canada. Chương trình cung cấp một trong những lộ trình giá trị nhất để trở thành thường trú nhân Canada."),
			space,
			plain("Chương trình đề cử tỉnh bang (PNP) cho phép các tỉnh bang và vùng lãnh thổ Canada đề cử các cá nhân có nguyện vọng nhập cư Canada và có mong muốn ổn định cuộc sống lâu dài tại tỉnh bang của họ."),
			space,
			plain("Mỗi tỉnh bang và vùng lãnh thổ Canada (ngoại trừ Nunavut và Quebec) đều có một chương trình đề cử tỉnh bang riêng biệt. Mỗi chương trình đề cử tỉnh bang (PNP) đều có tối thiểu 1 diện nhập cư sử dụng hệ thống lựa chọn Express Entry của liên bang."),
			space,
			plain("Đề cử tỉnh bang được ban hành để áp dụng cho chương trình Express Entry, còn được gọi là “đề cử tăng cường” (enhanced nominations), sẽ cộng thêm cho ứng viên Express Entry 600 điểm CRS."),
			space,
			plain("Với hơn 80 dạng chương trình nhập cư tỉnh bang, tìm 1 chương trình phù hợp nhất cho bản thân cũng là 1 thách thức lớn. Chúng tôi sẽ giúp bạn khám phá ra chương trình và con đường phù hợp nhất để trở thành thường trú nhân Canada."),
			space,
			plain("Hầu hết các tỉnh bang và vùng lãnh thổ tại Canada đều vận hành chương trình nhập cư riêng của tỉnh bang mình, riêng Quebec vận hành hệ thống nhập cư riêng và Nunavut không có chương trình này."),
			space,
			plain("Danh sách các chương trình đề cử tỉnh bang PNP:"),
			listItem("Chương trình đề cử tỉnh bang Alberta (AINP): Chương trình để cử tỉnh bang Alberta gồm 3 diện: Chương trình cơ hội tại Alberta, chương trình Alberta Express Entry, chương trình tự kinh doanh nông nghiệp. Đề cử tỉnh bang được phát hành cho người lao động nước ngoài đáp ứng các yêu cầu cụ thể và mong muốn sinh sống làm việc tại Alberta."),
			listItem("Chương trình đề cử tỉnh bang British Columbia (BCPNP): Chương trình để cử tỉnh bang British Columbia bao gồm các diện tay nghề, diện doanh nhân và Express Entry BC. Các diện nhập cư được phân thành các nhóm nhỏ bao gồm nhóm người lao động lành nghề, sinh viên quốc tế và các chuyên môn khác với kỹ năng, kinh nghiệm theo nhu cầu tỉnh bang."),
			listItem("Chương trình đề cử tỉnh bang Manitoba (MPNP): Chương trình đề cử tỉnh bang Manitoba được thiết kế để đề cử người lao động lành nghề và gia đình của họ, những người có ý định sinh sống và làm việc tại Manitoba lâu dài. Chương trình đề cử tỉnh bang Manitoba đang được thay đổi và điều chỉnh cho phù hợp hơn."),
			listItem("Chương trình đề cử tỉnh bang New Brunswick (NB PNP): Chương trình đề cử tỉnh bang New Brunswick bao gồm các diện nhập cư dành cho doanh nhân, sinh viên quốc tế, người lao động lành nghề được hỗ trợ bởi nhà tuyển dụng và người lao động lành nghề thông qua hệ thống lựa chọn của liên bang – Express Entry."),
			listItem("Chương trình đề cử tỉnh bang Newfoundland and Labrador (NL PNP): Chương trình để cử tỉnh bang Newfoundland and Labrador chấp nhận đơn đăng ký từ người lao động tay nghề, sinh viên quốc tế, doanh nhân, những ứng viên đáp ứng được nhu cầu cụ thể như thỏa thuận công việc, khả năng hội nhập, kỹ năng tự thiết lập kinh tế tại tỉnh bang."),
			listItem("Chương trình đề cử tỉnh bang Nova Scotia (NSNP): Chương trình để cử tỉnh bang Nova Scotia là chương trình đề cử những ứng viên diện tay nghề, sinh viên quốc tế, doanh nhân và các chuyên gia có nhu cầu làm việc và sinh sống ổn định lâu dài tại tỉnh bang. Chương trình nhập cư diện kinh tế tỉnh bang có 3 chương trình sử dụng hệ thống Express Entry."),
			listItem("Chương trình đề cử tỉnh bang Ontario (OINP): Thông qua chương trình đề cử tỉnh bang Ontario, tỉnh bang sẽ đề cử người lao động quốc tế, sinh viên quốc tế, chủ doanh nghiệp, doanh nhân, những ứng viên có kỹ năng, kinh nghiệm làm việc, học vấn và khả năng hội nhập, sự mong muốn làm việc và sinh sống lâu dài tại tỉnh bang."),
			listItem("Chương trình đề cử tỉnh bang Prince Edward Island (PEI PNP): Chương trình để cử tỉnh bang Prince Edward Island là chương trình nhập cư diện kinh tế dành cho người lao động lành nghề, sinh viên quốc tế, doanh nhân, những ứng viên sẵn sàng hòa nhập vào cuộc sống và công việc tại PEI, những ứng viên phải có kỹ năng tự thiết lập kinh tế bản thân tại tỉnh bang."),
			listItem("Chương trình đề cử tỉnh bang Saskatchewan (SINP): Chương trình đề cử tỉnh bang Saskatchewan là chương trình nhập cư riêng của tỉnh bang Saskatchewan với mục đích lựa chọn người nước ngoài đủ điều kiện thông qua nhiều lộ trình nhập cư khác nhau, bao gồm các tiểu mục Express Entry và tiểu mục người lao động theo nhu cầu tỉnh bang."),
			bold("III)	ĐỊNH CƯ ĐẦU TƯ KHỞI NGHIỆP (SUV)"),
			plain("Start up Visa là chương trình định cư Liên bang diện khởi nghiệp dành cho các doanh nhân có ý tưởng kinh doanh độc đáo, sáng tạo. Chương trình Start up Visa được Bộ Di trú Canada giới thiệu vào tháng 04/2013 với thời gian thí điểm là 5 năm và chính thức trở thành chương trình định cư Canada vĩnh viễn vào năm 2018. Đặc biệt chương trình định cư SUV không yêu cầu kết quả kinh doanh tốt, và cả gia đình điều nhận thẻ thường trú nhân sau 12 tháng chờ đợi."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("CHƯƠNG TRÌNH ĐỊNH CƯ.docx=/contents/program/settled/CHƯƠNG TRÌNH ĐỊNH CƯ.docx"),
		],
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
