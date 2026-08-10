import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

const StartForm = lazy(() => import("./pages/StartForm"));
const AtualizarCelula = lazy(() => import("./pages/AtualizarCelula"));
const LiderCelula = lazy(() => import("./pages/LiderCelula"));
const DirecionamentosPendentes = lazy(() => import("./pages/DirecionamentosPendentes"));
const DiarioBordo = lazy(() => import("./pages/DiarioBordo"));
const Links = lazy(() => import("./pages/Links"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouterFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
    </div>
  );
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<RouterFallback />}>
      <Switch>
        <Route path={"/"} component={StartForm} />
        <Route path={"/celulas/atualizar"} component={AtualizarCelula} />
        <Route path={"/celulas/lider"} component={LiderCelula} />
        <Route path={"/direcionamentos/pendentes"} component={DirecionamentosPendentes} />
        <Route path={"/diario-bordo"} component={DiarioBordo} />
        <Route path={"/links"} component={Links} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <ThemeToggle />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
