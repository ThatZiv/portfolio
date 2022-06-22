# WIP

FROM ubuntu

# update
RUN sudo apt-get update -y
RUN sudo apt-get upgrade -y

# install nodejs (with nvm)
RUN cd ~
RUN sudo apt-get install curl -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN source ~/.bashrc
RUN nvm install v16.6.1
RUN nvm use v16.6.1

# install git
RUN sudo apt-get install git -y

# clone repo
RUN git clone https://github.com/thatziv/portfolio/tree/dev

# run code
RUN cd ~/portfolio
RUN npm install -g react-scripts
RUN npm install -y
RUN npm run start