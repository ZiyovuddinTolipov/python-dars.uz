
const CourseList = () => {
    return (
        <ul className="flex flex-1 flex-col gap-2 text-white font-semibold">
            <li className="flex items-center justify-between px-3 py-2 bg-slate-900 hover:bg-slate-800 transition rounded-md">
                <span>#1 Kirish</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary h-5 w-5" />
            </li>
            <li className="flex items-center justify-between px-3 py-2 bg-slate-900 hover:bg-slate-800 transition rounded-md">
                <span>#2 Lorem, ipsum dolor.</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary h-5 w-5" />
            </li>
            <li className="flex items-center justify-between px-3 py-2 bg-slate-900 hover:bg-slate-800 transition rounded-md">
                <span>#3 Lorem, ipsum.</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary h-5 w-5" />
            </li>
        </ul>
    )
}

export default CourseList