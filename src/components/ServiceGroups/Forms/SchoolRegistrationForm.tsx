import { useState } from "react";
import InputField from "../../Fields/InputField";
import CheckboxField from "../../Fields/CheckboxField";
import SelectField from "../../Fields/SelectField";
import InputFileField from "../../Fields/InputFileField";
import TitleButton from "../../Buttons/TitleButton";
import { isEmailValid, isPhoneValid } from "../../../utils/validator";
import { formatBytes, renameFile, totalFileSize } from "../../../utils/helper";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { FILE_FORM_UPLOAD_NAME, FILE_FORM_UPLOAD_TYPE, InstitutionTypeSchool, LIST_COLLEGE_SCHOOL, LIST_HIGH_SCHOOL_PRIVATE, LIST_HIGH_SCHOOL_PUBLIC, LIST_LANGUAGES_SCHOOL, LIST_UNIVERSITY_SCHOOL, MAX_CONTENT_FILE_SIZE, MAX_NUMBER_FILE, Semester } from "../setting";
import { TSchoolRegistrationForm } from "../types";

const SchoolRegistrationForm = () => {
	const [name, setName] = useState<TSchoolRegistrationForm["name"]>();
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [email, setEmail] = useState<TSchoolRegistrationForm["email"]>();
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);
	const [phone, setPhone] = useState<TSchoolRegistrationForm["phone"]>();
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);
	const [semesterFirst, setSemesterFirst] = useState<TSchoolRegistrationForm["semester"]["semesterFirst"]>(false);
	const [semesterSecond, setSemesterSecond] = useState<TSchoolRegistrationForm["semester"]["semesterSecond"]>(false);
	const [semesterThird, setSemesterThird] = useState<TSchoolRegistrationForm["semester"]["semesterThird"]>(false);
	const [semesterFourth, setSemesterFourth] = useState<TSchoolRegistrationForm["semester"]["semesterFourth"]>(false);
	const [major, setMajor] = useState<TSchoolRegistrationForm["major"]>();

	const [passportFileList, setPassportFileList] = useState<TSchoolRegistrationForm["files"]>();
	const [ieltsFileList, setIeltsFileList] = useState<TSchoolRegistrationForm["files"]>();
	const [transcriptsHighSchoolFileList, setTranscriptsHighSchoolFileList] = useState<TSchoolRegistrationForm["files"]>();
	const [transcriptsCollegeFileList, setTranscriptsCollegeFileList] = useState<TSchoolRegistrationForm["files"]>();
	const [fileListErrorMessage, setFileListErrorMessage] = useState<string>();
	const [isDisplayFileListError, setIsDisplayFileListError] = useState<boolean>(false);

	const listInstitutionTypeSchoolId = "institution-type-school";
	const listInstitutionTypeSchool: InstitutionTypeSchool[] = Object.entries(InstitutionTypeSchool).map(([item, value]) => value);
	const [institutionTypeSchool, setInstitutionTypeSchool] = useState<TSchoolRegistrationForm["institutionTypeSchool"]>();
	const [isDisplayInstitutionTypeSchoolError, setIsDisplayInstitutionTypeSchoolError] = useState<boolean>(false);

	const handleSetInstitutionTypeSchool = (value: TSchoolRegistrationForm["institutionTypeSchool"]) => {
		setInstitutionTypeSchool(value);
		if (value === InstitutionTypeSchool.COLLEGE) {
			setListSchool(LIST_COLLEGE_SCHOOL);
			return;
		}
		if (value === InstitutionTypeSchool.UNIVERSITY) {
			setListSchool(LIST_UNIVERSITY_SCHOOL);
			return;
		}
		if (value === InstitutionTypeSchool.LANGUAGES_SCHOOL) {
			setListSchool(LIST_LANGUAGES_SCHOOL);
			return;
		}
		if (value === InstitutionTypeSchool.HIGH_SCHOOL_PUBLIC) {
			setListSchool(LIST_HIGH_SCHOOL_PUBLIC);
			return;
		}
		if (value === InstitutionTypeSchool.HIGH_SCHOOL_PRIVATE) {
			setListSchool(LIST_HIGH_SCHOOL_PRIVATE);
			return;
		}
		setListSchool([]);
	};

	const listSchoolId = "school-registration-list";
	const [listSchool, setListSchool] = useState<string[]>([]);
	const [school, setSchool] = useState<TSchoolRegistrationForm["school"]>();
	const [schoolErrorMessage, setSchoolErrorMessage] = useState<string>("Trường chưa phù hợp");
	const [isDisplaySchoolError, setIsDisplaySchoolError] = useState<boolean>(false);

	const handleSubmit = async () => {
		setIsDisplayNameError(false);
		setIsDisplayEmailError(false);
		setIsDisplayPhoneError(false);
		setIsDisplayInstitutionTypeSchoolError(false);
		setIsDisplaySchoolError(false);
		setIsDisplayFileListError(false);
		if (!name) {
			setIsDisplayNameError(true);
			return;
		}
		if (!email || !isEmailValid(email)) {
			setIsDisplayEmailError(true);
			return;
		}
		if (!phone || !isPhoneValid(phone)) {
			setIsDisplayPhoneError(true);
			return;
		}
		if (!institutionTypeSchool) {
			setIsDisplayInstitutionTypeSchoolError(true);
			return;
		}
		if (!school) {
			setIsDisplaySchoolError(true);
			return;
		}
		const totalFile = (passportFileList ? passportFileList.length : 0) + (ieltsFileList ? ieltsFileList.length : 0) + (transcriptsHighSchoolFileList ? transcriptsHighSchoolFileList.length : 0) + (transcriptsCollegeFileList ? transcriptsCollegeFileList.length : 0);
		if (totalFile > MAX_NUMBER_FILE) {
			setFileListErrorMessage(`Tổng số file nên ít hơn ${MAX_NUMBER_FILE}. Tổng số file hiện tại: ${totalFile}`);
			setIsDisplayFileListError(true);
			return;
		}

		const _totalFileSize = (passportFileList ? totalFileSize(passportFileList) : 0) + (ieltsFileList ? totalFileSize(ieltsFileList) : 0) + (transcriptsHighSchoolFileList ? totalFileSize(transcriptsHighSchoolFileList) : 0) + (transcriptsCollegeFileList ? totalFileSize(transcriptsCollegeFileList) : 0);
		if (_totalFileSize > MAX_CONTENT_FILE_SIZE) {
			setFileListErrorMessage(`Tổng dung lượng các file nên ít hơn 25MB. Tống dung lượng các file hiện tại: ${formatBytes(_totalFileSize)}`);
			setIsDisplayFileListError(true);
			return;
		}

		const id = uuidv4();
		const formData = new FormData();
		formData.append("id", id);
		formData.append("name", name);
		formData.append("email", email);
		formData.append("phone", phone);
		formData.append("institutionTypeSchool", institutionTypeSchool);
		formData.append("school", school);
		formData.append(
			"semester",
			JSON.stringify({
				semesterFirst: semesterFirst,
				semesterSecond: semesterSecond,
				semesterThird: semesterThird,
				semesterFourth: semesterFourth,
			}),
		);
		major ? formData.append("major", major) : null;

		if (!!passportFileList) {
			Array.from(passportFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.PASSPORT}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}
		if (!!ieltsFileList) {
			Array.from(ieltsFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.IELTS}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}
		if (!!transcriptsHighSchoolFileList) {
			Array.from(transcriptsHighSchoolFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.TRANSCRIPT_HIGH_SCHOOL}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}
		if (!!transcriptsCollegeFileList) {
			Array.from(transcriptsCollegeFileList).forEach((file) => {
				file = renameFile(file, `${id}_${FILE_FORM_UPLOAD_TYPE.TRANSCRIPT_COLLEGE}_${file.name}`);
				formData.append(FILE_FORM_UPLOAD_NAME, file);
			});
		}

		await axios
			.post("api/submitSchoolRegistrationForm", formData, {
				headers: {
					"content-type": "multipart/form-data",
				},
				onUploadProgress: (process) => {
					if (!process.total) {
						return;
					}
					console.log((process.loaded * 100) / process.total);
				},
			})
			.then((response) => {
				console.log("response");
				console.log(response);
			})
			.catch((error) => {
				console.log("error");
				console.log(error);
			});
	};

	const fieldContainer = "field-container my-5";

	return (
		<div id="school-registration">
			<div className="school-registration-form-container flex flex-row justify-center">
				<div className="image-container w-[35%] bg-no-repeat bg-center bg-cover rounded-[30px] -mr-[3%]"></div>
				<div className="form-container w-[65%] px-[5%] py-8 bg-white rounded-[30px] -ml-[3%]">
					<div className="title-container">
						<span className="title font-extrabold text-5xl text-strongPink uppercase">Đăng ký trường học</span>
					</div>
					<div className="form-field-container">
						<div className="info-field-container">
							<div className={fieldContainer}>
								<InputField
									type="text"
									placeHolder="Họ & tên"
									errorMessage="Họ & tên chưa phù hợp"
									isRequired={true}
									isDisplayErrorMessage={isDisplayNameError}
									handleChangeValue={setName}
								/>
							</div>
							<div className={fieldContainer}>
								<InputField
									type="email"
									placeHolder="Email"
									errorMessage="Email chưa phù hợp"
									isRequired={true}
									isDisplayErrorMessage={isDisplayEmailError}
									handleChangeValue={setEmail}
								/>
							</div>
							<div className={fieldContainer}>
								<InputField
									type="tel"
									placeHolder="Số điện thoại"
									errorMessage="Số điện thoại chưa phù hợp"
									isRequired={true}
									isDisplayErrorMessage={isDisplayPhoneError}
									handleChangeValue={setPhone}
								/>
							</div>
							<div className={fieldContainer}>
								<SelectField
									id={listInstitutionTypeSchoolId}
									list={listInstitutionTypeSchool}
									label="Chương trình học"
									placeHolder="--Chọn chương trình--"
									errorMessage="Chương trình học chưa phù hợp"
									isRequired={true}
									isDisplayErrorMessage={isDisplayInstitutionTypeSchoolError}
									handleChangeValue={handleSetInstitutionTypeSchool}
								/>
							</div>
							<div className={fieldContainer}>
								<SelectField
									id={listSchoolId}
									list={listSchool}
									label="Trường"
									placeHolder="--Chọn trường--"
									errorMessage={schoolErrorMessage}
									isRequired={true}
									isDisplayErrorMessage={isDisplaySchoolError}
									handleChangeValue={setSchool}
								/>
							</div>
						</div>
						<div className={fieldContainer}>
							<div className="sub-title-container">
								<span className="text-strongPink font-bold text-xl">Kỳ nhập học</span>
							</div>
							<div className="list-checkbox-field-container flex flex-row justify-between w-10/12 my-1">
								<CheckboxField
									id="setSemesterFirst"
									label={Semester.FIRST}
									handleChangeValue={setSemesterFirst}
								/>
								<CheckboxField
									id="setSemesterSecond"
									label={Semester.SECOND}
									handleChangeValue={setSemesterSecond}
								/>
								<CheckboxField
									id="setSemesterThird"
									label={Semester.THIRD}
									handleChangeValue={setSemesterThird}
								/>
								<CheckboxField
									id="setSemesterFourth"
									label={Semester.FOURTH}
									handleChangeValue={setSemesterFourth}
								/>
							</div>
						</div>
						<div className={fieldContainer}>
							<InputField
								type="text"
								placeHolder="Ngành học và ghi chú"
								errorMessage="Ngành học và ghi chú chưa phù hợp"
								handleChangeValue={setMajor}
							/>
						</div>
						<div className={fieldContainer}>
							<div className="input-field-container grid grid-rows-2 grid-cols-2 gap-y-4">
								<InputFileField
									id="passport"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="Passport"
									handleChangeValue={setPassportFileList}
								/>
								<InputFileField
									id="ielts"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="IELTS"
									handleChangeValue={setIeltsFileList}
								/>
								<InputFileField
									id="transcriptsHighSchool"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="Học bạ và bằng tốt nghiệp"
									handleChangeValue={setTranscriptsHighSchoolFileList}
								/>
								<InputFileField
									id="transcriptsCollege"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="Học bạ và bằng tốt nghiệp Đại Học/Cao Đẳng"
									handleChangeValue={setTranscriptsCollegeFileList}
								/>
							</div>
							{isDisplayFileListError && fileListErrorMessage ? (
								<div className={`${fieldContainer} error-message-container before:content-['\\002A'] before:font-bold`}>
									<span className="font-bold">{fileListErrorMessage}</span>
								</div>
							) : (
								<></>
							)}
						</div>
						<div className={fieldContainer}>
							<TitleButton
								title="Gửi"
								buttonColor="strongPink"
								handleOnClick={handleSubmit}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SchoolRegistrationForm;