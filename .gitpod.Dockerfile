FROM gitpod/workspace-node-lts

RUN pip3 install mycli
RUN npm i -g pnpm