# Use the official Node.js image as the base image
FROM node:18

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the app directory
COPY . .

# Compile TypeScript files
RUN npx tsc

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
