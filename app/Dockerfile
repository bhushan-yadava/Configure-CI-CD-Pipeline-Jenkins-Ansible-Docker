FROM ubuntu:latest
RUN apt update && apt install -y nodejs npm
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
