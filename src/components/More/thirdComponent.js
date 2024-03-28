const { default: Image } = require("next/image");

const ThirdComponent = () => {
	return (
        <div className="  text-white font-bold py-8">
            <h1 className="text-center text-3xl"> Some Writings</h1>
		<div className="py-8 px-6 flex max-lg:flex-col justify-center items-center ">
			<Image src="/Tech.jpg" alt="tech" width={400} height={400} />
			<div className="px-4 py-2">
				<p className="font-semibold text-xl">
					this is for testing purposes lorem iposumss this is for testing
					purposes lorem iposumss this is for testing purposes lorem
					iposumssthis is for testing purposes lorem iposumssthis is for testing
					purposes lorem iposumssvv
				</p>
			</div>
		</div>
        </div>
	);
};
export default ThirdComponent