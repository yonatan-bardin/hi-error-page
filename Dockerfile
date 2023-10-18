# Stage 1: Build React app
FROM node:19.6.0-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:1.21-alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the container port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]