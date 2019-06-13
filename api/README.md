# Next Dashboard API Server

## Installation

```
git clone https://github.com/basarevych/next-dashboard
cd next-dashboard/api
cp .env.example .env
```

Edit **.env** file and set your options

### Run Production

```
cd next-dashboard/common
yarn install --prod

cd ../api
yarn install --prod
yarn start
```

### Run Development

```
cd next-dashboard/common
yarn install

cd ../api
yarn install
yarn schema
yarn dev
```

### System service

#### systemd

```
cp systemd.service /etc/systemd/system/next-dashboard-api.service
systemctl daemon-reload
systemctl enable next-dashboard-api
systemctl start next-dashboard-api
```

#### PM2

```
pm2 start pm2.config.js
```
