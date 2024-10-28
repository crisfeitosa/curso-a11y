export async function axeAccessibilityReporter() {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const axe = await require("@axe-core/react");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const react = await require("react");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const reactDOM = await require("react-dom");

    axe(react, reactDOM, 1000);
  }
}