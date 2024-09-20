# DEPLOY LINK: https://amulette-admin-backend.vercel.app/

# ENV FILE

```
NODE_ENV=production
MONGO_LOCAL_URL=mongodb://127.0.0.1/amulette-admin-backend
# MONGO_LOCAL_URL=mongodb+srv://rahatsir:rahatsir@cluster0.igbstt4.mongodb.net/amulette-admin-backend?retryWrites=true&w=majority&keepAlive=true&socketTimeoutMS=360000&connectTimeoutMS=360000
MONGO_PROD_URL=mongodb+srv://rahatsir:rahatsir@cluster0.igbstt4.mongodb.net/amulette-admin-backend?retryWrites=true&w=majority&keepAlive=true&socketTimeoutMS=360000&connectTimeoutMS=360000
PORT=5050
BCRYPT_SALT_ROUNDS=8
JWT_SECRET=ALLAHU_AKBAR
SMTP_SENDER_EMAIL=amulettefun@gmail.com
SMTP_PASSWORD=vogbxcqqesgvvgrq
STRIPE_PUB_KEY=pk_test_51OtDm0Hjk6vl7EKbJ6H2mq4rvUDJFCvwVXkJxC5ArLfK0o1Shyt4PacDTTu0bBoJV5uugKLLVHSVRCeJuMoXcJrg00CvdYNcCr
STRIPE_SEC_KEY=sk_test_51OtDm0Hjk6vl7EKbwN6ZQuuEIZxsNUe66msk9PzsYWjNzwm0fOKQYKLwdsSPpTzQlhW78iLFEGV2i6fEdlYqDH5R00t1yzbtFs

```
### https://amulette-admin-backend.vercel.app/api/v1/friends/all-friends-groups  Get all friends and where I am in the groups

```
{
    "status": 200,
    "message": "You are friends",
    "data": {
        "friends": [
            {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com",
                "createdAt": "2024-03-18T23:56:56.061Z"
            },
            {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com",
                "createdAt": "2024-03-18T23:56:56.061Z"
            }
        ],
        "groups": [
            {
                "_id": "65eaffdf6941733a1abab126",
                "name": "test1",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e9deeb8b16057e227cf76e",
                        "_id": "65eb0a7c6f8946466f886d40",
                        "createdAt": "2024-03-08T12:54:20.489Z",
                        "updatedAt": "2024-03-08T12:54:20.489Z"
                    },
                    {
                        "user": "65e9cf90b37747da7f15d8c9",
                        "_id": "65eb00b06941733a1abab133",
                        "createdAt": "2024-03-08T12:12:32.639Z",
                        "updatedAt": "2024-03-08T12:12:32.639Z"
                    },
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65eaffdf6941733a1abab128",
                        "createdAt": "2024-03-08T12:09:03.550Z",
                        "updatedAt": "2024-03-08T12:09:03.550Z"
                    }
                ],
                "photos": [
                    {
                        "image": "https://i.ibb.co/H2FgXw6/14.jpg",
                        "user": "65e9deeb8b16057e227cf76e",
                        "_id": "65eb0b6d6f8946466f886d4d",
                        "createdAt": "2024-03-08T12:58:21.833Z",
                        "updatedAt": "2024-03-08T12:58:21.833Z"
                    },
                    {
                        "image": "https://i.ibb.co/H2FgXw6/14.jpg",
                        "user": "65e9deeb8b16057e227cf76e",
                        "_id": "65eb0b696f8946466f886d46",
                        "createdAt": "2024-03-08T12:58:17.310Z",
                        "updatedAt": "2024-03-08T12:58:17.310Z"
                    }
                ],
                "createdAt": "2024-03-08T12:09:03.208Z",
                "updatedAt": "2024-03-08T12:58:21.834Z",
                "__v": 5
            },
            {
                "_id": "65eb09816f8946466f886d35",
                "name": "test2",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65eb09826f8946466f886d37",
                        "createdAt": "2024-03-08T12:50:10.027Z",
                        "updatedAt": "2024-03-08T12:50:10.027Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-08T12:50:09.652Z",
                "updatedAt": "2024-03-08T12:50:10.028Z",
                "__v": 1
            },
            {
                "_id": "65f90ea35709b21e39d86f7a",
                "name": "test4",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65f90ea45709b21e39d86f7c",
                        "createdAt": "2024-03-19T04:03:48.800Z",
                        "updatedAt": "2024-03-19T04:03:48.800Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-19T04:03:47.709Z",
                "updatedAt": "2024-03-19T04:03:48.801Z",
                "__v": 1
            },
            {
                "_id": "65f90f3b944373f0fdac982e",
                "name": "test5",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65f90f3c944373f0fdac9830",
                        "createdAt": "2024-03-19T04:06:20.022Z",
                        "updatedAt": "2024-03-19T04:06:20.022Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-19T04:06:19.418Z",
                "updatedAt": "2024-03-19T04:06:20.022Z",
                "__v": 1
            },
            {
                "_id": "65f90f9c5db72380c2b7d43f",
                "name": "test6",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65f90f9c5db72380c2b7d441",
                        "createdAt": "2024-03-19T04:07:56.760Z",
                        "updatedAt": "2024-03-19T04:07:56.760Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-19T04:07:56.422Z",
                "updatedAt": "2024-03-19T04:07:56.761Z",
                "__v": 1
            }
        ]
    }
}

```


