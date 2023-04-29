import { bold, createSpaceContentNode, link, listItem, plain } from "../../services/ContentGenerator";
import { TProgramGeneralInfo, TProgramInfo } from "./types";

const space = createSpaceContentNode();

export const LIST_PROGRAM_INFO: TProgramInfo[] = [
	{
		id: "summer-camp",
		title: "Trại hè",
		thumbnailImage: {
			imgSrc: "/contents/program/summerCamp/Thumbnail-SummerCamp.jpg",
			imgAlt: "Thumbnail-SummerCamp.jpg",
		},
		posterImage: {
			imgSrc: "/contents/program/summerCamp/Poster-SummerCamp.jpg",
			imgAlt: "Poster-SummerCamp.jpg",
		},
		listContent: [
			bold("Đất nước: Canada"),
			bold("Thời gian: 2 tuần – 3 tuần"),
			bold("Số lượng: 25 – 50 học sinh"),
			bold("Tháng: 7 và 8 hằng năm"),
			space,
			bold("I. Mục Đích:"),
			plain("Chương trình trại hè được tổ chức bởi CAN Immigration Vietnam. Được học tập và du lịch tại thành phố Toronto sẽ là cơ hội lý tưởng cho học sinh trải nghiệm nhiều điều mới mẻ và khám phá những điều thú vị tại nơi đây. Nhưng vì sao ta lại chọn Canada là đất nước nên đến nhất trong năm nay? Vì Canada là một đất nước đa sắc tộc, nhưng lại rất thân thiện và không phân biệt chủng tộc. Đồng thời Canada là đất nước duy nhất mà hiện nay chính phủ có chính sách định cư dễ dàng cho các du học sinh. Mỗi thành phố mà học sinh tham quan điều mang một nét rất riêng về văn hoá, dân tộc, ngôn ngữ, và kiến trúc. Khoảng thời gian tuần sinh hoạt và học tập các cháu sẽ có cơ hội giao lưu với các học viên quốc tế đến từ Hàn Quốc, Nhật Bản, Trung Quốc, Nam Mỹ, và Châu Âu."),
			bold("Sau khi kết thúc chương trình, học sinh sẽ:"),
			listItem("Định hướng về du học trong tương lai."),
			listItem("Nâng cao về kiến thức và văn hoá về đất nước và con người Canada."),
			listItem("Làm quen với cuộc sống du học, có cơ hội gặp mặt bạn bè quốc tế."),
			listItem("Nhận được giấy chứng nhận hoàn thành 2 tuần winter camp 2023 từ trường."),
			listItem("Nâng cao trình độ Anh ngữ: kỹ năng giao tiếp, nghe nói, tự tin khi sử dụng tiếng Anh."),
			listItem("Các kỹ năng, sự hiểu biết khác tại nước hàng đầu trên thế giới: tính độc lập, tự chủ giải quyết các vấn đề, kỹ năng làm việc nhóm."),
			listItem("Trong quá trình tham gia trại đông các học sinh được phép chuyển đổi sang study permit và chính thức học tập tại Canada."),
			listItem("Lợi ích lớn nhất là học sinh nhận được Visa Canada sẽ rất có lợi cho việc nộp đơn xin visa các nước khác như Mỹ, Châu Ấu, Úc. Đồng thời nhận được Visa các nước như Hàn Quốc, Nhật Bản, và Đài Loan sẽ dễ dàng hơn rất nhiều."),
			space,
			bold("II. Đối tượng tham gia chương trình:"),
			listItem("Độ tuổi từ 14 đến 17 (lớp 8 đến lớp 12)"),
			listItem("Học sinh độ tuổi THCS và THPT."),
			space,
			bold("III. Chi tiết chương trình:"),
			plain("Thời gian: 2 tuần, 3tuần, hoặc 4 tuần"),
			plain("Mức phí: $5,000 CAD ~ $7000CAD"),
			bold("Mức phí bao gồm:"),
			listItem("Ký túc xá tại trường."),
			listItem("Đưa đón từ sân bay."),
			listItem("Học tiếng Anh 5 ngày/tuần (Bao gồm cả tài liệu học tập)"),
			listItem("3 bữa ăn hằng ngày."),
			listItem("Người giám hộ."),
			listItem("Bảo hiểm trong 2 tuần."),
			listItem("Phương tiện đi lại."),
			listItem("Bữa tiệc chào mừng và chia tay."),
			listItem("Giấy chứng nhận sau khi kết thúc khóa học."),
			listItem("Phí dịch thuật."),
			bold("Mức phí chưa bao gồm:"),
			listItem("Vé máy bay khứ hồi."),
			listItem("Thẻ điện thoại + 3G/Internet + Giặt ủi ngoài phạm vi ký túc xá."),
			listItem("Phí chuyển tiền hoặc thanh toán qua tài khoản ngân hàng."),
			listItem("Các chi phí cá nhân khác."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("CHƯƠNG TRÌNH TRẠI HÈ.docx=/contents/program/summerCamp/CHƯƠNG TRÌNH TRẠI HÈ.docx"),
		],
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
		id: "pathway",
		title: "Pathway",
		thumbnailImage: {
			imgSrc: "/contents/program/pathway/Thumbnail-Pathway.jpg",
			imgAlt: "Thumbnail-Pathway.jpg",
		},
		posterImage: {
			imgSrc: "/contents/program/pathway/Poster-Pathway.jpg",
			imgAlt: "Poster-Pathway.jpg",
		},
		listContent: [
			bold("CHƯƠNG TRÌNH PATHWAY LÀ GÌ?"),
			plain("Chương trình Pathway Canada không còn quá xa lạ với những bạn trẻ quốc tế, đặc biệt là các bạn trẻ Việt Nam đang quan tâm đến du học. Đây cũng là hình thức nhập học phổ biến cho du học sinh Canada."),
			plain("Hiểu một cách đơn giản thì Pathway chính là một chương trình đào tạo, hỗ trợ du học sinh chưa đáp ứng được khả năng ngoại ngữ hoặc chưa đủ điều kiện nhập học trực tiếp vào các trường đại học tại Canada để trang bị cho họ những kiến thức cần thiết trước khi vào khóa học chính thức."),
			plain("Thông thường, các khóa Pathway thường liên thông với nhiều đại học lớn tại Canada, do đó sẽ tạo điều kiện rất tốt cho việc chuyển tiếp vào đại học của sinh viên. Đặc biệt, với hình thức pathway du học Canada này, không chỉ đem đến cơ hội trau dồi thêm vốn ngoại ngữ từ lớp ESL, mà còn được tính như tín chỉ để lấy bằng đại học."),
			plain("Chương trình Pathway thường sẽ kéo dài một năm và được coi như năm nhất hệ Cử nhân. Ngay sau khi hoàn chương trình học này, những du học sinh đã đạt yêu cầu tiếng Anh và có đủ điểm GPA sẽ được chuyển tiếp lên đại học có liên kết với hệ thống, do vậy việc theo học tại một trường đại học Canada danh tiếng sẽ được rút ngắn đáng kể so với hình thức du học thông thường."),
			bold("LÝ DO NÊN LỰA CHỌN CHƯƠNG TRÌNH PATHWAY DU HỌC CANADA"),
			bold("Yêu cầu đầu vào đơn giản"),
			plain("Đối với sinh viên quốc tế không phải ai cũng có thể đáp ứng đủ những điều kiện đầu vào khắt khe của một trường Đại học danh tiếng tại Canada. Nhưng với chương trình Pathway thì khác điều kiện đầu vào đơn giản hơn hẳn. Được thiết kế tương đương với giáo án, số lượng bài học ở đại học chính quy. Điều này vừa giúp sinh viên có cơ hội tiếp cận với bậc giáo dục cử nhân, vừa dễ dàng có được 1 suất chuyển tiếp vào một trong các trường Đại học danh tiếng tại Canada khi chưa đủ yêu cầu nhập học."),
			bold("Tiết kiệm thời gian và chi phí"),
			plain("So với học phí bậc Đại học, học phí năm nhất chương trình Pathway du học Canada chỉ tương đương, thậm chí là thấp hơn. Mức học phí trung bình chỉ từ khoảng $15,000 đến $26,000 CAD. Trong khi tổng thời gian cho khóa học ngang bằng với việc nhập học thẳng vào Đại học. Sau khi kết thúc khoá học Pathway với điểm số đạt yêu cầu, du học sinh được phép liên thông thẳng lên năm 2 đại học. Như vậy với lộ trình chuyển tiếp trên, lựa chọn này không những không kéo dài kế hoạch học tập của bạn (Foundation thay cho lớp 12 tại Việt Nam, Diploma thay cho năm 1 đại học) mà còn giúp bạn có thời gian vượt qua những bỡ ngỡ ban đầu ở một đất nước mới, làm quen với thích nghi với môi trường sống nơi đây; tránh được những “cú shock văn hóa” lúc mới sang du học."),
			bold("Giúp nâng cao trình độ Anh ngữ, đảm bảo bắt kịp nhịp độ học tập"),
			plain("Song song với khoảng thời gian học pathway, du học sinh sẽ được tiếp tục trau dồi tiếng Anh giúp nâng cao trình độ ngoại ngữ, phục vụ cho quá trình học tập, nghiên cứu khi học tiếp lên học đại học tại Canada."),
			bold("Được học tập tại Campus của các trường đại học"),
			plain("Lợi ích tiếp theo phải kể đến khi theo học chương trình pathway du học Canada chính là sinh viên quốc tế sẽ được học ngay trong khuôn viên đại học liên kết và được hưởng toàn bộ những chính sách như một sinh viên đại học thông thường. Quy mô lớp học được tổ chức với số lượng ít học viên giúp giảng viên dễ dàng quan tâm, sát sao ý tới sinh viên trong quá trình học hơn."),
			bold("Kỳ nhập học linh hoạt"),
			plain("Sinh viên hoàn toàn không phải lo lắng sợ bị bỏ lỡ kỳ nhập học và dễ chọn lựa thời điểm du học phù hợp với bản thân."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("CHƯƠNG TRÌNH PATHWAY.docx=/contents/program/pathway/CHƯƠNG TRÌNH PATHWAY.docx"),
		],
	},
];

export const LIST_GENERAL_INFO_PROJECT: TProgramGeneralInfo[] = LIST_PROGRAM_INFO.map<TProgramGeneralInfo>((item) => {
	return {
		id: item.id,
		thumbnailImage: { ...item.thumbnailImage },
		title: item.title,
	};
});
