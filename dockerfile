FROM node:22-alpine

WORKDIR /app

COPY . .

#instalar dependencias de produccion
RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]