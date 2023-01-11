import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import ItemPage from "./Components/ItemPage";
import ItemsList from "./Components/ItemsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ItemsList />} />
            <Route path="/:details" element={<ItemPage />} />
          </Routes>
        </Router>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
