"use client";
import Head from "next/head";
import { useParams } from "next/navigation";
import axios from "@/utils/axios";
import Image from "next/image";
import SwiperDetail from "@/components/About/AboutDetails/swiperr";
import Link from "next/link";
async function getData() {
	let data;
	await axios
		.get("/projects", {
			headers: {
				"Accept-Language": "en",
			},
		})
		.then((res) => {
			data = res.data;
		})
		.catch(console.error);

	return { props: { data } };
}

const AboutDetails = async () => {
	const params = useParams();
	const { id } = params;
	const data = await getData();
	const arr = data.props.data.data;
	const dataToUse = arr.find((mov) => mov.id == id);
	const index = arr.findIndex((mov) => mov.id == id);
	return (
		<>
			<Head>
				<title>About{id}</title>
			</Head>
			<div className="container mx-auto">
				{dataToUse && (
					<div className="py-4 px-6 max-lg:px-4">
						<div className="flex items-center justify-center">
							<Image
								src={dataToUse.image}
								width={600}
								height={300}
								className="object-cover rounded-xl"
								alt="About"
							/>
						</div>
						<div>
							<h1 className="text-[#f9f9f9] text-center py-4">
								{dataToUse.title}
							</h1>
						</div>
						<div className="flex justify-center items-center  max-lg:flex-col ">
							<div className=" lg:place-content-center lg:w-72 lg:mr-16 max-lg:px-4 max-lg:py-8">
								<p className="text-white font-semibold  max-lg:pl-4 ">{`${
									dataToUse.text
										? dataToUse.text
										: "lorem ipsum etlodadklasaskj gklsdjlgkds ljkgdsjkldsgl kljkdskjlsfljkgslk jsdgljkdslgjk "
								}`}</p>
							</div>
							<div className="lg:place-self-center max-lg:place-self-center text-white">
								{dataToUse.client && (
									<p className="font-semibold  pb-2">
										CLIENT: {dataToUse.client}
									</p>
								)}
								{dataToUse.directors && (
									<p className="font-semibold pb-2">
										DIRECTOR: {dataToUse.directors}
									</p>
								)}
								{dataToUse.cinematographer && (
									<p className="font-semibold pb-2">
										DP: {dataToUse.cinematographer}
									</p>
								)}
								{dataToUse.agency && (
									<p className="font-semibold pb-2">
										AGENCY: {dataToUse.agency}{" "}
									</p>
								)}
							</div>
						</div>
					</div>
				)}
				<div className="flex py-5 lg:justify-end max-lg:justify-center items-center  lg:px-16 max-lg:px-2">
					<Link
                      prefetch={false}

						className={` px-4 ${
							index != 0
								? "text-white font-semibold"
								: " pointer-events-none text-gray-500"
						}`}
						aria-disabled={index == 0}
						href={`/about/${index != 0 ? arr[index - 1].id : 0}`}
					>
						Previous
					</Link>
					<div className="bg-white w-1 h-3  "></div>
					<p className="text-white px-4"> Our Work</p>
					<div className="bg-white w-1 h-3 "></div>
					<Link
            prefetch={false}
						className={` px-4 ${
							index != arr.length - 1
								? "text-white font-semibold"
								: " pointer-events-none text-gray-500"
						}`}
						aria-disabled={index == arr.length - 1}
						href={`/about/${index != arr.length - 1 ? arr[index + 1].id : 0}`}
					>
						Next
					</Link>
				</div>
			</div>

			<SwiperDetail />
		</>
	);
};

export default AboutDetails;