### https://amulette-admin-backend.vercel.app/api/v1/messages [POST] create message

```
body:
{
    "receiver":"65f8d4c8b7b7151ead739581",
    "photo":"https://i.ibb.co/1vTdQ4j/9.jpg"
}

response:
{
    "success": true,
    "message": "Successfully Created Message",
    "data": {
        "sender": "65f8d4c8b7b7151ead739581",
        "receiver": "65f8d4c8b7b7151ead739581",
        "photo": "https://i.ibb.co/1vTdQ4j/9.jpg",
        "_id": "65fd89eb98d160fed0b678e6",
        "createdAt": "2024-03-22T13:38:51.029Z",
        "updatedAt": "2024-03-22T13:38:51.029Z",
        "__v": 0
    }
}

```

### https://amulette-admin-backend.vercel.app/api/v1/messages/receiver-messages/:opposeuserId [GET] getting messages via

```
{
    "success": true,
    "message": "Retrieve all messages ",
    "data": [
        {
            "_id": "65fd5b4cf8febd382ad71c65",
            "sender": {
                "_id": "65e924d5d8769aa9706f831f",
                "userName": "anismolla",
                "email": "anis.cse5.bu@gmail.com"
            },
            "receiver": {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com"
            },
            "photo": "https://i.ibb.co/1vTdQ4j/9.jpg",
            "createdAt": "2024-03-22T10:19:56.296Z",
            "updatedAt": "2024-03-22T10:19:56.296Z",
            "__v": 0
        },
        {
            "_id": "65fd5b59f8febd382ad71c69",
            "sender": {
                "_id": "65e924d5d8769aa9706f831f",
                "userName": "anismolla",
                "email": "anis.cse5.bu@gmail.com"
            },
            "receiver": {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com"
            },
            "photo": "https://i.ibb.co/1vTdQ4j/9.jpg",
            "createdAt": "2024-03-22T10:20:09.019Z",
            "updatedAt": "2024-03-22T10:20:09.019Z",
            "__v": 0
        },
        {
            "_id": "65fd852baf1347e4c5f5b8ec",
            "sender": {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com"
            },
            "receiver": {
                "_id": "65e924d5d8769aa9706f831f",
                "userName": "anismolla",
                "email": "anis.cse5.bu@gmail.com"
            },
            "photo": "https://i.ibb.co/1vTdQ4j/9.jpg",
            "createdAt": "2024-03-22T13:18:35.588Z",
            "updatedAt": "2024-03-22T13:18:35.588Z",
            "__v": 0
        },
        {
            "_id": "65fd854faf1347e4c5f5b8f6",
            "sender": {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com"
            },
            "receiver": {
                "_id": "65e924d5d8769aa9706f831f",
                "userName": "anismolla",
                "email": "anis.cse5.bu@gmail.com"
            },
            "photo": "https://i.ibb.co/1vTdQ4j/9.jpg",
            "createdAt": "2024-03-22T13:19:11.733Z",
            "updatedAt": "2024-03-22T13:19:11.733Z",
            "__v": 0
        }
    ]
}

```

### https://amulette-admin-backend.vercel.app/api/v1/messages/:id [DELETE] DELETE message

### https://amulette-admin-backend.vercel.app/api/v1/messages/:id [PUT] UPDATE message

