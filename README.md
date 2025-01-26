
# run
npm run dev

# plugin pwa
https://vite-pwa-org.netlify.app/guide/

npm install -D vite-plugin-pwa



# certificados
1. Gerar Certificados com OpenSSL (Sem Chocolatey)

Você pode instalar o OpenSSL diretamente e usá-lo para gerar os certificados.
Windows

    Baixar OpenSSL:
        Acesse https://slproweb.com/products/Win32OpenSSL.html.
        Baixe e instale a versão adequada para o seu sistema.

    Gerar os Certificados: Após instalar o OpenSSL:

        Abra o terminal no diretório onde deseja salvar os certificados.

        Execute o comando:

        openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes

        Responda às perguntas (você pode deixar a maioria em branco para testes).

Linux/macOS

O OpenSSL já está instalado na maioria dos sistemas Linux e macOS. Basta rodar o mesmo comando acima no terminal.
2. Usar mkcert (Recomendado para Simplicidade)

O mkcert é uma ferramenta gratuita e fácil de usar para gerar certificados SSL locais.
Instalação do mkcert

    Windows:
        Baixe o executável de https://github.com/FiloSottile/mkcert/releases.
        Coloque o arquivo mkcert.exe em uma pasta no PATH (por exemplo, C:\Windows\System32).

    Linux/macOS:
        Instale com o gerenciador de pacotes do sistema:
            macOS: brew install mkcert
            Linux: Use o gerenciador de pacotes (ex.: apt install mkcert).

Gerar Certificados com mkcert

    Instale o certificado raiz confiável:

mkcert -install

Gere os certificados para localhost:

    mkcert localhost

    Isso criará dois arquivos:
        localhost-key.pem (chave privada).
        localhost.pem (certificado público).

    Use esses arquivos na configuração do Vite.

3. Configurar o Vite

Após gerar os certificados (usando OpenSSL ou mkcert), configure o vite.config.js:

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';

export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'), // ou key.pem
      cert: fs.readFileSync('./localhost.pem'),   // ou cert.pem
    },
  },
});

4. Testar no Navegador

    Execute o servidor: npm run dev.
    Acesse https://localhost:5173.

Essas opções são completamente gratuitas e funcionam perfeitamente para desenvolvimento local. Se tiver dúvidas sobre algum passo, é só perguntar!


# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
