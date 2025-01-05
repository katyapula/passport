import "./App.css";
import PassportList from "./components/PassportList.tsx";
import { useGetMockedByNameQuery } from "./app/data.ts";
import store from "./app/store.ts";
import { Provider } from "@/components/ui/provider";
import Chakra from "./components/Chakra.tsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defaultSystem,
  defineConfig,
} from "@chakra-ui/react";

function App() {
  // const { data, error, isLoading } = useGetMockedByNameQuery('passport');
  //
  // if (isLoading) return 'Loading...'
  //
  // if (error) return 'An error has occurred: '

  const data = store.getState();

  const config = createSystem(defaultConfig, {
    theme: {
      semanticTokens: {
        colors: {
          danger: { value: "{colors.red}" },
        },
        shadows: {
          sm: { value: "2px 2px 0 rgba(0, 0, 0, 0.14)" },
        },
      },
      tokens: {
        colors: {},
        radii: {
          sm: { value: "2px" },
        },
      },
    },
  });

  return (
    <ChakraProvider value={config}>
      <Chakra />
    </ChakraProvider>
  );
}

export default App;
