# chat-space
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|created_at|datetime|null: false|

### Association
- has_many :groups, through: user_groups
- has_many :messages, through: user_groups
- has_many :user_groups 


## groupsテーブル

Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|group_name|string|null: false|

### Association
- has_many :users, through: user_groups
- has_many :messages, through: user_groups
- has_many :user_groups


## messagesテーブル

Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|body|string|null: false|
|created_at|datetime|null: false|

### Association
- belongs_to :user_group


## user_groups

Column|Type|Options|
|------|----|-------|
|id|integer|null: false, primary_key: true|
|user_id|integer|null: false, foregin_key: true|
|group_id|integer|null: false, foregin_key: true|
|message_id|integer|null: false, foregin_key: true|

### Association
- belongs_to :user
- belongs_to :group
- belongs_to :message








