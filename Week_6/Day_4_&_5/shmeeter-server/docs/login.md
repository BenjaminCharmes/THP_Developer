# Login

**URL** : `/auth/local`

**Method** : `POST`

**Auth required** : NO

**Payload**

```json
{
  "email": string;
  "password": string;
}
```

**Data example**

```json
{
  "username": "josselinesttresbeau@example.com",
  "password": "abcd1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "jwt": string;
  "user": User;
}
```
