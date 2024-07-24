import '../style/Screen.css'
import {ScreenProps} from "../types";

export function Screen({ title, children, id, ...props}: ScreenProps) {
    console.log("Creating screen with id: ", id);
    const {className} = props;
    return (
        <section className={`screen ${className}`} id={id}>
            <div className="row">
                {
                    title &&
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                }
                <div className="content">
                    {children}
                </div>
            </div>
        </section>
    );
}

