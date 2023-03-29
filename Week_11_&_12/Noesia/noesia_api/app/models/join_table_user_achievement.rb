class JoinTableUserAchievement < ApplicationRecord

  belongs_to :user
  belongs_to :achievement

  validates :user_id, uniqueness: { scope: :achievement_id }
  
end
