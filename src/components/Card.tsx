export interface Props {
	name: string,
	image: string,
	alt: string,
	protien: number,
	fat: number,
	carbs: number,
	calories: number,
	price: number
}

const Card = ({name, image, alt, protien, fat, carbs, calories, price} : Props) => {
	return (
		<div className="max-w-sm w-96 h-[349px] rounded-lg overflow-hidden shadow-lg">
	<div className="w-full h-[268px] relative">
		<img className="object-cover relative" src={image} alt={alt} />
		<div className="absolute bottom-6 left-0 space-y-1">
			<div className="bg-white rounded-tr-md rounded-br-md w-20 h-8 font-Rob font-medium text-sm leading-4 text-center py-2">{`${protien}"g P"`}</div>
			<div className="bg-white rounded-tr-md rounded-br-md w-20 h-8 font-Rob font-medium text-sm leading-4 text-center py-2">{`${carbs}"g C"`}</div>
			<div className="bg-white rounded-tr-md rounded-br-md w-20 h-8 font-Rob font-medium text-sm leading-4 text-center py-2">{`${fat}"g F"`}</div>
			<div className="bg-white rounded-tr-md rounded-br-md w-20 h-8 font-Rob font-medium text-sm leading-4 text-center py-2">{`${calories}"g Kcl"`}</div>
		</div>
	</div>
	<div className="px-6 pt-4 pb-2 flex justify-between">
		<div>
			<div className="font-questrial font-normal text-xl">{name}</div>
			<div className="flex space-x-4">
				<button className="bg-accent px-4 py-1 text-center rounded-md font-medium text-xs">Popular</button>
				{calories > 300 &&
				<button className="bg-[#00D8B1] px-4 py-1 text-center rounded-md font-medium text-xs">High Calori</button>
				}
				{calories < 150 &&
				<button className="bg-[#FF7A13] px-4 py-1 text-center rounded-md font-medium text-xs">Low Calori</button>
				}
			</div>
		</div>
		<div className="font-Rob font-medium text-xl">{price}</div>
	</div>
</div>
	)
}
export default Card;