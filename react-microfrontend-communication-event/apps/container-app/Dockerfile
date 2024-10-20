# Use an official Node.js image as the base image
FROM node:18.18.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install
# Install Webpack CLI globally
RUN npm install -g webpack webpack-cli

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000
EXPOSE 8080

# Start the development server
CMD ["npm", "start"]