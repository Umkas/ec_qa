FROM node:latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
RUN npx playwright install-deps && npx playwright install chrome
CMD ["npx", "playwright", "test"]
