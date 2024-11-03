# Stage 1: Build the React app with Vite
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . ./

# Build the React app for production
RUN npm run build

# Stage 2: Prepare build artifacts for sharing
FROM alpine:latest

WORKDIR /code

# Install necessary tools
RUN apk add --no-cache bash

# Create a directory for static files
RUN mkdir -p /code/frontend

# Copy build files from the build stage to the shared volume
COPY --from=build /app/dist /code/frontend

# Keep the container running to maintain the volume
CMD ["tail", "-f", "/dev/null"]
