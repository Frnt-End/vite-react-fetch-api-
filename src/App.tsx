import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPage from "./Components/ItemPage";
import ItemsList from "./Components/ItemsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<ItemsList />} />
          <Route path="details/:id" element={<ItemPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
