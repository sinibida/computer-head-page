# (Thanks Github Copilot!)

# 1. Copy source files and build

# Use the official Node.js image as the base image
# Note: Is debian.
FROM node:latest as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm i --no-package-lock

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# 2. Serve the application with nginx

FROM nginx:latest

# Copy the build output to replace the default nginx contents
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that the application will run on
EXPOSE ${PORT}

# Start the application
# daemon off -> foreground running
CMD ["nginx", "-g", "daemon off;"]
