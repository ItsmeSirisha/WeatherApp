import { createGlobalState } from "react-hooks-global-state";
const { setGlobalState, useGlobalState } = createGlobalState({
  celcius: "cel",
  description: "des",
  name: "nam",
  Feels_like: "fl",
  humidity: "hum"
});
export { setGlobalState, useGlobalState };
