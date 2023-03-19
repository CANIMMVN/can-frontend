import Head from "next/head";
import { Navbar, Footer } from "../../components";
import contentGenerator, { TListContent, createSpaceContentNode, bold, link, plain, plainClose } from "../../services/ContentGenerator";

export default () => {
	const title = `"GO TORONTO WITH CIDESCO" - EVENT`;
	const imageSrc = "/contents/seasonal/goTorontoWithCidesco/Poster - Go Toronto With Cidesco.jpg";
	const space = createSpaceContentNode();
	const listContent: TListContent = [
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
		link("GO TORONTO WITH CIDESCO - DU HỌC CANADA NGÀNH LÀM ĐẸP=https://forms.gle/HyKSyyuPZoYJ87zg9"),
		space,
		plain("Địa điểm: Hội trường 903, Tầng 9, Diamond Plaza - 34 Lê Duẩn, Phường Bến Nghé, Quận 1, TP.HCM."),
		plain("Thời gian: Từ 08:30 AM đến 12:00 PM vào THỨ BẢY ngày 25/03/2023."),
		space,
		space,
		bold("Thông tin chi tiết:"),
		link("Brochure - Go Toronto With CIDESCO.pdf=/contents/seasonal/goTorontoWithCidesco/Brochure - Go Toronto With CIDESCO.pdf"),
		link("GO TORONTO WITH CIDESCO - Thông tin chung.docx=/contents/seasonal/goTorontoWithCidesco/GO TORONTO WITH CIDESCO - Thông tin chung.docx"),
	];
	return (
		<>
			<Head>
				<title>{title}</title>
				<link
					rel="icon"
					type="image/svg+xml"
					sizes="any"
					href="/logo/logo_red.svg"
				/>
			</Head>
			<div className="w-full">
				<Navbar isDynamic={false} />
				<div className="post-container-wrap w-[80%] mx-auto mt-36 mb-6 md:mb-5">
					<div className="title-container text-center mb-6 md:mb-5">
						<span className="title text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase">{title}</span>
					</div>
				</div>
				<div className="image-container-wrap relative mb-10 md:mb-20 after:content-[''] after:absolute after:-z-10 after:w-full after:h-[100vh] after:bg-lightBlue after:bottom-1/2">
					<div className="image-container w-[80%] mx-auto">
						<img
							className="w-full h-full max-h-[50vh] object-contain"
							src={imageSrc}
						/>
					</div>
				</div>
				<div className="post-container-wrap w-[80%] mx-auto">
					<div className="content-container w-[80%] mx-auto">{contentGenerator(listContent)}</div>
				</div>
				<Footer />
			</div>
		</>
	);
};
