import SashRibbon from "./SashRibbon";

const Banner = () => {
	return (
		<section className="banner">
			<div className="banner-container relative">
				<div className="video-container w-full aspect-video">
					<video
						className="object-cover w-full h-full"
						autoPlay
						muted
						loop
						playsInline>
						<source
							src="/assets/videos/canada-video_x265.mp4"
							type="video/mp4; codecs=avc1"
						/>
						<source
							src="/assets/videos/canada-video_x264.mp4"
							type="video/mp4; codecs=hvc1"
						/>
					</video>
				</div>
				<div className="sash-ribbon-wrap w-full h-[7.5%] sm:h-[10%] bg-white absolute bottom-[10%] flex flex-row overflow-hidden">
					<SashRibbon key={1} />
					<SashRibbon key={2} />
				</div>
				<div className="title-container flex flex-col text-white absolute top-[30%] sm:top-[20%] left-[20%] sm:left-auto right-auto sm:right-[10%] text-xl sm:text-4xl sm:text- font-medium">
					<span className="title">Start your new journey</span>
					<span className="title">in Canada with</span>
					<span className="title">Can Immigration Vietnam</span>
				</div>
			</div>
		</section>
	);
};

export default Banner;
