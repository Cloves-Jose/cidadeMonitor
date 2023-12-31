## Comando obrigatório
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:alpine

## Define o local onde o app vai ficar no disco do container
## Pode ser o diretório que você quiser
WORKDIR /app

## Copia tudo que começa com package e termina com .json para dentro da pasta /usr/app
COPY package*.json ./

# Copiando as pastas do prisma
COPY prisma ./prisma/
# Copiando todas as pastas do src
COPY ./src ./
#  Copiando as variáveis de ambiente
COPY .env ./

# Copiando o tsconfig.json
COPY tsconfig.json ./

# Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install

# Gerando um cliente prisma
RUN npx prisma generate

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/app do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

## Container ficará ouvindo os acessos na porta 3000
EXPOSE 3000

## Não se repete no Dockerfile
## Executa o comando npm start para iniciar o script que que está no package.json
CMD npm start