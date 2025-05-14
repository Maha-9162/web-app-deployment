# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application on port 8080
EXPOSE 8080

# Start the app
CMD ["node", "app.js"]
