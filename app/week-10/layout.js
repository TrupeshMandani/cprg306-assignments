import { AuthContextProvider } from "./_utils/auth-hooks";

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