### http://localhost:5000/api/v1/payments [POST] create payment using paymentIntent

```
{
    "cardHolderName": "test",
    "amount":"1200",
    "paymentMethod":"",
    "productDetails":"test:test,test1:test1"
}

```
### Friends APIS

# https://amulette-admin-backend.vercel.app/api/v1/friends [GET] for all friends

# https://amulette-admin-backend.vercel.app/api/v1/requests/recieved [GET] for all friendsRequest

# https://amulette-admin-backend.vercel.app/api/v1/requests/sent [POST] for all friends

## payload

```

{
    "targetFriend":"tarikul.cse5.bu+1@gmail.com"
}
```

# https://amulette-admin-backend.vercel.app/api/v1/friends/accept/:id id=request id [POST] Accept friends request

# https://amulette-admin-backend.vercel.app/api/v1/friends/reject/:id id=request id [DELETE] Delete friends request

### http://localhost:5000/api/v1/payments [GET] use for get all payments from stripe

### http://localhost:5000/api/v1/payments/customers use for get all customer from stripe

### https://amulette-admin-backend.vercel.app/api/v1/friends/check/:userId [get] checking whether user friends or not

```
for friends:
{
    "status": 200,
    "message": "You are friends",
    "data": true
}
for not friends:
{
    "status": 200,
    "message": "You are not friends",
    "data": false
}

```

### https://amulette-admin-backend.vercel.app/api/v1/friends/groups [get] getting all friends and all the groups that I have joined

```
{
    "status": 200,
    "message": "You are friends",
    "data": {
        "friends": [
            {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com",
                "createdAt": "2024-03-18T23:56:56.061Z"
            },
            {
                "_id": "65f8d4c8b7b7151ead739581",
                "userName": "manis",
                "email": "anis.cse.bu@gmail.com",
                "createdAt": "2024-03-18T23:56:56.061Z"
            }
        ],
        "groups": [
            {
                "_id": "65eaffdf6941733a1abab126",
                "name": "test1",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e9deeb8b16057e227cf76e",
                        "_id": "65eb0a7c6f8946466f886d40",
                        "createdAt": "2024-03-08T12:54:20.489Z",
                        "updatedAt": "2024-03-08T12:54:20.489Z"
                    },
                    {
                        "user": "65e9cf90b37747da7f15d8c9",
                        "_id": "65eb00b06941733a1abab133",
                        "createdAt": "2024-03-08T12:12:32.639Z",
                        "updatedAt": "2024-03-08T12:12:32.639Z"
                    },
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65eaffdf6941733a1abab128",
                        "createdAt": "2024-03-08T12:09:03.550Z",
                        "updatedAt": "2024-03-08T12:09:03.550Z"
                    }
                ],
                "photos": [
                    {
                        "image": "https://i.ibb.co/H2FgXw6/14.jpg",
                        "user": "65e9deeb8b16057e227cf76e",
                        "_id": "65eb0b6d6f8946466f886d4d",
                        "createdAt": "2024-03-08T12:58:21.833Z",
                        "updatedAt": "2024-03-08T12:58:21.833Z"
                    },
                    {
                        "image": "https://i.ibb.co/H2FgXw6/14.jpg",
                        "user": "65e9deeb8b16057e227cf76e",
                        "_id": "65eb0b696f8946466f886d46",
                        "createdAt": "2024-03-08T12:58:17.310Z",
                        "updatedAt": "2024-03-08T12:58:17.310Z"
                    }
                ],
                "createdAt": "2024-03-08T12:09:03.208Z",
                "updatedAt": "2024-03-08T12:58:21.834Z",
                "__v": 5
            },
            {
                "_id": "65eb09816f8946466f886d35",
                "name": "test2",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65eb09826f8946466f886d37",
                        "createdAt": "2024-03-08T12:50:10.027Z",
                        "updatedAt": "2024-03-08T12:50:10.027Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-08T12:50:09.652Z",
                "updatedAt": "2024-03-08T12:50:10.028Z",
                "__v": 1
            },
            {
                "_id": "65f90ea35709b21e39d86f7a",
                "name": "test4",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65f90ea45709b21e39d86f7c",
                        "createdAt": "2024-03-19T04:03:48.800Z",
                        "updatedAt": "2024-03-19T04:03:48.800Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-19T04:03:47.709Z",
                "updatedAt": "2024-03-19T04:03:48.801Z",
                "__v": 1
            },
            {
                "_id": "65f90f3b944373f0fdac982e",
                "name": "test5",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65f90f3c944373f0fdac9830",
                        "createdAt": "2024-03-19T04:06:20.022Z",
                        "updatedAt": "2024-03-19T04:06:20.022Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-19T04:06:19.418Z",
                "updatedAt": "2024-03-19T04:06:20.022Z",
                "__v": 1
            },
            {
                "_id": "65f90f9c5db72380c2b7d43f",
                "name": "test6",
                "owner": "65e924d5d8769aa9706f831f",
                "members": [
                    {
                        "user": "65e924d5d8769aa9706f831f",
                        "_id": "65f90f9c5db72380c2b7d441",
                        "createdAt": "2024-03-19T04:07:56.760Z",
                        "updatedAt": "2024-03-19T04:07:56.760Z"
                    }
                ],
                "photos": [],
                "createdAt": "2024-03-19T04:07:56.422Z",
                "updatedAt": "2024-03-19T04:07:56.761Z",
                "__v": 1
            }
        ]
    }
}

```

