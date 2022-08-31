FROM node:18-bullseye-slim
COPY . /app
COPY install.sh .
WORKDIR ./app
RUN chmod +x /install.sh
RUN /install.sh
CMD npm run start