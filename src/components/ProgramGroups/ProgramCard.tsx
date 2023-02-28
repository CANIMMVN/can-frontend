import CircleButton from "../Buttons/CircleButton";
import { TProgramInfo } from "./types";

export type TProgramCard = TProgramInfo;

const ProgramCard = (props: TProgramCard) => {
	return (
		<div className="program-card-container relative w-full h-full">
			<img
				src={props.imgSrc}
				alt={props.imgAlt}
				className="object-cover h-full w-full"
			/>
			<div className="title-container flex flex-row justify-center items-center absolute bottom-[5%] left-10">
				<span className="title text-4xl font-bold uppercase text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] mx-1 mb-1">{props.title}</span>
				<div className="button-container mx-2">
					<CircleButton buttonColor="white" />
				</div>
			</div>
		</div>
	);
};

export default ProgramCard;
