export interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
	label?: string;
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[];
}

export type MainNavItem = NavItem;

export type SidebarNavItem = NavItemWithChildren;
