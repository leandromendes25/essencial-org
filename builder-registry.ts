import { Builder } from '@builder.io/react';
import Footer from './src/components/Footer';
import Whatsapp from './src/components/Whatsapp';
import Header from './src/components/Header';

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [{ name: 'url', type: 'string' },
    
  ],
});

Builder.registerComponent(Whatsapp, {
  name: 'Whatsapp',
  inputs: [{ name: 'telephone', type: 'string' ,required: true, helperText: 'Digite o número de telefone'}]
});
Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [{ name: 'telefone', type: 'string' , required: true, helperText: 'Digite o número de telefone'}
  ]
});