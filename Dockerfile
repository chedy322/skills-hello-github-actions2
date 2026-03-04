FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm test



FROM node:22-alpine AS final
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/src ./src

EXPOSE 8080
CMD [ "node","src/file.js" ]