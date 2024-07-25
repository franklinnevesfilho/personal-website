import {ScreenProps} from "@/types";
import '@/style/Screen.css'

export function Screen({ title, children, id, ...props}: ScreenProps) {
    const {className} = props;
    return (
        <section className={`screen ${className}`} id={id}>
                <div className="content">
                    {
                        title &&
                        <div className="title">
                            <h1>{title}</h1>
                        </div>
                    }
                    {children}
                </div>
        </section>
    );
}

