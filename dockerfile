# 使用官方 Node.js 作为父镜像
FROM node:latest as build

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安装项目依赖
RUN npm install

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

# 使用自定义 Nginx 配置（如果需要）
# COPY nginx.conf /etc/nginx/conf.d/default.conf
