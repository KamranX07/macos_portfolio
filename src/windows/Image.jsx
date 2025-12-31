import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <div className="flex flex-col h-full bg-white">
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2 className="flex-1 text-center font-bold text-sm">{name}</h2>
                <div className="w-12" />
            </div>

            <div className="flex-1 overflow-hidden p-2 bg-[#f0f0f0] flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt={name}
                    className="max-w-full max-h-[70vh] object-contain shadow-md rounded-sm"
                />
            </div>
        </div>
    );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
