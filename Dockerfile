# Use the official Node 18 image as a base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

ENV NODE_ENV=production

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install app dependencies
RUN npm ci

# If you have global packages, you might want to add them too
# RUN npm install -g some-global-package

# Copy the rest of the application code into the container
COPY src/ ./src/
COPY tsconfig.json ./

# Build the TypeScript application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "dist/api.js" ]