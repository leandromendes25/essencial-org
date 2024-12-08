import { Builder } from '@builder.io/react';
import Footer from './src/components/Footer';
import Whatsapp from './src/components/Whatsapp';
import Header from './src/components/Header';
import Button from './src/components/Button';


Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [{ name: 'url', type: 'string' },
    
  ],
});

Builder.registerComponent(Whatsapp, {
  name: 'Whatsapp'
});
Builder.registerComponent(Button, {
  name: 'Button',
  inputs: [{ name: 'label', type: 'string' ,required: true, helperText: 'Digite o texto'},
    { name: 'type', type: 'string' ,helperText: 'Digite o tipo do botão'}

  ]
});
Builder.registerComponent(Header, {
  name: 'Header',
});