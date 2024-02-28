
const Course = () => {
    return (
        <div className="mx-auto w-full max-w-5xl">
            <div className="" data-vimeo-initialized="true">
                <div style={{ padding: "61.93% 0 0 0", position: "relative" }}>
                    <iframe
                        src="https://player.vimeo.com/video/796019317?autoplay=1&app_id=122963"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                        }}
                        title="#5"
                        data-ready="true"
                    />
                </div>
            </div>
            <div className="p-4 lg:p-8 bg-slate-900 mt-4 rounded-md flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h1 className="text-2xl font-bold text--white">#3 Lorem ipsum dolor sit amet consectetur.</h1>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium btn btn-info transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    <span className="pr-2">Darsni yakunlash</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle "
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                    </svg>
                </button>
                
            </div>
        </div>
    );
};

export default Course;
