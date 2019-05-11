# chat-space
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups
- has_many :messages

## groupsテーブル

Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|group_name|string|null: false|

### Association
- has_many :users
- has_many :messages

## user_groups

Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|user_id|integer|null: false, foregin_key: true|
|group_id|integer|null: false, foregin_key: true|

### Association
- belongs_to :user
- belongs_to :group
- belongs_to :message

## messagesテーブル

Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|user_group_id|integer|null: false, foreign_key: true|
|group_name|string|null: false|
|image|string|null: true|

### Association
- belongs_to :user_group
- has_many :users
- has_many :groups







