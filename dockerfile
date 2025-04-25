FROM node:22-alpine

WORKDIR /app

COPY . .

# definimos el environment segun el entorno
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# instalamos dependencias segun el entorno
RUN if [ "$NODE_ENV" = "production" ]; then npm install --production; else npm install; fi

EXPOSE 3000

# si no existe command en docker compose se ejecuta este comando al ejecutar el contenedor
CMD ["npm", "start"]