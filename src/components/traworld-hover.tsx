import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LinkTag } from "@/components/ui/typography/link-tag";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";

function TraworldHover(): JSX.Element {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<LinkTag
					href="https://www.traworld.com"
					target="_blank"
					rel="noreferrer noopener"
				>
					Traworld
				</LinkTag>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex justify-between space-x-4 text-left">
					<Avatar>
						<AvatarImage src="https://scontent.fkul8-3.fna.fbcdn.net/v/t39.30808-6/326749122_575940394058060_2190219092938663307_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=b1FJTFFXHlQAX81f_i5&_nc_ht=scontent.fkul8-3.fna&oh=00_AfBLOwQvF8793GmiRTDvoWvFojrJCzNomelVJnslEX74yg&oe=649FFDA6" />
						<AvatarFallback>TW</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">Traworld</h4>
						<p className="text-sm">
							Traworld is a one-stop e-commerce travel platform
							with a wide range of services for you to explore,
							plan and book with ease and convenience.
						</p>
						<div className="flex items-center pt-2">
							<CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
							<span className="text-xs text-slate-500">
								Joined April 2021
							</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}

export default TraworldHover;
