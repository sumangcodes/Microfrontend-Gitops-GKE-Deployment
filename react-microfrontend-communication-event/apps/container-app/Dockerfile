# Use an official Node.js image as the base image
FROM node:18.18.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies and Webpack CLI globally
RUN npm install && npm install -g webpack webpack-cli

# Verify installation of webpack and webpack-cli
RUN echo "Installed Webpack version:" && webpack --version
RUN echo "Installed Webpack CLI version:" && webpack-cli --version

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080

# Start the development server
CMD ["npm", "start"]