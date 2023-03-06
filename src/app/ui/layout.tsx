import { groupUisByTags } from "@/lib/contentlayerApi";
import { SidebarNav } from "@/components/SidebarNav";
import { ScrollArea } from "@/components/ui/ScrollArea";

interface UiLayoutProps {
    children: React.ReactNode;
}

export default function UiLayout({ children }: UiLayoutProps) {
    return (
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-20 z-30 hidden h-[calc(100vh-10vh)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 md:sticky md:block">
                <ScrollArea className="pr-4">
                    <SidebarNav items={groupUisByTags} />
                </ScrollArea>
            </aside>
            {children}
        </div>
    );
}