# https://amulette-admin-backend.vercel.app/api/v1/groups [POST] FOR CREATING GROUP

```
BODY:
{
  "name":"test1",
  "owner":"65e924d5d8769aa9706f831f"
}

"REPONSE JSON":

{
  "success": true,
  "message": "Successfully Created Group",
  "data": {
    "name": "test2",
    "owner": "65e924d5d8769aa9706f831f",
    "_id": "65eb09816f8946466f886d35",
    "members": [
      {
        "user": "65e924d5d8769aa9706f831f",
        "_id": "65eb09826f8946466f886d37",
        "createdAt": "2024-03-08T12:50:10.027Z",
        "updatedAt": "2024-03-08T12:50:10.027Z"
      }
    ],
    "photos": [],
    "createdAt": "2024-03-08T12:50:09.652Z",
    "updatedAt": "2024-03-08T12:50:10.028Z",
    "__v": 1
  }
}
```

# https://amulette-admin-backend.vercel.app/api/v1/groups/add-member/:groupid [patch] for adding group member

```
body:
{
  "user":"65e9cf90b37747da7f15d8c9"
}

response json:
{
  "success": true,
  "message": "Member added to group successfully",
  "data": {
    "_id": "65eaffdf6941733a1abab126",
    "name": "test1",
    "owner": "65e924d5d8769aa9706f831f",
    "members": [
      {
        "user": "65e9deeb8b16057e227cf76e",
        "_id": "65eb0a7c6f8946466f886d40",
        "createdAt": "2024-03-08T12:54:20.489Z",
        "updatedAt": "2024-03-08T12:54:20.489Z"
      },
      {
        "user": "65e9cf90b37747da7f15d8c9",
        "_id": "65eb00b06941733a1abab133",
        "createdAt": "2024-03-08T12:12:32.639Z",
        "updatedAt": "2024-03-08T12:12:32.639Z"
      },
      {
        "user": "65e924d5d8769aa9706f831f",
        "_id": "65eaffdf6941733a1abab128",
        "createdAt": "2024-03-08T12:09:03.550Z",
        "updatedAt": "2024-03-08T12:09:03.550Z"
      }
    ],
    "photos": [],
    "createdAt": "2024-03-08T12:09:03.208Z",
    "updatedAt": "2024-03-08T12:54:20.490Z",
    "__v": 3
  }
}



```

# https://amulette-admin-backend.vercel.app/api/v1/groups/add-photo/:groupid [patch] for uploading photo to group

