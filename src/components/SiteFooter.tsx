export function SiteFooter() {
    return (
        <footer className="">
            <div className="flex  flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-4 dark:border-t-slate-800  md:flex-row">
                <div className="container mx-auto flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p>Logo</p>
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <p className="text-center text-sm leading-loose text-slate-600  md:text-left">
                        Built by love .
                    </p>
                </div>
            </div>
        </footer>
    );
}
