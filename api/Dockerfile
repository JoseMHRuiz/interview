# Use the official image as a parent image.
FROM node:12-alpine as builder

# Set the working directory.

WORKDIR /app

# Copy the file from your host to your current location.
COPY package.json /app/package.json

# Run the command inside your image filesystem.
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . /app

# Inform Docker that the container is listening on the specified port at runtime.

# Run the specified command within the container.

EXPOSE 3001

CMD ["npm", "start"]