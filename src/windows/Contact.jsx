import { WindowControls } from "#components";
import { socials } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/kamran.jpg"
                    alt="Kamran"
                    className="w-20 rounded-full"
                />

                <h3>Let's Connect</h3>
                <p>If you want to talk about tech Or wanted to have a casual chat? I'm in.</p>
                <h3>Contact:</h3>
                <a href="mailto:mdkamranakhter78@gmail.com" className="hover:underline">📩 KamranX07</a>
                <h3 className="mt-10">Socials</h3>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow