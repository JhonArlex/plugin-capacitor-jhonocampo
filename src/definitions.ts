declare module "@capacitor/core" {
  interface PluginRegistry {
    JhonOcampo: JhonOcampoPlugin;
  }
}

export interface JhonOcampoPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
