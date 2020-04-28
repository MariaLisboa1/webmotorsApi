# API for testing webmotors

> ## Routes

### User

1. ✅ POST /users

   - Request

   ```
   {
     "email": "test@email.com",
     "name": "test",
     "password": "123456"
   }
   ```

   - response 201

   ```
   {
     "_id": "5ea772b362ec9f2c642d11be",
     "email": "test@test.com",
     "name": "test",
     "password": "$2b$10$7yf.McM2/rsuy9XJVXNqoeejwmtkJf0dJp.O9naIcpJJaYH413gOO",
     "avatar": "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001400/f4a6ca4e-cbfd-437b-89df-78a5b4c0c65d_axmusu.jpg"
   }
   ```

2. ✅ GET /users/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/users/{userId}`

   - response 200

   ```
   {
     "_id": "5ea772b362ec9f2c642d11be",
     "email": "test@test.com",
     "name": "test",
     "password": "$2b$10$7yf.McM2/rsuy9XJVXNqoeejwmtkJf0dJp.O9naIcpJJaYH413gOO",
     "avatar": "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001400/f4a6ca4e-cbfd-437b-89df-78a5b4c0c65d_axmusu.jpg"
   }
   ```

3. ✅ PUT /users/avatar/:id

   - Request: `/users/avatar/{userId}` uploading the user's avatar image

   - response 204

   ```
   null
   ```

### Vehicle

1. ✅ POST /vehicles

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request

   ```
   {
     "Make":"Ford",
     "Model":"Onix",
     "Version":"1.0 MPI EL 8V FLEX 4P MANUAL",
     "KM":50,
     "Price":"1300",
     "YearModel":"2012",
     "YearFab":"2012",
     "Color":"Verde",
     "UserId":"5ea65c82f396ab0017c79267"
   }
   ```

   - response 201

   ```
   {
     "_id":"5ea732860247d40017efb11d",
     "Image":"https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
     "Make":"Ford",
     "Model":"Onix",
     "Version":"1.0 MPI EL 8V FLEX 4P MANUAL",
     "KM":50,
     "Price":"1300",
     "YearModel":"2012",
     "YearFab":"2012",
     "Color":"Verde",
     "UserId":"5ea65c82f396ab0017c79267"
   }
   ```

2. ✅ GET /vehicles/

   - Request: `/vehicles`

   - response 200

   ```
   [
     {
       "_id":"5ea732860247d40017efb11d",
       "Image":"https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
       "Make":"Ford",
       "Model":"Onix",
       "Version":"1.0 MPI EL 8V FLEX 4P MANUAL",
       "KM":50,
       "Price":"1300",
       "YearModel":"2012",
       "YearFab":"2012",
       "Color":"Verde",
       "UserId":"5ea65c82f396ab0017c79267"
     }
   ]
   ```

3. ✅ GET /vehicles/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/vehicles/{vehicleId}`

   - response 200

   ```
   {
     "_id":"5ea732860247d40017efb11d",
     "Image":"https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
     "Make":"Ford",
     "Model":"Onix",
     "Version":"1.0 MPI EL 8V FLEX 4P MANUAL",
     "KM":50,
     "Price":"1300",
     "YearModel":"2012",
     "YearFab":"2012",
     "Color":"Verde",
     "UserId":"5ea65c82f396ab0017c79267"
   }
   ```

4. ✅ PUT /vehicles/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/vehicles/image/{vehicleId}` enviando a imagem do carro

   - response 204

   ```
   null
   ```

   5. ✅ DELETE /vehicles/:id

   - Headers: `{ "authorization": "Bearer {token}"}`
   - Request: `/vehicles/{vehicleId}`

   - response 204

   ```
   null
   ```

### Authentication

1. ✅ POST /login

   - Request

   ```
   {
     "email": "test@email.com",
     "password": "123456"
   }
   ```

   - response 200

   ```
   {
     "auth": true,
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTc2ZmI1ZjhiZmEyMTYwNDRhNjEwMSIsImlhdCI6MTU4ODAzMTYzNX0.TN5m9MfRUuBBcImMBCFLMvnDZ4Z23t3VFGZUxPGcwIc"
   }
   ```

2. ✅ GET /logout

   - Request: `/logout`

   - response 200

   ```
   {
     "auth": false,
     "token": null
   }
   ```

> ## Exceptions

1. ✅ Returns error **404** if the data does not exist
2. ✅ Returns error **400** if any invalid data is passed
3. ✅ Returns error **401** if not authenticated
4. ✅ Returns error **500** if the server is having problems
