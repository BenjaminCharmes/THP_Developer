class Achievement < ApplicationRecord

  has_many :join_table_user_achievements
  has_many :users, through: :join_table_user_achievements

end
