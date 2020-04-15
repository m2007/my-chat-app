# my-chat-app
Чат реализован на Node.js (сервер - Express) с использованием Socket.io. Фронт - Vue.js (Vue CLI 3), Sass.

### 1. Клонирование репозитория

```
git clone https://github.com/m2007/my-chat-app.git
cd my-chat-app/
```

### 2. Установка пакетов

Для фронта:
```
cd client
sudo npm i
```
Для бека:
```
cd server
sudo npm i
```

### 3. Запуск.

#### В режиме разработки:

В первом терминале:
```
cd client
npm run serve
```
Во втором терминале:
```
cd server
npm start
```
открывать http://localhost:8080

#### Построить проект:
```
cd client
sudo npm run build
cd ../server
npm start
```
на локалке запускаетсся на http://localhost:3000

### 4. Скринкаст. 

#### Структура чата
![](https://i.yapx.ru/HEoeJ.gif)

#### Работа чата
![](https://i.yapx.ru/HEogH.gif)

#### Удаление сообщениий
![](https://i.yapx.ru/HEoj1.gif)

#### Поиск пользователей
![](https://i.yapx.ru/HEo6v.gif)
