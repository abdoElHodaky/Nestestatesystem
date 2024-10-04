FROM node:18-alpine
WORKDIR /app
COPY . .
#COPY supervisord.conf /etc/supervisord.conf

RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev npm sudo
#RUN rm -rf package-lock.json && mkdir /var/log/supervisor/
#RUN npm cache clean --force
RUN  npm install pm2 npm-run-all  -g
RUN ln -s /usr/local/lib/node_modules/ ../node_modules 
RUN chmod 777 -R . 
#ENV APP_URL=0.0.0.0
ENV ENABLE_OVERCOMMIT_MEMORY=true
#RUN mkdir -p backend/public
RUN cd client && yarn install && \
npm run build
#cp -r build/. backend/public && \
RUN cd server && npm install && \
npm run build
EXPOSE 3000 
CMD ["node","server/dist/main.js"]
#CMD ["/usr/bin/supervisord","-c","./supervisord.conf"]
