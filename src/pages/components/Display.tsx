// components/Display.tsx
type DisplayProps = { operation: string; value: string };

export default function Display({ operation, value }: DisplayProps) {
    return (
        <div style={{ marginBottom: "8px" }}>
            {/* Línea superior con operación en curso */}
            <div style={{
                fontSize: "1rem",
                color: "#555",
                textAlign: "right",
                minHeight: "20px"
            }}>
                {operation}
            </div>

            {/* Pantalla principal */}
            <div style={{
                background: "#111",
                color: "#0f0",
                fontSize: "2rem",
                padding: "12px",
                borderRadius: "8px",
                textAlign: "right",
                minHeight: "50px"
            }}>
                {value}
            </div>
        </div>
    );
}
