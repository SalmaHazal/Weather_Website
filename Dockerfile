# Use an official Nginx image to serve static files
FROM nginx:alpine

# Copy static website files to Nginx's web directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/

# Expose port 80 to allow traffic to the Nginx server
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
