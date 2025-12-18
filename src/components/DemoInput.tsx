import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const DemoInput = () => {
	return (
		<section className="grid grid-cols-1 place-items-center gap-3">
			<div className="m-2 grid h-[10vh] w-full place-items-center rounded-lg bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-center text-3xl">
				<span className="bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
					Hello
				</span>
			</div>
			<Input
				type="number"
				className="border-green-500"
			/>
			<Button className="cursor-pointer">Click Me !</Button>
		</section>
	);
};

export default DemoInput;
