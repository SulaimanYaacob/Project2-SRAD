import { AppShell } from "@mantine/core";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      sx={(theme) => ({
        // background: `${theme.colors.teal[0]}`,
      })}
    >
      {children}
    </AppShell>
  );
}

export default Layout;
