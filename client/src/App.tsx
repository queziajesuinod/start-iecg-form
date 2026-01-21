import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import AtualizarCelula from "@/pages/AtualizarCelula";
import Links from "@/pages/Links";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import StartForm from "./pages/StartForm";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
import PixConfirmation from "./pages/PixConfirmation";
import Ticket from "./pages/Ticket";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={StartForm} />
      <Route path={"/eventos"} component={EventList} />
      <Route path={"/eventos/:id"} component={EventDetails} />
      <Route path={"/inscricao/:orderCode"} component={RegistrationConfirmation} />
      <Route path={"/pix-confirmacao"} component={PixConfirmation} />
      <Route path={"/ticket/:orderCode"} component={Ticket} />
      <Route path={"/celulas/atualizar"} component={AtualizarCelula} />
      <Route path={"/links"} component={Links} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
