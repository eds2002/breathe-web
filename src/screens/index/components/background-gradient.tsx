export const BackgroundGradient = () => {
	return (
		<div
			className="absolute inset-0 w-full h-full -z-10"
			style={{
				background:
					"linear-gradient(144deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
				filter: "url(#noise)",
			}}
			aria-hidden="true"
		>
			<svg className="block" aria-hidden="true">
				<filter id="noise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.65"
						numOctaves="3"
						stitchTiles="stitch"
						result="turbulence"
					/>
					<feColorMatrix type="saturate" values="0" result="desaturated" />
					<feComposite
						operator="over"
						in="desaturated"
						in2="SourceGraphic"
						result="composite"
					/>
					<feBlend mode="overlay" in="composite" in2="SourceGraphic" />
				</filter>
			</svg>
		</div>
	);
};
