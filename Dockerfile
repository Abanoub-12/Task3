FROM node:21-alpine as build

# Setting working directory
WORKDIR /app

# Installing dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
