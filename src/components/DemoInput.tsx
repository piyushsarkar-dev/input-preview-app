"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const DemoInput = () => {
	const [input, setInput] = useState("");
	const [butoon, setButoon] = useState("");
	const push = () => {
		setInput(butoon);
	};
	return (
		<section className="grid grid-cols-1 place-items-center gap-3">
			<div className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
				<p className="text-xs text-gray-500 dark:text-gray-400">Preview:</p>
				<p className="min-h-[1.75rem] text-lg font-semibold text-gray-900 dark:text-gray-100">
					{input}
				</p>
			</div>
			<Input
				placeholder="Type A Number"
				onChange={(i) => setButoon(i.target.value)}
				type="number"
				className="border-green-500"
			/>

			<Button
				onClick={push}
				className="cursor-pointer">
				Click Me !
			</Button>
		</section>
	);
};

export default DemoInput;
