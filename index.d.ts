export {};

declare global {
  interface Window {
    Tally: Window['Tally'];
  }
}
