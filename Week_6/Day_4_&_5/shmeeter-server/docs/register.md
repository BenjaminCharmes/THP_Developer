# Register

**URL** : `/auth/local/register`

**Method** : `POST`

**Auth required** : NO

**Payload**

```json
{
  "username": string,
  "email": string;
  "password": string;
}
```

**Data example** All fields must be sent.

```json
{
  "username": "Féfé",
  "email": "féfé@féfé.féfé",
  "password": "féféééééééééééééééééééééééééééééééééééé"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
{
    "jwt": string;
    "user": User;
}
```
