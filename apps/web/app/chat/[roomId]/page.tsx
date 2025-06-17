import {TextInput} from "@repo/ui/text-input";

export default function () {
    return <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}>
        <div>
            Chat room
        </div>
        <div>
            <TextInput placeholder={"Chat here"} size={"small"}></TextInput>
        </div>

    </div>
}