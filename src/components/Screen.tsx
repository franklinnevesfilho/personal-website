import {ScreenProps} from "@/types";
import '@/style/Screen.css'
import {cn} from "@/lib";

export function Screen({ title, children, containerClassName, ...props}: ScreenProps) {
    return (
        <section className={cn('screen', containerClassName)} id={props.id}>
                <div className={cn('content',props.className)}>
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

