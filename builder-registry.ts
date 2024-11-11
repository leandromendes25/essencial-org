import { Builder } from '@builder.io/react';
import Footer from './src/components/Footer';
import Whatsapp from './src/components/Whatsapp';

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [{ name: 'url', type: 'string' }],
});

Builder.registerComponent(Whatsapp, {
  name: 'Whatsapp',
  inputs: [{ name: 'telephone', type: 'string' }]
});
