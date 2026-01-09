import { WindowControls } from "#components"
import { locations } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const Archive = () => {
    const { openWindow } = useWindowStore();
    const trash = locations.trash;

    const openItem = (item) => {
        if (item.kind === "file") {
            openWindow(`${item.fileType}${item.kind}`, item);
        }
    }

    if (!trash) return <div className="p-10 text-red-500">Trash configuration not found!</div>;

    return (
        <div className="flex flex-col w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                <WindowControls target="trash" />
                <h2 className="flex-1 text-center font-bold text-sm text-gray-600">Archive</h2>
                <div className="w-12" />
            </div>

            <div className="flex-1 bg-white relative p-8 h-[calc(100%-44px)]">
                <ul className="h-full w-full relative">
                    {trash.children.map((item) => (
                        <li
                            key={item.id}
                            className={`${item.position} absolute flex flex-col items-center gap-2 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-colors`}
                            onClick={() => openItem(item)}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="size-16 object-contain group-hover:scale-105 transition-transform"
                            />
                            <p className="text-xs text-center font-medium w-24 truncate text-gray-700">{item.name}</p>
                        </li>
                    ))}
                </ul>
                {trash.children.length === 0 && (
                    <div className="abs-center text-gray-300 font-medium">Trash is empty</div>
                )}
            </div>
        </div>
    )
}

const ArchiveWindow = WindowWrapper(Archive, "trash");

export default ArchiveWindow;
