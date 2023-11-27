import { DefaultConfigOptions } from "@formkit/vue";
import { ja, en } from '@formkit/i18n'

const config: DefaultConfigOptions = {
  theme: "genesis",
  locales: { ja, en },
  // アクティブなロケールを指定
  locale: 'ja',
};

export default config;