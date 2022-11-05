FROM node:fermium-alpine3.16

# -S create system user
# -G group
RUN addgroup app && adduser -S -G app app

# set user and workdir
USER app
WORKDIR /app

# cache dependencies
COPY package*.json ./
RUN npm install

COPY --chown=app:app . /app

EXPOSE 5173

CMD ["npm","run","dev"];
