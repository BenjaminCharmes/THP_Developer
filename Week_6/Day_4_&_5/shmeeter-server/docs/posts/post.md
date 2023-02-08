# New Post

**URL** : `/posts`

**Method** : `POST`

**Auth required** : YES

**Payload**

```json
{
  "text": string;
  "user": number;
}
```

## Success Response

**Code** : `200 OK`

**Content schema**

```json
{
  "id": number;
  "created_at": Date;
  "updated_at": Date;
  "like": number;
  "modified": boolean;
  "text": string;
  "user": User;
  "users_likes": User[];
}
```
