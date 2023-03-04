FROM node:16.14

ENV USER=evaldito

# install python and make
RUN apt-get update && \
	apt-get install -y python3 build-essential && \
	apt-get purge -y --auto-remove

# create evaldito user
RUN groupadd -r ${USER} && \
	useradd --create-home --home /home/evaldito -r -g ${USER} ${USER}

# set up volume and user
USER ${USER}
WORKDIR /home/evaldito

COPY --chown=${USER}:${USER} package*.json ./
RUN npm install
VOLUME [ "/home/evaldito" ]

COPY --chown=${USER}:${USER}  . .

ENTRYPOINT [ "npm", "run", "prod" ]
