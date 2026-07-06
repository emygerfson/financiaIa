interface DividerProps {
  orientation?: "horizontal" | "vertical";
  spacing?: string;
  className?: string;
}

export function Divider({
  orientation = "horizontal",
  spacing = "16px",
  className = "",
}: DividerProps) {
  const styles =
    orientation === "horizontal"
      ? {
          marginTop: spacing,
          marginBottom: spacing,
        }
      : {
          marginLeft: spacing,
          marginRight: spacing,
        };

  const classNameByOrientation = {
    horizontal: "w-full h-px",
    vertical: "self-stretch w-px",
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={styles}
      className={[
        "bg-border",
        classNameByOrientation[orientation],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

