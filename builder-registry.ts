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
  name: 'Whatsapp',
  inputs: [{ name: 'telephone', type: 'string' ,required: true, helperText: 'Digite o número de telefone'}]
});
Builder.registerComponent(Button, {
  name: 'Button',
  inputs: [{ name: 'text', type: 'string' ,required: true, helperText: 'Digite o texto'},
    { name: 'telefone', type: 'string' ,helperText: 'Digite o número de telefone'}
  ]
});
Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [{ name: 'telefone', type: 'string' , required: true, helperText: 'Digite o número de telefone'}
  ]
});