```
body:
{
  "user":"65e9deeb8b16057e227cf76e",
  "image":"https://i.ibb.co/H2FgXw6/14.jpg"
}

response json:

{
  "success": true,
  "message": "Photo added to group successfully",
  "data": {
    "_id": "65eaffdf6941733a1abab126",
    "name": "test1",
    "owner": "65e924d5d8769aa9706f831f",
    "members": [
      {
        "user": "65e9deeb8b16057e227cf76e",
        "_id": "65eb0a7c6f8946466f886d40",
        "createdAt": "2024-03-08T12:54:20.489Z",
        "updatedAt": "2024-03-08T12:54:20.489Z"
      },
      {
        "user": "65e9cf90b37747da7f15d8c9",
        "_id": "65eb00b06941733a1abab133",
        "createdAt": "2024-03-08T12:12:32.639Z",
        "updatedAt": "2024-03-08T12:12:32.639Z"
      },
      {
        "user": "65e924d5d8769aa9706f831f",
        "_id": "65eaffdf6941733a1abab128",
        "createdAt": "2024-03-08T12:09:03.550Z",
        "updatedAt": "2024-03-08T12:09:03.550Z"
      }
    ],
    "photos": [
      {
        "image": "https://i.ibb.co/H2FgXw6/14.jpg",
        "user": "65e9deeb8b16057e227cf76e",
        "_id": "65eb0b6d6f8946466f886d4d",
        "createdAt": "2024-03-08T12:58:21.833Z",
        "updatedAt": "2024-03-08T12:58:21.833Z"
      },
      {
        "image": "https://i.ibb.co/H2FgXw6/14.jpg",
        "user": "65e9deeb8b16057e227cf76e",
        "_id": "65eb0b696f8946466f886d46",
        "createdAt": "2024-03-08T12:58:17.310Z",
        "updatedAt": "2024-03-08T12:58:17.310Z"
      }
    ],
    "createdAt": "2024-03-08T12:09:03.208Z",
    "updatedAt": "2024-03-08T12:58:21.834Z",
    "__v": 5
  }
}

```

# https://amulette-admin-backend.vercel.app/api/v1/groups/ [get] get all groups

# https://amulette-admin-backend.vercel.app/api/v1/groups/:id [get] get single group

# https://amulette-admin-backend.vercel.app/api/v1/groups/:id [put] for updating group

# https://amulette-admin-backend.vercel.app/api/v1/groups/:id [deelete] for deleting group

# https://amulette-admin-backend.vercel.app/api/v1/users/login [POST] FOR LOGIN

```
{
  "userName":"anismolla",
  "password":"1234",
}
```

# https://amulette-admin-backend.vercel.app/api/v1/users/login [POST] FOR SIGNUP

```
{
  "userName":"anismolla",
  "password":"1234",
  "email":"anis.cse5.bu@gmail.com",
  "type":"authType",
....
}
```

# https://amulette-admin-backend.vercel.app/api/v1/users/verify-email/:userId/:code [GET] FOR VERIFYING

# https://amulette-admin-backend.vercel.app/api/v1/users/

```
{
    "success": true,
    "message": "retrieve all users",
    "data": [
        {
            "_id": "65e924d5d8769aa9706f831f",
            "userName": "anismolla",
            "authType": "email",
            "email": "anis.cse5.bu@gmail.com",
            "authority": [],
            "friends": [],
            "emailIsVerified": true,
            "verificationCode": 4293,
            "createdAt": "2024-03-07T02:22:13.848Z",
            "updatedAt": "2024-03-07T02:23:04.203Z",
            "__v": 0
        }
    ]
}

```

## http://localhost:5000/api/v1/users/username-available/tarikul1 [GET] check userName Availability

## http://localhost:5000/api/v1/users/email-available/cse5.bu@gmail.com [GET] check email Availability

# https://amulette-admin-backend.vercel.app/api/v1/favorites/ [GET] FOR GETTING FAVORITES LIST

# https://amulette-admin-backend.vercel.app/api/v1/favorites/ [PUT] FOR Toggling favorite

```
{

  "photo":"65e13c84d30d9678d360804d"
}

```

# https://amulette-admin-backend.vercel.app/api/v1/unfavorites/:ID [PUT] FOR TOGGLING UNFAVORITE

```
{
  "photo":"65e13c84d30d9678d360804d"
}
```

# https://amulette-admin-backend.vercel.app/api/v1/favorites/:ID [DELTE] FOR DELETING FAVORITE

# https://amulette-admin-backend.vercel.app/api/v1/favorites/:ID [GET] FOR GETTING SINGLE FAVORITE

# https://amulette-admin-backend.vercel.app/api/v1/unfavorites/ [GET] FOR GETTING UNFAVORITES LIST

# https://amulette-admin-backend.vercel.app/api/v1/unfavorites/:ID [DELETE] FOR DELETING UNFAVORITE

# https://amulette-admin-backend.vercel.app/api/v1/unfavorites/:ID [GET] FOR GETTING SINGLE UNFAVORITE

