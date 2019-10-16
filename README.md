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
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/anauthorized.png "autorized")
###### publicKey ini akan di tempel di suatu service, dan user tersebut jika ingin mengakses service "contohnya service B" maka dalam authentikasinya harus membawa publicKey ini untuk di kenali jika ingin mengakses service B

##### stage 6 : mencoba men-generate token dengan script yang di buat di aplikasi ini. ada pada file generate_token_jwt.js
###### karena masih manual auth :-) kita coba untuk men-generate token dengan script dibawah ini
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/generate%20token.png "token ")
###### setelah mengedit generate token kita coba jalankan file nya
###### $ node ./generate_token_jwt.js
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/hasil%20generate%20token.png "token ")
###### maka akan keluar hasil token telah di generate

##### stage 7 : mencoba api-gateway dengan token jwt
###### jika token yang dibawa oleh user dan pulicKey nya sesuai dengan yang ada di service tersebut maka data akan yg di inginkan akan tampil seperti dibawha ini:
![Alt text](https://github.com/sandisunandar99/api-gateway/blob/master/img/output%20hasil%20generate.png "token ")


## sekian dan trimakasih :-) untuk stage selanjutnya akan membahas cara menggunakan scope yaitu untuk membatasi user dengan method apa saja yang dapat digunakan pada service tersebut
