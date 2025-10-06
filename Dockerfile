# Use Node.js as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json only (no node_modules)
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (this will generate the .next folder)
RUN npm run build

# Start the application using the production server
CMD ["npm", "run", "start"]