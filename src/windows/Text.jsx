import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <div className="flex flex-col h-full">
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2 className="flex-1 text-center font-bold text-sm">{name}</h2>
                <div className="w-12" /> {/* Spacer to help center the title */}
            </div>

            <div className="flex-1 overflow-y-auto p-6 text-black bg-white">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-auto object-cover rounded-lg mb-6 shadow-sm"
                    />
                )}
                {subtitle && (
                    <h3 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-100 pb-2">
                        {subtitle}
                    </h3>
                )}
                <div className="space-y-4">
                    {description?.map((paragraph, index) => (
                        <p key={index} className="text-base text-gray-700 leading-relaxed font-normal">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
