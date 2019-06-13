# Next Dashboard Front Server

## Installation

```
git clone https://github.com/basarevych/next-dashboard
cd next-dashboard/web
cp .env.example .env
```

Edit **.env** file and set your options

### Run Production

```
cd next-dashboard/common
yarn install --prod

cd ../web
yarn install --prod
yarn start
```

### Build Production

```
cd next-dashboard/api
yarn schema

cd ../web
yarn relay
yarn build
```

### Run Development

```
cd next-dashboard/common
yarn install

cd ../api
yarn install
yarn schema

cd ../web
yarn install
yarn relay
yarn dev
```

### System service

#### systemd

```
cp systemd.service /etc/systemd/system/next-dashboard-web.service
systemctl daemon-reload
systemctl enable next-dashboard-web
systemctl start next-dashboard-web
```

#### PM2

```
pm2 start pm2.config.js
```
