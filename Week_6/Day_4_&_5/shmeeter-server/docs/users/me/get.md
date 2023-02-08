# Me

**URL** : `/users/me`

**Method** : `GET`

**Auth required** : YES

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
