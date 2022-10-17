import { ReactNode } from "@mdx-js/react/lib";

type Props = {
    summary: ReactNode
    children: ReactNode
}

export default ({ summary = "Example (click to open)", children }: Props) => {

    return (
        <details>
            <summary className="list-none">
                {summary}
            </summary>
            {children}
        </details>
    );
}