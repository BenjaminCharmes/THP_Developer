# Update Me

**URL** : `/users/me`

**Method** : `PUT`

**Auth required** : YES

**Payload**

```json
{
  "username": string;
  "description": string;
}
```


## Success Response

**Code** : `200 OK`

**Content schema**

```json
{
  "confirmed": boolean;
  "created_at": Date;
  "updated_at": Date;
  "description": string;
  "email": string;
  "id": number;
  "posts_liked": Post[];
  "provider": string;
  "role": {
    "id": number;
    "name": string;
    "description": string;
    "type": string;
  }
  "username": string;
}
```
