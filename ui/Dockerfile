FROM node

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230


WORKDIR /app
COPY ./package.json .
RUN npm install

COPY . .

RUN mkdir src
VOLUME /app/src

ENTRYPOINT ["npm", "run", "dev"]
CMD ["--", "--port", "8000", "--host", "0.0.0.0"]
