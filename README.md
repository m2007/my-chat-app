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
![Структура чата](https://github.com/m2007/my-chat-app/raw/gifs/1.png)

#### Работа чата
![Работа чата](https://github.com/m2007/my-chat-app/raw/gifs/2.png)

#### Удаление сообщениий
![Удаление сообщениий](https://github.com/m2007/my-chat-app/raw/gifs/3.png)

#### Поиск пользователей
![Поиск пользователей](https://github.com/m2007/my-chat-app/raw/gifs/4.png)
