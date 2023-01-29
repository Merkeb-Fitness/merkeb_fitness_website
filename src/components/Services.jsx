import { useEffect, useState } from "react";

const images = [
	{	
		title: "Build a Muscle",
		url: "assets/building-muscle.jpg",
		alt: "Building Muscle"
	},
	{	
		title: "loose fat",
		url: "assets/fat-lose.jpg",
		alt: "Fat lose"
	}
]

const Services = () => {
	const [count, setCount] = useState(0)
	const [data, setData] = useState(images)

	const switchImage = () => {
		if(count < data.length - 1) {
			setCount(count + 1);
		} else if(count == 1) {
			setCount(0)
		}
		return currentImage
	}

	useEffect(()=>{
		const interval = setInterval(()=> {
			switchImage()
		}, 3000);
		return () => clearInterval(interval)
	}, [count])

    return (
        <section className="bg-primary">
		<div className="py-20 px-20 flex items-baseline space-x-4 justify-center w-full">
			<p className=" font-questrial font-normal text-[40px] leading-[56px]">Whether you want to 
			</p>
			<div className="font-poppins font-bold text-5xl leading-[68.3px]">{data[count].title}
				<img src="/assets/line.svg" />
			</div>
		</div>
		<div className="flex justify-center items-center space-x-10 px-20 pb-20">
			<div className="">
				<img src={data[count].url} alt={data[count].alt} className="" />
			</div>
			<div className="space-y-7">
				<p className="font-Rob font-medium text-2xl leading-[28px]">We got you covered!</p>
				<p className="max-w-lg font- font-extralight text-xl leading-5">Our meals are designed to help you build lean muscle mass and get stronger. Each meal comes pre portioned with high quality proteins, carbs and low fats.
				Our talented team will cook & delivery fresh high quality ready-to-eat meals to your doorstep, All you have to do is eat! & get jacked.</p>
				<p className="font-Rob font-medium text-2xl leading-7">Call to 0967187469 to Order</p>
			</div>
		</div>
	</section>
    )
}
export default Services;