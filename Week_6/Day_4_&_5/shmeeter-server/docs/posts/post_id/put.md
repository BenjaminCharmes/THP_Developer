# Update Post

**URL** : `/posts/[post_id]`

**Method** : `PUT`

**Auth required** : YES

**Payload**

```json
{
  "text": string;
  "like": number;
  "users_likes": User[];
  "modified": boolean;
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
