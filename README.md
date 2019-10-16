# Test api-gateway
test cara kerja api-gatway dengan auth global

##### stage 1 : install node.js 

##### stage 2 : install express-gateway
###### $ npm install -g express-gateway
###### $ npm update

##### stage 3 : running api-gateway
###### $ npm start

![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/run%20api-gateway.png "runing api gateway")

###### untuk konfiguras dari api-gateway terdapat di folder /config/gateway.config.yml

##### stage 4 : mencoba menjalankan url dari api-gateway tanpa authentikasi
###### (service A) http://localhost:8080/posts, http://localhost:8080/photos
###### (service B) http://localhost:8080/api/users 

##### stage 5 : mencoba menjalankan url dari api-gateway dengan authentikasi
###### pertama membuat user untuk dismpan di redis 
###### $ eg users create
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/create%20users.png "cretae users")

###### buat credential untuk user tono untuk mengakses service B atau ::/api/users
###### $ eg credentials create -c tono -t jwt
###### keterangan : -c = consumer -t = type (type of credentials)
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/create%20credentials.png "cretae credentials")
###### setelah itu copy keySecret untuk dijadikan public key untuk mengakses servis B dan edit di configurasi gateway.config.yml seperti dibawah ini :
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/public%20key.png "public key")
setelah di coba akses ke servis B harus nya keluar pesan Unauthorized
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/anauthorized.png "public key")
