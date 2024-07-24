import {ScreenProps} from "@/types";
import '@/style/Screen.css'

export function Screen({ title, children, id, ...props}: ScreenProps) {
    console.log("Creating screen with id: ", id);
    const {className} = props;
    return (
        <section className={`screen ${className}`} id={id}>
                {
                    title &&
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                }
                <div className="content">
                    {children}
                </div>
        </section>
    );
}

