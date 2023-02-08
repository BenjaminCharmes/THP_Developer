# Post

**URL** : `/posts/[post_id]`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

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
