# Next Dashboard Front Server

## Installation

```
git clone https://github.com/basarevych/next-dashboard
cd next-dashboard/web-client
cp .env.example .env
```

Edit **.env** file and set your options

### Run Production

```
cd next-dashboard/common
yarn install --prod

cd ../web-client
yarn install --prod
yarn relay
yarn build
yarn start
```

### Run Static Mode Production

```
cd next-dashboard/common
yarn install --prod

cd ../web-client
yarn install --prod
yarn relay
yarn build
yarn export
```

Point your HTTP server to **/out** subdirectory or just do **yarn serve**

### Run Development

```
cd next-dashboard/common
yarn install

cd ../api-server
yarn install
yarn schema

cd ../web-client
yarn install
yarn relay
yarn dev
```

### System service

#### systemd

```
cp systemd.service /etc/systemd/system/next-dashboard-ssr.service
systemctl daemon-reload
systemctl enable next-dashboard-ssr
systemctl start next-dashboard-ssr
```

#### PM2

```
pm2 start pm2.config.js
```
