import { WebPlugin } from '@capacitor/core';
import { JhonOcampoPlugin } from './definitions';

export class JhonOcampoWeb extends WebPlugin implements JhonOcampoPlugin {
  constructor() {
    super({
      name: 'JhonOcampo',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const JhonOcampo = new JhonOcampoWeb();

export { JhonOcampo };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(JhonOcampo);
