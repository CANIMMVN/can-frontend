import { bold, space, link, listItem, plain, plainClose } from "../../services/ContentGenerator";
import { TSeasonalProject, TSeasonalProjectGeneralInfo } from "./types";

export const PROJECT_MIN_WIDTH = 680;
export const PROJECT_MIN_WIDTH_VW = 45;

export const LIST_INFO_PROJECT: TSeasonalProject[] = [
	{
		id: "summer-camp-2023",
		title: "SUMMER CAMP 2023",
		thumbnailImage: {
			imgSrc: "/contents/seasonal/summerCamp2023/Thumbnail-SummerCamp2023.jpg",
			imgAlt: "Thumbnail-SummerCamp2023.jpg",
		},
		posterImage: {
			imgSrc: "/contents/seasonal/summerCamp2023/Poster-SummerCamp2023.jpg",
			imgAlt: "Poster-SummerCamp2023.jpg",
		},
		listContent: [
			bold("Đất nước: Canada"),
			bold("Thời gian: 03/07/2023 – 29/07/2023 (2 tuần)"),
			bold("Số lượng: 25 – 50 học sinh"),
			bold("Mục đích:"),
			plain("Chương trình trại hè được tổ chức bởi CAN Immigration Vietnam. Được học tập và du lịch tại thành phố Toronto sẽ là cơ hội lý tưởng cho học sinh trải nghiệm nhiều điều mới mẻ và khám phá những điều thú vị tại nơi đây. Nhưng vì sao ta lại chọn Canada là đất nước nên đến nhất năm 2023 này? Vì Canada là một đất nước đa sắc tộc, nhưng lại rất thân thiện và không phân biệt chủng tộc. Đồng thời Canada là đất nước duy nhất mà hiện nay chính phủ có chính sách định cư dễ dàng cho các du học sinh. Mỗi thành phố mà học sinh tham quan điều mang một nét rất riêng về văn hoá, dân tộc, ngôn ngữ, và kiến trúc. Khoảng thời gian tuần sinh hoạt và học tập các cháu sẽ có cơ hội giao lưu với các học viên quốc tế đến từ Hàn Quốc, Nhật Bản, Trung Quốc, Nam Mỹ, và Châu Âu."),
			bold("Sau khi kết thúc chương trình, học sinh sẽ:"),
			listItem("Định hướng về du học trong tương lai."),
			listItem("Nâng cao về kiến thức và văn hoá về đất nước và con người Canada."),
			listItem("Làm quen với cuộc sống du học, có cơ hội gặp mặt bạn bè quốc tế."),
			listItem("Nhận được giấy chứng nhận hoàn thành 2 tuần winter camp 2023 từ trường."),
			listItem("Nâng cao trình độ Anh ngữ: kỹ năng giao tiếp, nghe nói, tự tin khi sử dụng tiếng Anh."),
			listItem("Các kỹ năng, sự hiểu biết khác tại nước hàng đầu trên thế giới: tính độc lập, tự chủ giải quyết các vấn đề, kỹ năng làm việc nhóm."),
			listItem("Trong quá trình tham gia trại đông các học sinh được phép chuyển đổi sang study permit và chính thức học tập tại Canada."),
			listItem("Lợi ích lớn nhất là học sinh nhận được Visa Canada sẽ rất có lợi cho việc nộp đơn xin visa các nước khác như Mỹ, Châu Ấu, Úc. Đồng thời nhận được Visa các nước như Hàn Quốc, Nhật Bản, và Đài Loan sẽ dễ dàng hơn rất nhiều."),
			bold("Đối tượng tham gia chương trình:"),
			listItem("Độ tuổi từ 14 đến 17 (lớp 8 đến lớp 12)."),
			listItem("Học sinh độ tuổi THCS và THPT."),
			bold("Chi tiết chương trình:"),
			plain("Mức phí: $5,000 CAD"),
			plain("Thanh toán khi nộp hồ sơ đăng ký tham gia chương trình (Trường hợp khách hàng từ chối tiếp tục chương trình sau khi nhận được visa, không hoàn trả bất cứ khoản phí đã đặt cọc từ phí khách hàng).Thanh toán khi nộp hồ sơ đăng ký tham gia chương trình (Trường hợp khách hàng từ chối tiếp tục chương trình sau khi nhận được visa, không hoàn trả bất cứ khoản phí đã đặt cọc từ phí khách hàng)."),
			plain("Trường hợp học sinh trượt visa, học sinh và phụ huynh sẽ được hoàn lại $3,400 CAD. Riêng $600CAD đăng ký trường và $1000CAD phí dịch vụ (bao gồm phí chính phủ, phí dịch thuật, lăn dấu vân tay) sẽ không hoàn trả."),
			bold("Mức phí bao gồm:"),
			listItem("Ký túc xá tại trường danh tiếng UIS."),
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
			listItem("Phí chuyển tiền hoặc thanh toán qua tài khoản ngân hàng;"),
			listItem("Các chi phí cá nhân khác."),
			bold("Thời gian đăng ký và nộp hồ sơ:"),
			plain("Chậm nhất ngày 31/03/2023."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/seasonal/summerCamp2023/Brochure SUMMER CAMP 2023 - PROJECT.pdf", "Brochure SUMMER CAMP 2023 - PROJECT.pdf"),
			link("/contents/seasonal/summerCamp2023/Summer Camp 2023 - Thông tin chung.docx", "Summer Camp 2023 - Thông tin chung.docx"),
		],
	},
	{
		id: "winter-camp-2023",
		title: "WINTER CAMP 2023",
		thumbnailImage: {
			imgSrc: "/contents/seasonal/winterCamp2023/Thumbnail-WinterCamp2023.jpg",
			imgAlt: "Thumbnail-WinterCamp2023.jpg",
		},
		posterImage: {
			imgSrc: "/contents/seasonal/winterCamp2023/Poster-WinterCamp2023.jpg",
			imgAlt: "Poster-WinterCamp2023.jpg",
		},
		listContent: [
			bold("Đất nước: Canada"),
			bold("Thời gian: 15/01/2023 – 29/01/2023 (2 tuần)"),
			bold("Số lượng: 25 – 50 học sinh"),
			bold("Mục đích:"),
			plain("Chương trình trại hè được tổ chức bởi CAN Immigration Vietnam. Được học tập và du lịch tại thành phố Toronto sẽ là cơ hội lý tưởng cho học sinh trải nghiệm nhiều điều mới mẻ và khám phá những điều thú vị tại nơi đây. Nhưng vì sao ta lại chọn Canada là đất nước nên đến nhất năm 2023 này? Vì Canada là một đất nước đa sắc tộc, nhưng lại rất thân thiện và không phân biệt chủng tộc. Đồng thời Canada là đất nước duy nhất mà hiện nay chính phủ có chính sách định cư dễ dàng cho các du học sinh. Mỗi thành phố mà học sinh tham quan điều mang một nét rất riêng về văn hoá, dân tộc, ngôn ngữ, và kiến trúc. Khoảng thời gian tuần sinh hoạt và học tập các cháu sẽ có cơ hội giao lưu với các học viên quốc tế đến từ Hàn Quốc, Nhật Bản, Trung Quốc, Nam Mỹ, và Châu Âu."),
			bold("Sau khi kết thúc chương trình, học sinh sẽ:"),
			listItem("Định hướng về du học trong tương lai."),
			listItem("Nâng cao về kiến thức và văn hoá về đất nước và con người Canada."),
			listItem("Làm quen với cuộc sống du học, có cơ hội gặp mặt bạn bè quốc tế."),
			listItem("Nhận được giấy chứng nhận hoàn thành 2 tuần winter camp 2023 từ trường."),
			listItem("Nâng cao trình độ Anh ngữ: kỹ năng giao tiếp, nghe nói, tự tin khi sử dụng tiếng Anh."),
			listItem("Các kỹ năng, sự hiểu biết khác tại nước hàng đầu trên thế giới: tính độc lập, tự chủ giải quyết các vấn đề, kỹ năng làm việc nhóm."),
			listItem("Trong quá trình tham gia trại đông các học sinh được phép chuyển đổi sang study permit và chính thức học tập tại Canada."),
			listItem("Lợi ích lớn nhất là học sinh nhận được Visa Canada sẽ rất có lợi cho việc nộp đơn xin visa các nước khác như Mỹ, Châu Ấu, Úc. Đồng thời nhận được Visa các nước như Hàn Quốc, Nhật Bản, và Đài Loan sẽ dễ dàng hơn rất nhiều."),
			bold("Đối tượng tham gia chương trình:"),
			listItem("Độ tuổi từ 14 đến 17 (lớp 8 đến lớp 12)."),
			listItem("Học sinh độ tuổi THCS và THPT."),
			bold("Chi tiết chương trình:"),
			plain("Mức phí: $5,000 CAD"),
			plain("Thanh toán khi nộp hồ sơ đăng ký tham gia chương trình (Trường hợp khách hàng từ chối tiếp tục chương trình sau khi nhận được visa, không hoàn trả bất cứ khoản phí đã đặt cọc từ phí khách hàng).Thanh toán khi nộp hồ sơ đăng ký tham gia chương trình (Trường hợp khách hàng từ chối tiếp tục chương trình sau khi nhận được visa, không hoàn trả bất cứ khoản phí đã đặt cọc từ phí khách hàng)."),
			plain("Trường hợp học sinh trượt visa, học sinh và phụ huynh sẽ được hoàn lại $3,400 CAD. Riêng $600 CAD đăng ký trường và $1000 CAD phí dịch vụ (bao gồm phí chính phủ, phí dịch thuật, lăn dấu vân tay) sẽ không hoàn trả."),
			bold("Mức phí bao gồm:"),
			listItem("Ký túc xá tại trường danh tiếng UIS."),
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
			listItem("Phí chuyển tiền hoặc thanh toán qua tài khoản ngân hàng;"),
			listItem("Các chi phí cá nhân khác."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/seasonal/winterCamp2023/Winter Camp 2023.pdf", "Winter Camp 2023.pdf"),
			link("/contents/seasonal/winterCamp2023/Winter Camp 2023 - Thông Tin chung.docx", "Winter Camp 2023 - Thông Tin chung.docx"),
		],
	},
	{
		id: "go-toronto-with-cidesco",
		title: `"GO TORONTO WITH CIDESCO" - EVENT`,
		thumbnailImage: {
			imgSrc: "/contents/seasonal/goTorontoWithCidesco/Thumbnail-GoTorontoWithCidesco.jpg",
			imgAlt: "Thumbnail-GoTorontoWithCidesco.jpg",
		},
		posterImage: {
			imgSrc: "/contents/seasonal/goTorontoWithCidesco/Poster-GoTorontoWithCidesco.jpg",
			imgAlt: "Poster-GoTorontoWithCidesco.jpg",
		},
		listContent: [
			plain("Sự kiện được đồng tổ chức bởi Can Immigration Vietnam, Georgian College, Vo Dung International Academy cùng với sự góp mặt của những chuyên gia đi đầu trong lĩnh vực làm đẹp, du học và định cư Canada."),
			space,
			plain("Buổi hội thảo này hứa hẹn sẽ đem đến những cơ hội học tập, những xuất học bổng giá trị dành cho sinh viên Việt Nam theo học ngành thẩm mỹ, cùng với cơ hội phát triển sự nghiệp và định cư lâu dài tại Canada."),
			bold("Tại sự kiện “GO TORONTO WITH CIDESTO”, bạn sẽ:"),
			plainClose("Hiểu rõ hơn về chương trình học Cidesco."),
			plainClose("Tư vấn miễn phí các chương trình du học, du lịch, tay nghề và định cư Canada liên quan đến ngành thẩm mỹ."),
			plainClose("Thông tin chính xác về chính sách du học, tay nghề và định cư Canada."),
			plainClose("Lựa chọn ngành học, lộ trình, và phương hướng sang Canada phù hợp với từng khách hàng."),
			plainClose("Giải đáp thắc mắc về mức lương, cơ hội việc làm, cơ hội định cư liên quan đến ngành thẩm mỹ tại Canada."),
			plainClose("Giải đáp lộ trình 1 người sang Canada, cả nhà sẽ hưởng những lợi ích gì?"),
			bold("Tham gia hội thảo “GO TORONTO WITH CIDESCO” bạn sẽ:"),
			plainClose("Có cơ hội nhận được một trong học bổng dưới đây khi tham gia đăng ký tham gia lớp CIDESCO:"),
			plainClose("Beauty Therapy trị giá $2.000."),
			plainClose("Beauty and Spa Management trị giá $1.000."),
			plainClose("Holistic Massage trị giá $1.200."),
			space,
			plain("Có cơ hội nhận được học bổng lên đến $2.000 CAD được cấp bởi trường Georgian College."),
			space,
			plain("Nhận voucher $100 CAD - $200 CAD khi sử dụng dịch vụ du học và định cư thông qua công ty Can Immigration Vietnam."),
			space,
			plain("Nhanh tay đăng ký ngay để tranh các suất học bổng độc quyền siêu giới hạn tại đường link:"),
			link("https://forms.gle/HyKSyyuPZoYJ87zg9", "GO TORONTO WITH CIDESCO - DU HỌC CANADA NGÀNH LÀM ĐẸP"),
			space,
			plain("Địa điểm: Hội trường 903, Tầng 9, Diamond Plaza - 34 Lê Duẩn, Phường Bến Nghé, Quận 1, TP.HCM."),
			plain("Thời gian: Từ 08:30 AM đến 12:00 PM vào THỨ BẢY ngày 25/03/2023."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/seasonal/goTorontoWithCidesco/Brochure - Go Toronto With CIDESCO.pdf", "Brochure - Go Toronto With CIDESCO.pdf"),
			link("/contents/seasonal/goTorontoWithCidesco/GO TORONTO WITH CIDESCO - Thông tin chung.docx", "GO TORONTO WITH CIDESCO - Thông tin chung.docx"),
		],
	},
];

export const LIST_GENERAL_INFO_PROJECT: TSeasonalProjectGeneralInfo[] = LIST_INFO_PROJECT.map<TSeasonalProjectGeneralInfo>((item) => {
	return {
		id: item.id,
		thumbnailImage: {
			imgSrc: item.thumbnailImage.imgSrc,
			imgAlt: item.thumbnailImage.imgAlt,
		},
		title: item.title,
	};
});
