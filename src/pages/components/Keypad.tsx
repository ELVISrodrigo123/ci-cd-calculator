// components/Keypad.tsx
type KeypadProps = {
    onPress: (key: string) => void;
};

const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
];

export default function Keypad({ onPress }: KeypadProps) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px",
            marginTop: "12px"
        }}>
            {buttons.map(btn => (
                <button
                    key={btn}
                    onClick={() => onPress(btn)}
                    style={{
                        padding: "16px",
                        fontSize: "1.2rem",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}
