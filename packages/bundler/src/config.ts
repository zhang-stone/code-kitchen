// TODO: a better way to config this
export const globalConfig = {
  esbuildWasmPath: "https://cdn.jsdelivr.net/npm/esbuild-wasm@0.14.54",
};

export const setupEsbuild = (config: Partial<typeof globalConfig>) => {
  Object.assign(globalConfig, config);
};
