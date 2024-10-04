import {useEffect} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import {registerSW} from "./swreg";
function App() {
  useEffect(()=>{
    registerSW()
  },[])
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRoutes} />;
    </QueryClientProvider>
  );
}

export default App;
