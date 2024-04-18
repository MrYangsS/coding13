
FROM node:21

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npx playwright install --with-deps chromum


CMD ["npm","run","ci:test"]

# 复制项目文件
COPY . .

# 构建 React 应用
RUN npm run build

# 构建 Storybook 静态站点
RUN npm run build-storybook

# 使用 Nginx 镜像作为基础来托管静态站点
FROM nginx:alpine

# 将 React 构建的静态文件复制到 Nginx 服务器
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# 将 Storybook 构建的静态文件复制到 Nginx 服务器的特定目录
COPY --from=build /usr/src/app/storybook-static /usr/share/nginx/html/storybook

# 暴露 8083 端口
EXPOSE 8083

