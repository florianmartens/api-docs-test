import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: "/public/openapi.yaml",
        },
      }}
    />
  );
}

export default App;
