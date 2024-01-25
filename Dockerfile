# Etapa de construcción
FROM node:16 as build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build --prod

# Etapa de ejecución
FROM nginx:alpine


COPY --from=build /app/dist/order-fronted /usr/share/nginx/html

