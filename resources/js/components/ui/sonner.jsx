import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "green",
          "--normal-text": "white",
          "--normal-border": "none"
        }
      }
      toastOptions={{
        className: "text-white!",
      }}
      {...props} />
  );
}

export { Toaster }
