# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm config set registry https://registry.npmjs.org/ && \
  npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create nginx.conf if it doesn't exist in your project
RUN echo 'server { \
  listen 8080; \
  server_name localhost; \
  location / { \
  root /usr/share/nginx/html; \
  index index.html index.htm; \
  try_files $uri $uri/ /index.html; \
  } \
  location /health { \
  access_log off; \
  return 200 "healthy"; \
  } \
  }' > /etc/nginx/conf.d/default.conf

# Expose port 8080 instead of 80
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]