import DemoInput from "@/components/DemoInput";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Demo Input V1.0
					</CardTitle>
				</CardHeader>
				<CardContent>
					<DemoInput />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
