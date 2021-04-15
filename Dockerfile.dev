# Берем node.js v8 в качестве родительского образа
FROM node:8-alpine
# Устанавливаем рабочую директорию
WORKDIR /app
# Копируем файлы yarn.lock и package.json в рабочую директорию
COPY package.json yarn.lock /app/
# Устанавливаем зависимости
RUN yarn install
# Открываем порт 3000
EXPOSE 3000
# Запускаем React-приложение после запуска контейнера
CMD ["yarn", "start"]