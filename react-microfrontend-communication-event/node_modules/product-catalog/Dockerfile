# Use an official Node.js image as the base image
FROM node:18.18.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install all dependencies including development dependencies
RUN npm install

# Ensure Webpack and Webpack CLI are installed as dev dependencies
RUN npm install -D webpack webpack-cli

# Copy the rest of the application code to the working directory
COPY . .

# Expose the application port
EXPOSE 8080

# Use Webpack to build the app (adjust as needed for your config)
RUN npm run build

# Start the server using the build output (adjust based on your setup)
CMD ["npm", "start"]