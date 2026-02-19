import Subtitle from "./Subtitle";
import Title from "./Title";

export default function Header() {
    document.title = "DataCenter";
    return (
        <div className="text-center space-y-4">
            <Title />
            <Subtitle />
        </div>
    )
}