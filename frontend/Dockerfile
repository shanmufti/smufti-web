# Use the official Next.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of your app
COPY . .

# Expose the port that Cloud Run will use
EXPOSE 8080

# Run the Next.js app
CMD ["npm", "run", "start"]
